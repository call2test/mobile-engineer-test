import {View, TouchableOpacity, Platform, Text} from 'react-native';
import MapView, {Callout} from 'react-native-maps';
import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const StyledMap = styled(MapView)`
  height: ${hp(100)}px;
  width: ${wp(100)}px;
`;

export const MapContainer = styled(View)`
  height: ${hp(100)}px;
  width: ${wp(100)}px;
  background-color: #ebe3cd;
`;

export const ToggleSelectButton = styled(
  Platform.OS === 'ios' ? TouchableOpacity : View,
)`
  display: flex;
  ${Platform.OS === 'ios' && 'align-items: center'};
  justify-content: center;
  position: absolute;
  bottom: ${Platform.OS === 'ios' ? hp(4) : hp(8)}px;
  align-self: center;
  height: ${hp(10)}px;
  width: ${wp(50)}px;
  background-color: #ff6347;
  border-radius: 20px;
  box-shadow: 0px 1px 2px;
  elevation: 5;
  z-index: 100;
`;

export const MapHeader = styled(View)`
  position: absolute;
  top: 0;
  z-index: 100;
  background-color: #ae9e90;
  display: flex;
  align-content: center;
  justify-content: center;
  height: ${hp(12)}px;
  width: ${wp(100)}px;
  box-shadow: 0px 1px 2px;
  elevation: 5;
`;

export const MapHeaderText = styled(Text)`
  font-weight: 600;
  z-index: 100;
  align-self: center;
  color: #fff;
  font-size: ${hp(5)}px;
`;

export const SelectText = styled(Text)`
  align-self: center;
  font-size: ${hp(3)}px;
  font-weight: 600;
  color: #fff;
`;

export const SelectTextAndroid = styled(Text)`
  position: absolute;
  bottom: ${hp(3.5)}px;
  align-self: center;
  font-size: ${hp(3)}px;
  font-weight: 600;
  color: #fff;
`;

export const StyledCallout = styled(Callout)`
  width: ${wp(60)}px;
`;

export const CalloutTitle = styled(Text)`
  font-size: ${hp(3)}px;
  text-align: center;
  margin-bottom: 10px;
`;

export const CalloutText = styled(Text)`
  font-size: ${hp(1.5)}px;
  margin-bottom: 10px;
`;

export const mapStyleJson = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#523735',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#c9b2a6',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#dcd2be',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ae9e90',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#93817c',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a5b076',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#447530',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#fdfcf8',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f8c967',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#e9bc62',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e98d58',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#db8555',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#806b63',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8f7d77',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#b9d3c2',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#92998d',
      },
    ],
  },
];
