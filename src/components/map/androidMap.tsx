import * as React from 'react';
import {
  StyledMap,
  mapStyleJson,
  ToggleSelectButton,
  SelectTextAndroid,
  StyledCallout,
  CalloutTitle,
  CalloutText,
  MapHeader, MapHeaderText,
} from './map.style';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {FeatureHash, Region} from '../../helpers/interfaces';
import {Picker} from '@react-native-community/picker';
import {useEffect} from 'react';
import {useSelect} from './mapHooks';

type Props = {
  initialRegion: Region;
  movies: FeatureHash;
};

const AndroidMap: React.FC<Props> = ({initialRegion, movies}) => {
  const [{locations, selected}, {setSelected, setLocations}] = useSelect();
  useEffect(() => {
    if (movies) {
      const initialTitle = Object.entries(movies)[0][0];
      setSelected(initialTitle);
      setLocations(movies[initialTitle]);
    }
  }, [movies, setLocations, setSelected]);
  const handleSelect = (val) => {
    if (val) {
      setSelected(val);
      setLocations(movies[val]);
    }
  };
  return (
    <>
      <MapHeader>
        <MapHeaderText>{selected}</MapHeaderText>
      </MapHeader>
      <StyledMap
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        showsUserLocation={false}
        followsUserLocation={false}
        customMapStyle={mapStyleJson}>
        {locations &&
          locations.map((location, index) => {
            const {
              geometry: {x, y},
              attributes: {Title, ShootDate, Site, Address},
            } = location;
            const date = ShootDate && new Date(ShootDate);
            return (
              <Marker key={index} coordinate={{latitude: y, longitude: x}}>
                <StyledCallout>
                  <CalloutTitle>{Title}</CalloutTitle>
                  <CalloutText>
                    Site: {Site ? Site : 'Not Available'}
                  </CalloutText>
                  <CalloutText>
                    Address: {Address ? Address : 'Not Available'}
                  </CalloutText>
                  <CalloutText>
                    Date: {date ? date.toDateString() : 'Not Available'}
                  </CalloutText>
                </StyledCallout>
              </Marker>
            );
          })}
      </StyledMap>
      <ToggleSelectButton>
        <SelectTextAndroid>Select Movie</SelectTextAndroid>
        {movies && (
          <Picker
            style={{zIndex: 101, color: 'transparent'}}
            selectedValue={selected}
            onValueChange={(val: string) => handleSelect(val)}>
            {Object.keys(movies).map((movieTitle, index) => {
              return (
                <Picker.Item
                  key={index}
                  label={movieTitle}
                  value={movieTitle}
                />
              );
            })}
          </Picker>
        )}
      </ToggleSelectButton>
    </>
  );
};

export default AndroidMap;
