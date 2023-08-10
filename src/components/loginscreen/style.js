import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    button: {
        flex: 1,
    },
    buttonMargin:{
        marginHorizontal: 5
    },
   
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: 350,
        height: 50,
        marginBottom: 30,
        fontSize: 20,
        borderRadius: 5,
        borderColor: '#6650a5',
        borderWidth: 1
    },
    passwordInput: {
        width: 300,
        fontSize: 20
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 350,
        marginBottom: 30,
        backgroundColor: '#6650a5',
        paddingRight: 10,
        borderRadius: 5,
        borderColor: '#6650a5',
        borderWidth: 1  
    },
});
export default styles;