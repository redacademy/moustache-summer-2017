import React from 'react';

import { StackNavigator, TabNavigator } from "react-navigation";
import { Image, StyleSheet, Icon } from 'react-native';

import { colors } from '../config/styles';

import Home from '../scenes/Home/';
import Events from '../scenes/Events/';
import Favourite from '../scenes/Favourite/';
import Growers from '../scenes/Growers/';
import HealthBenefit from '../scenes/HealthBenefit/';
import Menu from '../scenes/Menu/';
import MenuCategoryList from '../scenes/MenuCategoryList/';
import Product from '../scenes/Product/';
import Ingredient from '../scenes/Ingredient/';
import SingleEvent from '../scenes/SingleEvent/';

export const homeStack = StackNavigator({
    Featured: { screen: Home },
    MenuCategoryList: { screen: MenuCategoryList },
    Menu: { screen: Menu },
    Product: { screen: Product }
});

export const learnStack = StackNavigator({
    Ingredients: { screen: HealthBenefit },
    Events: { screen: Events },
    Growers: { screen: Growers },
    Ingredient: { screen: Ingredient },
    SingleEvent: { screen: SingleEvent }
});

export const favouritesStack = StackNavigator({
    Favourites: { screen: Favourite },
})

const homeIcon = require('../assets/icons/footer/homeicon.png');
const learnIcon = require('../assets/icons/footer/bookicon.png');
const favesIcon = require('../assets/icons/footer/favoriteicon.png');

export const Tabs = TabNavigator({
    Home: {
        screen: homeStack,
        navigationOptions: {
            tabBarIcon: <Image source={homeIcon} style={{ height: 20, width: 22, overflow: 'visible' }} />,
        }
    },
    Learn: {
        screen: learnStack,
        navigationOptions: {
            tabBarIcon: <Image source={learnIcon} style={{ height: 20, width: 25, overflow: 'visible' }} />,
        }
    },
    Favourites: {
        screen: favouritesStack,
        navigationOptions: {
            tabBarIcon: <Image source={favesIcon} style={{ height: 20, width: 25, overflow: 'visible' }} />,
        }
    },
}, {
        tabBarOptions: {
            activeBackgroundColor: colors.grey,
            inactiveBackgroundColor: colors.lightGreen,
            inactiveTintColor: 'white',
            activeTintColor: 'white'
        }
    }
)