import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { styles } from './styles'

const Events = ({ navigation, eventsList }) => (
    <View style={styles.container}>
        <Text>This is Events scene</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SingleEvent')}>
            <Text> Take me to an event </Text>
        </TouchableOpacity>
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
