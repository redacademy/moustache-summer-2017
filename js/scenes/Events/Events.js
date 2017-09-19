import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductCard from '../../components/ProductCard/';
import { styles } from './styles'

const Events = ({ navigation, eventsList }) => (
    <ScrollView>
        <View style={styles.container}>
            {
                eventsList.map(event => (
                    <TouchableOpacity key={event.name} onPress={() => navigation.navigate('SingleEvent', event)}>
                        <ProductCard
                            data={event}
                            renderArrow
                            numberOfLines={1} ellipsizeMode={'tail'}
                        />
                    </TouchableOpacity>
                ))
            }
        </View>
    </ScrollView>
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
