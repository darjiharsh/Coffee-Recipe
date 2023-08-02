import { View } from 'react-native';
import styles from './style';
import { IconButton, MD3Colors, Text } from "react-native-paper";
import React from 'react';
import { Tab, TabView } from '@rneui/themed';

const Home = ({ navigation }) => {

    const [index, setIndex] = React.useState(0);

    const handleProfileTap = () => {
        navigation.navigate('Logout');
    }

    const headerComponent = () => (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <Text style={styles.headerText}>Welcome</Text>
                <Text style={styles.description}>
                    What would you like to have today?
                </Text>
            </View>
            <View>
                <IconButton
                    icon="account-circle"
                    color={MD3Colors.primary50}
                    size={50}
                    onPress={handleProfileTap}
                />
            </View>
        </View>
    );

    return (
        <>
            <View style={styles.container}>
                {headerComponent()}
                <Text style={styles.homeScreenText}>Home Screen</Text>
            </View>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: 'white',
                    height: 3,
                }}
                variant="primary"
            >
                <Tab.Item
                    title="Posts"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'list', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    title="Likes"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
                />
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item style={styles.postTab}>
                    <Text>Post</Text>
                </TabView.Item>
                <TabView.Item style={styles.likeTab}>
                    <Text>Likes</Text>
                </TabView.Item>
            </TabView>
        </>
    );
}

export default Home;