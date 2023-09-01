import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { map, capitalize } from "lodash";
import getColorByType from "../../../utils/getColorByType";
const Type = (props) => {
  const { types } = props;
  console.log(types);

  return (
    <View style={styles.content}>
      <Text>Tiposs...</Text>
      {map(types, (item, index) => {
        return (
          <View
            key={index}
            style={{
              ...styles.pill,
              backgroundColor: getColorByType(item.type.name),
            }}
          >
            <Text style={styles.letters}>{item.type.name}</Text>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 120,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  letters: {
    fontFamily: "monospace",
    fontSize: 15,
    backgroundColor: "transparent",
    padding: 5,
    borderColor: "#b5b5b5",
    borderWidth: 1,
    borderRadius: 10,
    color: "black",
    letterSpacing: 1,
  },
});
export default Type;
