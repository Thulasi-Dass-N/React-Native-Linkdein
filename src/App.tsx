import { StyleSheet, View } from "react-native";

import { useState } from "react";
import Game from "./components/Game";

const App = () => {
  const [playAgain, setPlayAgain] = useState<number>(1);

  const reset = () => {
    setPlayAgain(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Game
        key={playAgain}
        startNewGame={reset}
        RandomNumberCount={6}
        Timer={10}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
