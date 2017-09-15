import React, { Component } from 'react';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types';
import { styles } from './styles';
import ingredienticon from '../../assets/icons/descriptions/ingredientsicon_active.png';
import healthicon from '../../assets/icons/descriptions/healthbenefitsicon_active.png';
import similaricon from '../../assets/icons/descriptions/similaritemsicon_active.png';
import dateicon from '../../assets/icons/events/dateandtimeicon_active.png';
import locationicon from '../../assets/icons/events/locationicon_active.png';
import infoicon from '../../assets/icons/events/moreinfoicon_active.png';
import menuicon from '../../assets/icons//learn/whereinmenu_active.png';

class ThreeIconTabs extends Component {

    eventData = this.props.eventData
    menuItemData = this.props.menuItemData
    ingredientData = this.props.ingredientData

    FirstRoute = () =>
        <View style={[styles.descriptionContainer]}>
            <Text style={styles.description}>
                {(() => {
                    switch (this.ingredientData || this.eventData || this.menuItemData) {
                        case (this.eventData):
                            return this.eventData.date
                        case (this.ingredientData):
                            return this.ingredientData.healthBenefits
                        case (this.menuItemData):
                            return this.menuItemData.ingredients
                        default:
                            null
                    }
                })()}
            </Text>
        </View>;
    SecondRoute = () =>
        <View style={[styles.descriptionContainer]}>
            <Text style={styles.description}>
                {(() => {
                    switch (this.ingredientData || this.eventData || this.menuItemData) {
                        case (this.eventData):
                            return this.eventData.location
                        case (this.ingredientData):
                            return this.ingredientData.details
                        case (this.menuItemData):
                            return this.menuItemData.healthBenefits
                        default:
                            null
                    }
                })()}
            </Text>
        </View>;
    ThirdRoute = () =>
        <View style={[styles.descriptionContainer]}>
            <Text style={styles.description}>
                {(() => {
                    switch (this.ingredientData || this.eventData || this.menuItemData) {
                        case (this.eventData):
                            return this.eventData.details
                        case (this.ingredientData):
                            return this.ingredientData.whereInMenu
                        case (this.menuItemData):
                            return this.menuItemData.similarItems
                        default:
                            null
                    }
                })()}
            </Text>
        </View>;

    state = {
        index: 0,
        routes: [
            {
                key: '1',
                menu: 'Ingredients',
                event: 'Date',
                health: 'Health Benefits',
                eventIcon: dateicon,
                menuIcon: ingredienticon,
                healthIcon: healthicon,
            },
            {
                key: '2',
                menu: 'Health Benefits',
                event: 'Location',
                health: 'Details',
                eventIcon: locationicon,
                menuIcon: healthicon,
                healthIcon: infoicon,
            },
            {
                key: '3',
                menu: 'Similar Items',
                event: 'Details',
                health: 'Where in Menu',
                eventIcon: infoicon,
                menuIcon: similaricon,
                healthIcon: menuicon,
            },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    renderIcon = ({ route }) => {
        switch (this.ingredientData || this.eventData || this.menuItemData) {
            case (this.eventData):
                return <Image style={styles.image} source={route.eventIcon} />
            case (this.ingredientData):
                return <Image style={styles.image} source={route.healthIcon} />
            case (this.menuItemData):
                return <Image style={styles.image} source={route.menuIcon} />
            default:
                null
        }
    }


    label = ({ route }) => {
        switch (this.ingredientData || this.eventData || this.menuItemData) {
            case (this.eventData):
                return route.event
            case (this.ingredientData):
                return route.health
            case (this.menuItemData):
                return route.menu
            default:
                null
        }
    }

    _renderHeader = props =>
        <TabBar
            {...props}
            renderIcon={this.renderIcon}
            tabStyle={styles.tabs}
            labelStyle={styles.title}
            style={styles.tabBar}
            indicatorStyle={styles.indicator}
            getLabelText={this.label}
        />;

    _renderScene = SceneMap({
        '1': this.FirstRoute,
        '2': this.SecondRoute,
        '3': this.ThirdRoute,
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

ThreeIconTabs.propTypes = {
    eventData: PropTypes.shape({
        __typename: PropTypes.string,
        name: PropTypes.string,
        date: PropTypes.string,
        timeStart: PropTypes.string,
        timeEnd: PropTypes.string,
        location: PropTypes.string,
        imageLink: PropTypes.string,
        eventLink: PropTypes.string,
        details: PropTypes.string
    }),
    menuItemData: PropTypes.shape({
        category: PropTypes.string,
        name: PropTypes.string,
        ingredients: PropTypes.string,
        price: PropTypes.string,
        similarItems: PropTypes.string,
        healthBenefits: PropTypes.string
    }),
    ingredientData: PropTypes.shape({
        details: PropTypes.string,
        healthBenefits: PropTypes.string,
        id: PropTypes.string,
        imageLink: PropTypes.string,
        name: PropTypes.string,
        whereInMenu: PropTypes.string
    })
}

export default ThreeIconTabs;