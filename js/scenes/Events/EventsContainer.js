import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator } from 'react-native';

import Events from './Events';
import CustomHeader from '../../components/Header/';

class EventsContainer extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <CustomHeader
                    title={'Learn'}
                    buttons={['Events', 'Ingredients', 'Growers']}
                    selectedTab={0}
                    navigation={navigation}
                />
            )
        }
    };

    render() {
        const { data: { loading, events } } = this.props;

        if (loading) return <ActivityIndicator />;
        return (
            <Events
                eventsList={events}
            />
        )
    }
}

EventsContainer.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        events: PropTypes.arrayOf(
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
    }).isRequired,
    navigation: PropTypes.shape({
        dispatch: PropTypes.func,
    })
}

const fetchEvents = gql`
    query fetchEvents {
        events {
            name
            date
            timeStart
            timeEnd
            location
            imageLink
            eventLink
            details
        }
    }
`

const eventsList = graphql(fetchEvents)(EventsContainer);
export default connect()(eventsList);