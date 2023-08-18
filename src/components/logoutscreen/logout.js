import React, { useContext } from "react";
import { View } from "react-native";
import { FAB } from "react-native-paper";
import styles from "./style";
import { AuthContext } from "../../contexts/AuthContext";

const Logout = ({ navigation }) => {
    const { logout } = useContext(AuthContext);

    const handleLogoutPress = () => {
        logout();
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