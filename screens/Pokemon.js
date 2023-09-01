import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import Navigation from "./../src/navigation/Navigation";
import { getPokemonDetail } from "../src/api/pokemon";
import Header from "../src/components/Pokemon/Header";
import Type from "../src/components/Pokemon/Type";
import Stats from "../src/components/Pokemon/Stats";
import  Icon  from "react-native-vector-icons/FontAwesome5";
const Pokemon = (props) => {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);
  
  useEffect(() =>{
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => <Icon 
      name="arrow-left" 
      color="blue" size={20} 
      style={{marginLeft:20}}
      onPress={() => {console.log("go back")}}/>
    });
  },[navigation,params])
  useEffect(() => {
    
    (async () => {
      try {
        const response = await getPokemonDetail(params.id);
        setPokemon(response);
        
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);
  
  if(!pokemon) return null;
  return (
    <ScrollView>
      <Header 
      name={pokemon.name} 
      order={pokemon.order} 
      image={pokemon.sprites.other["home"].front_default} 
      type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types}/>
      <Stats stats={pokemon.stats}/>
    </ScrollView>
  );
};

export default Pokemon;
