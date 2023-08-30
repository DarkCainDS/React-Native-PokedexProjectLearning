import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Pokemon from "../../screens/Pokemon";
import getColorByType from "./../../utils/getColorByType";
import { capitalize } from "lodash";

const PokemonCard = (props) => {
  const { pokemon } = props;
  const pokemonColor = getColorByType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    console.log(`Vamos al Pokemon: ${pokemon.name}`);
  };
  console.log(pokemon);
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image style={styles.image} source={{ uri: pokemon.image }}></Image>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 100,
    height: 100,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    fontSize: 11,
  },
});
export default PokemonCard;
