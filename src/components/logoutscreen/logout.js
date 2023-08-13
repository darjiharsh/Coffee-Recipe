import { View } from "react-native";
import { Button, FAB } from "react-native-paper";
import styles from "./style";

const Logout = ({ navigation }) => {

    const handleLogoutPress = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <FAB
                icon="logout"
                onPress={handleLogoutPress}
                label="Logout"
                mode="contained"
            />
        </View>
    );
}

export default Logout;