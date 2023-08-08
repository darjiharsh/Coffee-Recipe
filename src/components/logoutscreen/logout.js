import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import styles from "./style";

const Logout = ({ navigation }) => {

    const handleLogoutPress = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logoutScreenText}>Logout Screen</Text>
            <Button mode="contained"
                    onPress={handleLogoutPress}>
                    Logout!
                </Button>
        </View>
    );
}

export default Logout;