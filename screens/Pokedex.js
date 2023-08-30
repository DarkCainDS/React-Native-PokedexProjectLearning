import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonApi, getPokemonDetailsApi } from "../src/api/pokemon";
import PokemonList from "../src/components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]); // Moved this line to top level

  const loadPokemon = async () => {
    try {
      const response = await getPokemonApi();

      const pokemonsArray = [];
      console.log(pokemons);
      setPokemons(pokemonsArray);

      for await (const pokemon of response.results) {
        console.log(pokemon.url);
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Hi DarkCainDs");
    (async () => {
      await loadPokemon();
    })();
  }, []);

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
};

export default Pokedex;
