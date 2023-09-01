import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonApi, getPokemonDetailsApi } from "../src/api/pokemon";
import PokemonList from "../src/components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]); // Moved this line to top level
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    console.log("Hi DarkCainDs");
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = [];

      

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons((prevPokemons) => [...prevPokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemon={loadPokemon}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
};

export default Pokedex;
