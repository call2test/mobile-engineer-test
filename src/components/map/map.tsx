import * as React from 'react';
import {Platform} from 'react-native';
import AndroidMap from './androidMap';
import IosMap from './iosMap';
import {MapContainer} from './map.style';
import {useAbqOpenData} from './mapHooks';
import {useEffect} from 'react';

const Map: React.FC = () => {
  const [result, fetchData] = useAbqOpenData();
  useEffect(() => {
    fetchData(
      'https://c2t-cabq-open-data.s3.amazonaws.com/film-locations-json-all-records_03-19-2020.json',
    );
  }, [result, fetchData]);
  const initialRegion = {
    latitude: 35.0844,
    longitude: -106.6504,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
  };
  return (
    <MapContainer>
      {Platform.OS === 'ios' ? (
        <IosMap initialRegion={initialRegion} movies={result.data} />
      ) : (
        <AndroidMap initialRegion={initialRegion} movies={result.data} />
      )}
    </MapContainer>
  );
};

export default Map;
