import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteNavigation from "./FavoriteNavigation";
import Account from "./../../screens/Account";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image } from "react-native";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

const tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <tab.Navigator screenOptions={{ headerShown: false }}>
      <tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="heart" color="pink" size={20} />;
          },
        }}
      />
      <tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        screenOptions={{ headerShown: false }}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall(),
        }}
      />
      <tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color="pink" size={20} />
          ),
        }}
      />
    </tab.Navigator>
  );
};

const renderPokeBall = () => {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
};
export default Navigation;
