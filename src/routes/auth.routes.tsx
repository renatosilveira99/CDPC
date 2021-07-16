import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Choice } from '../screens/Choice';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Choice" component={Choice} />
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
