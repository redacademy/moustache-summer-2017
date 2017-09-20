import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Linking } from 'react-native';

import SingleEvent from './SingleEvent';
import CustomHeader from '../../components/Header/';

class SingleEventContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <CustomHeader
                    title={'Learn'}
                    buttons={['Events', 'Ingredients', 'Growers']}
                    selectedTab={0}
                    navigation={navigation}
                    backButton={true}
                />
            )
        }
    };

    state = {
        error: null
    }

    openLink(url) {
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                alert('Cannot open!')
            } else {
                return Linking.openURL(url);
            }
        }).catch(error => this.setState({ error }));
    }

    render() {
        return (
            <SingleEvent
                eventData={this.props.navigation.state.params}
                openLink={this.openLink}
            />
        )
    }
}

SingleEventContainer.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
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
        })
    })
};

export default SingleEventContainer;
