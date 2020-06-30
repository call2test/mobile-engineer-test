import {useEffect, useState} from 'react';
import axios from 'axios';
import {hashFeatures} from '../../helpers/data';
import {Feature, Result} from '../../helpers/interfaces';

export const useAbqOpenData = () => {
  const [data, setData] = useState<{}>();
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        const parsedResult = await hashFeatures(result.data.features);
        setData(parsedResult);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);
  const result: Result = {data, isLoading, isError};
  return [result, setUrl];
};
