import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../loginscreen/login';
import Home from "../homescreen/home";
import Logout from "../logoutscreen/logout";

const Stack = createStackNavigator();

const MainComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Logout" component={Logout} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainComponent;
