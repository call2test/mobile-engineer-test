import * as React from 'react';
import {StyledMap, mapStyleJson, ToggleSelectButton} from './map.style';
import {PROVIDER_GOOGLE} from 'react-native-maps';
import {regionInterface} from './mapInterfaces';
import {Picker} from '@react-native-community/picker';
import {useState} from 'react';

type Props = {
  initialRegion: regionInterface;
};

const AndroidMap: React.FC<Props> = ({initialRegion}) => {
  const [selected, setSelected] = useState<string>('movie1');
  return (
    <>
      <StyledMap
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        showsUserLocation={false}
        followsUserLocation={false}
        customMapStyle={mapStyleJson}
      />
      <ToggleSelectButton>
        <Picker
          selectedValue={selected}
          onValueChange={(val) => setSelected(val.toString())}>
          <Picker.Item label="Movie1" value="movie1" />
          <Picker.Item label="Movie2" value="movie2" />
          <Picker.Item label="Movie3" value="movie3" />
          <Picker.Item label="Movie4" value="movie4" />
          <Picker.Item label="Movie5" value="movie5" />
        </Picker>
      </ToggleSelectButton>
    </>
  );
};

export default AndroidMap;
