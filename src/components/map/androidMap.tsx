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

const AndroidMap: React.FC<Props> = ({initialRegion, movies}) => {
  const [selected, setSelected] = useState<string>('None');
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
        <SelectText>Selected Movie:</SelectText>
        {movies && (
          <Picker
            selectedValue={selected}
            onValueChange={(val: string) => setSelected(val)}>
            {Object.keys(movies).map((movieTitle) => {
              return <Picker.Item label={movieTitle} value={movieTitle} />;
            })}
          </Picker>
        )}
      </ToggleSelectButton>
    </>
  );
};

export default AndroidMap;
