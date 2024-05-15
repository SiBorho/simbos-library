import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { SimboColor, SimboText } from 'simbos-library';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: SimboColor.ACCENT }}>Result: 43</Text>
      <SimboText content="Das hat geklappt!??" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
