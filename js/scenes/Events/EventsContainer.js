import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Events from './Events';
import { ActivityIndicator } from 'react-native';

class EventsContainer extends Component {
    static route = {
        navigationBar: {
            title: 'Events',
        }
    }

    componentDidMount() {
        // ADD DISPATCH FUNCTION HERE TO FETCH DATA
    }

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
    })
}

function mapStateToProps(state) {
    return {
        // ADD REDUX STATE HERE
    }
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
export default connect(mapStateToProps)(eventsList);