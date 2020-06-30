import * as React from 'react';
import {Platform} from 'react-native';
import AndroidMap from './androidMap';
import IosMap from './iosMap';
import {MapContainer} from './map.style';
import {useAbqOpenData} from './mapHooks';
import {useEffect} from 'react';

const Map: React.FC = () => {
  const [{data, isLoading, isError}, setFetchUrl] = useAbqOpenData();
  useEffect(() => {
    setFetchUrl(
      'https://c2t-cabq-open-data.s3.amazonaws.com/film-locations-json-all-records_03-19-2020.json',
    );
  }, [setFetchUrl]);
  const initialRegion = {
    latitude: 35.0844,
    longitude: -106.6504,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };
  return (
    <MapContainer>
      {Platform.OS === 'ios' ? (
        <IosMap initialRegion={initialRegion} movies={data} />
      ) : (
        <AndroidMap initialRegion={initialRegion} movies={data} />
      )}
    </MapContainer>
  );
};

export default Map;
