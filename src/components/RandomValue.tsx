import { Pressable, StyleSheet, Text } from "react-native";

type ItemProps = {
  id: number | undefined;
  RandomNumberValue: number;
  isDisabled: boolean;
  onSelected: Function;
};

const RandomValue = ({
  id,
  RandomNumberValue,
  isDisabled,
  onSelected,
}: ItemProps) => {
  const handlePress = () => {
    // if (isDisabled) {
    // console.log('Pressed', id);()
    //   return;
    // }
    onSelected(id);
  };
  return (
    <Pressable disabled={isDisabled} onPress={handlePress}>
      <Text style={[styles.randomValue, isDisabled && styles.selectedStyle]}>
        {RandomNumberValue}
      </Text>
    </Pressable>
  );
};

export default RandomValue;

const styles = StyleSheet.create({
  randomValue: {
    fontSize: 35,
    width: 150,
    backgroundColor: "#999",
    marginHorizontal: 15,
    marginVertical: 35,
    textAlign: "center",
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
  },
  selectedStyle: {
    opacity: 0.5,
  },
});
