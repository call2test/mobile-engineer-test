import * as React from 'react';
import {Platform} from 'react-native';
import AndroidMap from './androidMap';
import IosMap from './iosMap';
import {MapContainer} from './map.style';

const Map: React.FC = () => {
  const initialRegion = {
    latitude: 35.0844,
    longitude: -106.6504,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
  };
  return (
    <MapContainer>
      {Platform.OS === 'ios' ? (
        <IosMap initialRegion={initialRegion} />
      ) : (
        <AndroidMap initialRegion={initialRegion} />
      )}
    </MapContainer>
  );
};

export default Map;
