import * as React from 'react';
import {
  StyledMap,
  mapStyleJson,
  ToggleSelectButton,
  SelectText,
} from './map.style';
import {PROVIDER_GOOGLE} from 'react-native-maps';
import {FeatureHash, Region} from '../../helpers/interfaces';
import {Picker} from '@react-native-community/picker';
import {useState} from 'react';

type Props = {
  initialRegion: Region;
  movies: FeatureHash;
};

const IosMap: React.FC<Props> = ({initialRegion, movies}) => {
  const [isSelectToggled, toggleSelect] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('None');
  return (
    <>
      {!isSelectToggled && (
        <StyledMap
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
          showsUserLocation={false}
          followsUserLocation={false}
          customMapStyle={mapStyleJson}
        />
      )}
      {movies && (
        <Picker
          selectedValue={selected}
          onValueChange={(val: string) => setSelected(val)}>
          {Object.keys(movies).map((movieTitle) => {
            return <Picker.Item label={movieTitle} value={movieTitle} />;
          })}
        </Picker>
      )}
      <ToggleSelectButton onPress={() => toggleSelect(!isSelectToggled)}>
        <SelectText>Selected Movie:</SelectText>
        <SelectText numberOfLines={1}>{selected}</SelectText>
      </ToggleSelectButton>
    </>
  );
};

export default IosMap;
