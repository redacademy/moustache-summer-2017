import React from 'react';

import { StackNavigator, TabNavigator } from "react-navigation";
import { Icon } from 'react-native';

import { colors } from '../config/styles';

import Home from '../scenes/Home/';
import Learn from '../scenes/Learn/';

export const homeStack = StackNavigator({
    Home: { screen: Home },
});

export const learnStack = StackNavigator({
    Learn: { screen: Learn }
})

export const Tabs = TabNavigator({
    Home: {
        screen: homeStack,
        navigatorOptions: {
            tabBar: {
                label: 'Home',
            },
            tabBarIcon: (<Icon style={{width: 50, height: 50}} source={require('../assets/icons/homeicon.svg')} />),
        }
    },
    Learn: {
        screen: learnStack,
        navigatorOptions: {
            tabBar: {
                label: 'Learn',
            }
        }
    },
}, {
    tabBarOptions: {
        activeBackgroundColor: colors.grey,
        inactiveBackgroundColor: colors.lightGreen,
        inactiveTintColor: 'white',
        activeTintColor: 'white',
    }
    }
)
