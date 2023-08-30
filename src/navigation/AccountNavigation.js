import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../../screens/Account";
const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cuenta"
        component={Account}
        options={{ title: "Account" }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
