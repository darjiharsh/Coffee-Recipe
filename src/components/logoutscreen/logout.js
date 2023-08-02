import { View, Button } from "react-native";
import { Text } from "react-native-paper";
import styles from "./style";

const Logout = ({ navigation }) => {

    const handleLogoutPress = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logoutScreenText}>Logout Screen</Text>
            <Button style={styles.logoutButton} title="Logout" onPress={handleLogoutPress} />
        </View>
    );
}

export default Logout;