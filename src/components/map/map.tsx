import * as React from 'react';
import {StyledMap, mapStyleJson} from './map.style';
import {PROVIDER_GOOGLE} from 'react-native-maps';

const Map: React.FC = () => {
  let setInitialRegion = () => {
    return {
      latitude: 35.0844,
      longitude: -106.6504,
      latitudeDelta: 0.3,
      longitudeDelta: 0.3,
    };
  };
  return (
    <StyledMap
      provider={PROVIDER_GOOGLE}
      initialRegion={setInitialRegion()}
      showsUserLocation={false}
      followsUserLocation={false}
      customMapStyle={mapStyleJson}
    />
  );
};

export default Map;
