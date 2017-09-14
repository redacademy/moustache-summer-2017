import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductCard from '../../components/ProductCard/';
import { styles } from './styles'

const Events = ({ navigation, eventsList }) => (
    <View style={styles.container}>
    {
        eventsList.map(event => (
            <ProductCard 
                key={event.name}
                eventData={event}
                heartStyle={{right: -100}}
            />
        ))
    }
    </View>
)

Events.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
    eventsList: PropTypes.arrayOf(
        PropTypes.shape({
            __typename: PropTypes.string,
            name: PropTypes.string,
            date: PropTypes.string,
            timeStart: PropTypes.string,
            timeEnd: PropTypes.string,
            location: PropTypes.string,
            imageLink: PropTypes.string,
            eventLink: PropTypes.string,
            details: PropTypes.string
        })
    )
}

const EventsWithNavigation = withNavigation(Events)

export default EventsWithNavigation;
