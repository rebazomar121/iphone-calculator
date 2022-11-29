import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Home from "../screens/Home"

const Navigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      {/* <Header /> */}
      <Stack.Navigator initialRouteName="Home">
        {/* Home */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            animation: "slide_from_left",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
