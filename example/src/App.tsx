import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply } from 'simbos-library';
import { SimboColor } from '@simbos-style';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(6, 8).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ color: SimboColor.ACCENT }}>Result: {result}</Text>
      {/* <SimboText content="Das hat geklappt!" /> */}
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
