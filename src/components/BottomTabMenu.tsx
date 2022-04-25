import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text } from 'react-native';
import WatchOne from '../screens/WatchOne';
import WatchTwo from '../screens/WatchTwo';
import WatchThree from '../screens/WatchThree';
const { width, height } = Dimensions.get('window');
EStyleSheet.build({$rem: width / 380});

const Tab = createBottomTabNavigator();

const tabsArray = [
    { route: 'WatchOne', label: 'Watch 1', component: WatchOne },
    { route: 'WatchTwo', label: 'Watch 2', component: WatchTwo },
    { route: 'WatchThree', label: 'Watch 3', component: WatchThree },
]

const TabBarButton = (props: any) => {
    const { tab, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={1}>
            <Text style={{color: focused ? "#000" : "#616A6B"}}>{tab.label}</Text>
        </TouchableOpacity>
    )
}

const BottomTabMenu = () => {
    return (

        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBarStyle
        }}>
            {tabsArray.map((tab, index) => {
                return <Tab.Screen key={index} name={tab.route} component={tab.component} options={{
                    tabBarShowLabel: false,
                    tabBarButton: (props) => <TabBarButton {...props} tab={tab} />
                }} />
            })}
        </Tab.Navigator>
    );
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {fontSize: '24rem'},
    tabBarStyle: {
        height: "55rem",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'absolute',
    }
})

export default BottomTabMenu;