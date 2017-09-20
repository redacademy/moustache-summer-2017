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


const RouterContent = ({ children }) => (
    <View style={[styles.descriptionContainer]}>
        <Text style={styles.description}>
            {children}
        </Text>
    </View>
)

class ThreeIconTabs extends Component {
    data = this.props.data
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

    getContext = (typename) => {
        switch (typename.toLowerCase()) {
            case "event":
                return {
                    _getIcon: ({ route }) => <Image style={styles.image} source={route.eventIcon} />,
                    _getLabel: ({ route }) => route.event,
                    _getRoute1: () => <RouterContent> {this.props.data.date} </RouterContent>,
                    _getRoute2: () => <RouterContent> {this.props.data.location} </RouterContent>,
                    _getRoute3: () => <RouterContent> {this.props.data.details} </RouterContent>,
                }
            case "health":
                return {
                    _getIcon: ({ route }) => <Image style={styles.image} source={route.healthIcon} />,
                    _getLabel: ({ route }) => route.health,
                    _getRoute1: () => <RouterContent>{this.props.data.healthBenefits}</RouterContent>,
                    _getRoute2: () => <RouterContent>{this.props.data.details}</RouterContent>,
                    _getRoute3: () => <RouterContent>{this.props.data.whereInMenu}</RouterContent>,
                }
            case "menuitem":
                return {
                    _getIcon: ({ route }) => <Image style={styles.image} source={route.menuIcon} />,
                    _getLabel: ({ route }) => route.menu,
                    _getRoute1: () => <RouterContent>{this.props.data.ingredients}</RouterContent>,
                    _getRoute2: () => <RouterContent> {this.props.data.healthBenefits}</RouterContent>,
                    _getRoute3: () => <RouterContent>{this.props.data.similarItems}</RouterContent>,
                }
            default:
                return
        }
    }

    handleIndexChange = index => this.setState({ index });

    renderHeader = props => {
        const context = this.getContext(this.props.data.__typename);
        return (
            <TabBar
                {...props}
                renderIcon={context._getIcon}
                tabStyle={styles.tabs}
                labelStyle={styles.title}
                style={styles.tabBar}
                indicatorStyle={styles.indicator}
                getLabelText={context._getLabel}
            />);
    }

    getRenderScene = () => {
        const context = this.getContext(this.props.data.__typename);
        return SceneMap({
            '1': context._getRoute1,
            '2': context._getRoute2,
            '3': context._getRoute3
        });
    }

    render() {
        return (
            <View>
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this.getRenderScene()}
                    renderHeader={this.renderHeader}
                    onIndexChange={this.handleIndexChange}
                />
            </View>
        )
    }
}

ThreeIconTabs.propTypes = {
    data: PropTypes.shape({
        __typename: PropTypes.string,
        name: PropTypes.string,
        date: PropTypes.string,
        timeStart: PropTypes.string,
        timeEnd: PropTypes.string,
        location: PropTypes.string,
        imageLink: PropTypes.string,
        eventLink: PropTypes.string,
        details: PropTypes.string,
        ingredients: PropTypes.string,
        price: PropTypes.string,
        similarItems: PropTypes.string,
        healthBenefits: PropTypes.string,
        id: PropTypes.string,
        whereInMenu: PropTypes.string
    }),
}
RouterContent.propTypes = {
    children: PropTypes.arrayOf(PropTypes.string)
}


export default ThreeIconTabs;