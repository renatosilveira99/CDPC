import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SideBar from '../components/SideBar';
import { Header } from '../components/Header';
import { SignIn } from '../screens/SignIn';
import { Choice } from '../screens/Choice';
import { Home } from '../screens/Home';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {

    return (
        <Drawer.Navigator
            drawerStyle={{ marginTop: 0 }}
            drawerPosition="left"
            drawerContent={(props) => <SideBar {...props} />}
            initialRouteName="SignIn"
            screenOptions={{
                swipeEnabled: false,
                headerShown: false,
                header: () => (
                    <Header isAdmin={false} title={"teste"} />
                ),
            }}
        >
            <Drawer.Screen name="SignIn" component={SignIn} />
            <Drawer.Screen name="Choice" component={Choice} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
    );
}