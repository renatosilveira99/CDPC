import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Choice } from '../screens/Choice';
import { Home } from '../screens/Home';
import DrawerRoutes from './drawer.routes'

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      initialRouteName="DrawerRoutes"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen name="DrawerRoutes" component={DrawerRoutes} />
    </Navigator>
  )
}
