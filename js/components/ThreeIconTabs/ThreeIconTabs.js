import React, { Component } from 'react';
import { View, Image } from 'react-native';
import ProductDescription from '../ProductDescription//';
import { Tabs, Tab } from 'react-native-elements';

import { styles } from './styles';

class HeartIconActive extends Component {
    constructor() {
        super()
        this.state = {
            selectedTab: 'ingredients',
        }
    }

    changeTab(selectedTab) {
        this.setState({ selectedTab })
    }

    render() {
        const { selectedTab } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.tab}>
                    <Tabs tabBarStyle={{ backgroundColor: 'transparent' }} tabBarShadowStyle={{ display: 'none' }}>
                        <Tab
                            titleStyle={styles.title}
                            selectedTitleStyle={styles.selectedTitle}
                            selected={selectedTab === 'ingredients'}
                            title='Ingredients'
                            renderIcon={() => <Image style={styles.image} source={require('../../assets/icons/descriptions/ingredientsicon_default.png')} />}
                            renderSelectedIcon={() => <Image style={styles.image} source={require('../../assets/icons/descriptions/ingredientsicon_active.png')} />}
                            onPress={() => this.changeTab('ingredients')}>
                            <ProductDescription />
                        </Tab>
                        <Tab
                            titleStyle={styles.title}
                            selectedTitleStyle={styles.selectedTitle}
                            selected={selectedTab === 'health_benefit'}
                            title='Health Benefits'
                            renderIcon={() => <Image style={styles.image} source={require('../../assets/icons/descriptions/healthbenefitsicon_default.png')} />}
                            renderSelectedIcon={() => <Image style={styles.image} source={require('../../assets/icons/descriptions/healthbenefitsicon_active.png')} />}
                            onPress={() => this.changeTab('health_benefit')}>
                            <ProductDescription />
                        </Tab>
                        <Tab
                            titleStyle={styles.title}
                            selectedTitleStyle={styles.selectedTitle}
                            selected={selectedTab === 'similar_items'}
                            title='Similar Items'
                            renderIcon={() => <Image style={styles.image} source={require('../../assets/icons/descriptions/similaritemsicon_default.png')} />}
                            renderSelectedIcon={() => <Image style={styles.image} source={require('../../assets/icons/descriptions/similaritemsicon_active.png')} />}
                            onPress={() => this.changeTab('similar_items')}>
                            <ProductDescription />
                        </Tab>
                    </Tabs>
                </View>
            </View>
        );
    }
}

export default HeartIconActive;
