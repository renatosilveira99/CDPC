import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SideBar from '../components/SideBar';
import { Header } from '../components/Header';
import { SignIn } from '../screens/SignIn';
import { Choice } from '../screens/Choice';
import { Details } from '../screens/Details';
import { Home } from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import CreateNews from '../screens/CreateNews';
import CreateProject from '../screens/CreateProject';

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
                    <Header isAdmin={false} title={"teste"} campus={'Poços de Caldas'} />
                ),
            }}
        >
            <Drawer.Screen name="SignIn" component={SignIn} />
            <Drawer.Screen name="Choice" component={Choice} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="Details" component={Details} />
            <Drawer.Screen name="CreateNews" component={CreateNews} />
            <Drawer.Screen name="CreateProject" component={CreateProject} />
        </Drawer.Navigator>
    );
}
