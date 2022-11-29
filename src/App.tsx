// App.js
import React from "react"
import { Text, View } from "react-native"
import { TailwindProvider } from "tailwindcss-react-native"
import "tailwindcss-react-native/types.d"

import { SafeAreaProvider } from "react-native-safe-area-context"

import Navigation from "./navigation/Navigation"

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </TailwindProvider>
  )
}
