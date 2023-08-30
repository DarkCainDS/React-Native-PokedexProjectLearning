import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorite from "../../screens/Favorite";

const Stack = createNativeStackNavigator();
const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteNavigation;
