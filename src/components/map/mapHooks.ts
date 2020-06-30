import {useEffect, useState} from 'react';
import axios from 'axios';
import {hashFeatures} from '../../helpers/data';
import {Feature} from '../../helpers/interfaces';

export const useAbqOpenData = () => {
  const [data, setData] = useState<{}>();
  const [url, setFetchURL] = useState('');
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
  return [{data, isLoading, isError}, setFetchURL];
};

export const useSelect = () => {
  const [isSelectToggled, toggleSelect] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [locations, setLocations] = useState<Array<Feature> | null>(null);
  return [
    {selected, locations, isSelectToggled},
    {setSelected, setLocations, toggleSelect},
  ];
};
