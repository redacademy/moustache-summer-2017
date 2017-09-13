import React, { Component } from 'react';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Text, View, Image } from 'react-native'

import { colors } from '../../config/styles';
import { styles } from './styles';
import ingredienticon from '../../assets/icons/descriptions/ingredientsicon_active.png';
import healthicon from '../../assets/icons/descriptions/healthbenefitsicon_active.png';
import similaricon from '../../assets/icons/descriptions/similaritemsicon_active.png';

const FirstRoute = () => <View style={[styles.descriptionContainer]}><Text style={styles.description}>{text.firstRoute}</Text></View>;
const SecondRoute = () => <View style={[styles.descriptionContainer]}><Text style={styles.description}>{text.secondRoute}</Text></View>;
const ThirdRoute = () => <View style={[styles.descriptionContainer]}><Text style={styles.description}>{text.thirdRoute}</Text></View>;

const text = {
    firstRoute: "An abundant bowl of rice + quinoa topped with fresh veggies, seeds, sprouts, avocado (when available) + House Dressing.",
    secondRoute: "Rice: provide fast and instant energy and regulate bowel movements",
    thirdRoute: "Freshly squeezed orange juice and raw dessert"
}
class ThreeIconTabs extends Component {
    state = {
        index: 0,
        routes: [
            { key: '1', title: 'Ingredients', icon: ingredienticon },
            { key: '2', title: 'Health Benefits', icon: healthicon },
            { key: '3', title: 'Similar Items', icon: similaricon },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    renderIcon = ({ route }) => {
        return <Image style={styles.image} source={route.icon} />
    }

    _renderHeader = props => 
        <TabBar 
            {...props} 
            renderIcon={this.renderIcon}
            tabStyle={styles.tabs}
            labelStyle={styles.title}
            style={styles.tabBar}
            indicatorStyle={styles.indicator}
            getLabelText={({ route }) => route.title}
        />;

    _renderScene = SceneMap({
        '1': FirstRoute,
        '2': SecondRoute,
        '3': ThirdRoute,
    });

    render() {
        return (
            <View>
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                />
            </View>
        )
    }
}

export default ThreeIconTabs;