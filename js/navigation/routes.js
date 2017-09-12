import React from 'react';

import { StackNavigator, TabNavigator } from "react-navigation";
import { Image, StyleSheet } from 'react-native';

import { colors } from '../config/styles';

import Home from '../scenes/Home/';
import Learn from '../scenes/Learn/';
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
    Home: { screen: Home },
    MenuCategoryList: { screen: MenuCategoryList },
    Menu: { screen: Menu },
    Product: { screen: Product }
});

export const learnStack = StackNavigator({
    Learn: { screen: Learn },
    Events: { screen: Events },
    HealthBenefit: { screen: HealthBenefit },
    Growers: { screen: Growers },
    Ingredient: { screen: Ingredient },
    SingleEvent: { screen: SingleEvent }
});

export const favouritesStack = StackNavigator({
    Favourites: { screen: Favourite }
})

export const Tabs = TabNavigator({
    Home: {
        screen: homeStack,
        navigatorOptions: {
            tabBar: {
                label: 'Home',
                icon: ({ tintColor }) => {
                    <Image
                        source={require('../assets/icons/homeicon.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />;
                },
            }
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
    Favourites: {
        screen: favouritesStack,
        navigatorOptions: {
            tabBar: {
                label: 'Favourites',
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

const styles = StyleSheet.create({
    icon: {
        width: 100,
        height: 100,
    },
});
