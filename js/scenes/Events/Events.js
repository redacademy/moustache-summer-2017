import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { styles } from './styles'

const Events = ({ navigation }) => (
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
    }).isRequired
}

const EventsWithNavigation = withNavigation(Events)

export default EventsWithNavigation;
