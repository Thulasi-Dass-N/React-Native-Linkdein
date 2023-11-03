import { StyleSheet, View } from "react-native";

import React from "react";
import Game from "./src/components/Game";

const App = () => {
  return (
    <View style={styles.container}>
      <Game RandomNumberCount={6} Timer={10} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
