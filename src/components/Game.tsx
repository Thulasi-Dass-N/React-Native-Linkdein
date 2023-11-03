/* eslint-disable react/no-array-index-key */
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import RandomValue from "@src/components/RandomValue";

type ItemProps = { RandomNumberCount: number; Timer: number };

const Game = ({ RandomNumberCount, Timer }: ItemProps) => {
  const [selectedValue, setSelectedValue] = useState([] as any);
  const [randomValues, setRandomValues] = useState([] as any);
  const [gameStatus, setGameStatus] = useState<string>("PLAYING");
  const [gameTimer, setGameTimer] = useState<number>(Timer);

  useEffect(() => {
    const RandomValues = Array.from({ length: RandomNumberCount }).map(
      () => 1 + Math.floor(10 * Math.random()),
    );
    setRandomValues(RandomValues);
  }, []);
  useEffect(() => {
    const Interval = setInterval(() => {
      setGameTimer(prev => prev - 1);
    }, 1000);

    return () => {
      clearInterval(Interval);
    };
  }, []);

  const RandomNumberTarget = randomValues
    .slice(0, RandomNumberCount - 2)
    .reduce((acc: any, cur: any) => acc + cur, 0);
  const isNumberSelected = (numIndex: number) =>
    selectedValue.indexOf(numIndex) >= 0;
  const selectRandomValue = (index: number) => {
    setSelectedValue((prev: any) => [...prev, index]);
  };

  const GameStatus = () => {
    const Sum = selectedValue.reduce(
      (acc: number, curr: number) => acc + randomValues[curr],
      0,
    );

    if (RandomNumberTarget > 0) {
      if (Sum < RandomNumberTarget) {
        setGameStatus("PLAYING");
      }
      if (Sum === RandomNumberTarget) {
        setGameStatus("WON");
      }
      if (Sum > RandomNumberTarget) {
        setGameStatus("LOST");
      }
    }
  };

  useEffect(() => {
    GameStatus();
  }, [selectedValue]);

  return (
    <View style={styles.container}>
      <Text style={[styles.randomValue, styles[`STATUS_${gameStatus}`]]}>
        {RandomNumberTarget}
      </Text>
      <View style={styles.RandomContainer}>
        {randomValues.map((RandomNum: number, index: number) => (
          <RandomValue
            key={index}
            id={index}
            RandomNumberValue={RandomNum}
            isDisabled={isNumberSelected(index) || gameStatus !== "PLAYING"}
            onSelected={selectRandomValue}
          />
        ))}
      </View>
      <Text
        style={{
          marginLeft: 100,
        }}>
        {gameTimer}
      </Text>
    </View>
  );
};

export default Game;

const styles: {
  [key: string]: any;
} = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    paddingTop: 100,
  },
  randomValue: {
    fontSize: 40,
    marginHorizontal: 50,
    textAlign: "center",
    padding: 10,
  },
  RandomContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  STATUS_PLAYING: {
    backgroundColor: "#aaa",
  },
  STATUS_WON: {
    backgroundColor: "green",
  },
  STATUS_LOST: {
    backgroundColor: "red",
  },
});
