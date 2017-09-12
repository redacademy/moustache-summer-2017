import React, { Component } from 'react';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Text, View, Image } from 'react-native'

import { colors } from '../../config/styles';
import { styles } from './styles';

const FirstRoute = () => <View style={[styles.descriptionContainer]}><Text style={styles.description}>An abundant bowl of rice + quinoa topped with fresh veggies, seeds, sprouts, avocado (when available) + House Dressing.</Text></View>;
const SecondRoute = () => <View style={[styles.descriptionContainer]}><Text style={styles.description}>Rice: provide fast and instant energy and regulate bowel movements</Text></View>;
const ThirdRoute = () => <View style={[styles.descriptionContainer]}><Text style={styles.description}>Freshly squeezed orange juice and raw dessert</Text></View>;
class ThreeIconTabs extends Component {
    state = {
        index: 0,
        routes: [
            { key: '1', title: 'Ingredients', icon: require('../../assets/icons/descriptions/ingredientsicon_active.png') },
            { key: '2', title: 'Health Benefits', icon: require('../../assets/icons/descriptions/healthbenefitsicon_active.png') },
            { key: '3', title: 'Similar Items', icon: require('../../assets/icons/descriptions/similaritemsicon_active.png') },
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
            tabStyle={{backgroundColor: 'white', padding: 0}}
            labelStyle={styles.title}
            style={styles.tabBar}
            indicatorStyle={{backgroundColor: 'transparent'}}
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