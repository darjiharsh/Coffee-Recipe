import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    homeScreenText: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        marginTop: 50,
    },
    headerLeft: {
        flex: 1,
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    description: {
        fontSize: 26,
        marginTop: 8,
    },
    postTab: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
    },
    likeTab: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
    },
});

export default styles;