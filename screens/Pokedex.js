import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getPokemonApi, getPokemonDetailsApi } from "../src/api/pokemon";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState(""); // This is fine
  const [pokemons, setPokemons] = useState([]); // Moved this line to top level

  const loadPokemon = async () => {
    try {
      const response = await getPokemonApi();

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen:
            pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Hi DarkCainDs");
    loadPokemon();
  }, []);

  return (
    <View>
      <Text>POkedex</Text>
    </View>
  );
};

export default Pokedex;
