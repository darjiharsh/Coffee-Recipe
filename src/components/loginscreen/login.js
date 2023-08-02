import { StatusBar } from 'expo-status-bar';
import { Button, View } from 'react-native';
import { Text } from "react-native-paper";
import styles from './style';

const Login = ({ navigation }) => {

    const handleLoginPress = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.loginScreenText}>Login Screen</Text>
            <Button style={styles.loginButton} title="Login" onPress={handleLoginPress} />
            <StatusBar style="auto" />
        </View>
    );
}

export default Login;
