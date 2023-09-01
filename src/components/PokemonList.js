import React from "react";
import {StyleSheet, FlatList, ActivityIndicator, Platform} from "react-native";
import PokemonCard from "./PokemonCard";
const PokemonList = (props) => {
  const { pokemons, loadPokemon, isNext } = props;
  //console.log(Platform.OS)
  const loadMore = () => {
    console.log("Loading Pokemons");
    loadPokemon();
  };
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          color="#AEAEAE"
        />)
      }
    />
  );
};
const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 10 : 0
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
export default PokemonList;
