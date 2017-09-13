import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Growers from './Growers';
import { ActivityIndicator } from 'react-native';

class GrowersContainer extends Component {
    static route = {
        navigationBar: {
            title: 'Growers',
        }
    }

    componentDidMount() {
        // ADD DISPATCH FUNCTION HERE TO FETCH DATA
    }

    render() {
        const { data: { loading, growers } } = this.props;

        if (loading) return <ActivityIndicator />;
        return (
            <Growers
                growersList={growers}
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
    })
}

function mapStateToProps(state) {
    return {
        // ADD REDUX STATE HERE 
    }
}

const fetchGrowers = gql`
    query fetchGrowers {
        growers {
            name
            description
            logoLink
            websiteLink
        }
    }
`

const growersList = graphql(fetchGrowers)(GrowersContainer);
export default connect(mapStateToProps)(growersList);