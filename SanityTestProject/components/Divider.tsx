import React from 'react';
import { View } from 'react-native';

//TODO: Figure out what the type of style should be
const Divider = ({ style }: { style?: any }) => (
  <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, ...style }} />
);

export default Divider;
