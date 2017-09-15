import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator, Linking } from 'react-native';

import CustomHeader from '../../components/Header/';
import Growers from './Growers';

class GrowersContainer extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <CustomHeader
                    title={'Learn'}
                    buttons={['Events', 'Ingredients', 'Growers']}
                    selectedTab={2}
                    navigation={navigation}
                />
            )
        }
    };

    state = {
        error: null
    }

    growerLink(url) {
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                alert('Cannot open!')
            } else {
                return Linking.openURL(url);
            }
        }).catch(error => this.setState({ error }));
    }

    render() {
        const { data: { loading, growers } } = this.props;

        if (loading) return <ActivityIndicator />;
        return (
            <Growers
                growersList={growers}
                growerLink={this.growerLink}
                error={this.state.error}
            />
        )
    }
}

GrowersContainer.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        growers: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                description: PropTypes.string,
                logoLink: PropTypes.string,
                websiteLink: PropTypes.string
            })
        )
    }),
    growerLink: PropTypes.func
}

const fetchGrowers = gql`
    query fetchGrowers {
        growers {
            id
            name
            description
            logoLink
            websiteLink
        }
    }
`

const growersList = graphql(fetchGrowers)(GrowersContainer);
export default growersList;