import { StyleSheet, View } from "react-native";

import Game from "./components/Game";

const App = () => (
  <View style={styles.container}>
    <Game RandomNumberCount={6} Timer={10} />
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
