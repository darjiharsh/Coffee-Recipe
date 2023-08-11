import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../loginscreen/login';
import Home from "../homescreen/home";
import Logout from "../logoutscreen/logout";
import AddPost from "../AddPost/addPost";
import { AuthContext } from '../contexts/AuthContext';


const Stack = createStackNavigator();

const MainComponent = () => {
    const { user } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator >
                {user ? (
                    <>
                        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                        <Stack.Screen name="Logout" component={Logout} />
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="AddPost" component={AddPost} options={{ headerShown: false }} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainComponent;
