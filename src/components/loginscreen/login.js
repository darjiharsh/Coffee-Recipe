import React, { useState, useEffect, useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Alert, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, Provider } from "react-native-paper";
import styles from './style';
import { auth } from '../database/config';
import NetInfo from '@react-native-community/netinfo'
import { AuthContext } from "../../components/contexts/AuthContext";
import { Entypo } from '@expo/vector-icons';


const Login = ({ navigation }) => {
    const { login, signup } = useContext(AuthContext);
    const [showLogin, setShowLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isConnected, setIsConnected] = useState(true);
    const [isRegistering, setIsRegistering] = useState(false);
    const [showPassword, setShowPassword] = useState(false);



    const handleRegister = async () => {
        if (!isConnected) {
            Alert.alert('Error', 'No internet connection');
            return;
        }
        if (!validateForm()) return;
        if (!showLogin && password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        try {
            // Check if the email is already registered
            const signInMethods = await auth.fetchSignInMethodsForEmail(email);
            if (signInMethods && signInMethods.length > 0) {
                Alert.alert('Error', 'Email is already registered');
                return;
            }

            // If the email is not registered, proceed with registration
            await signup(email, password);
            setIsRegistering(true);
            navigation.navigate('Home');
            clearForm();
        } catch (error) {
            console.log('Signup error:', error);
            Alert.alert('Error', 'Failed to register');
        }
    };

    const handleLoginPress = async () => {
        if (!isConnected) {
            Alert.alert('Error', 'No internet connection');
            return;
        }
        if (!validateForm()) return;
        try {
            await login(email, password);
            setIsRegistering(false);
            navigation.navigate('Home');
            clearForm();
        } catch (error) {
            console.log('Login error:', error);
            if (error.code === 'auth/user-not-found') {
                Alert.alert('Error', 'No user found');
            } else if (error.code === 'auth/wrong-password') {
                Alert.alert('Error', 'Incorrect password! Please try again.');
            } else {
                Alert.alert('Error', 'Invalid email or password');
            }
        }
    };

    const validateForm = () => {
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password');
            return false;
        }
        if (password.length < 6) {
            Alert.alert('Error', 'Password should be at least 6 characters');
            return false;
        }
        if (!emailPattern.test(email)) {
            Alert.alert('Error', 'Please enter a valid email');
            return false;
        }
        return true;
    };

    const clearForm = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleToggleView = () => {
        setShowLogin(!showLogin);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setIsRegistering(true);
                console.log('User Status:', isRegistering);
                console.log('Loggedin Login Subscribe:', isRegistering);
            } else {
                console.log('Testing');
            }
        })

        // Check internet connectivity
        const unsubscribeNetInfo = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });

        return () => {
            unsubscribe();
            unsubscribeNetInfo();
        };
    }, [])

    useEffect(() => {
        if (!isConnected) {
            Alert.alert('Error', 'No internet connection');
        }
    }, [isConnected]);

    return (
        <Provider>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Button
                        mode={showLogin ? 'contained' : 'outlined'}
                        onPress={handleToggleView}
                        style={[styles.button, styles.buttonMargin]}
                    >
                        Login
                    </Button>

                    <Button
                        mode={showLogin ? 'outlined' : 'contained'}
                        onPress={handleToggleView}
                        style={styles.button}
                    >
                        Signup
                    </Button>
                </View>
                <Text style={styles.header}>{showLogin ? 'Login' : 'Signup'}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder='Email'
                    autoCapitalize="none"
                    selectionColor="#EE7CDC"
                    keyboardType="email-address"
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        selectionColor="#EE7CDC"
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="white" />
                    </TouchableOpacity>
                </View>
                {!showLogin && (
                    <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Confirm Password"
                        secureTextEntry={!showPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={confirmPassword}
                        selectionColor="#EE7CDC"
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="white"/>
                    </TouchableOpacity>
                </View>
                )}
                <Button mode="contained"
                    onPress={showLogin ? handleLoginPress : handleRegister}>
                    Go!
                </Button>
            </View>
        </Provider>
    );
}

export default Login;



