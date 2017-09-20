import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Product from './Product';
import CustomHeader from '../../components/Header/';

class ProductContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <CustomHeader
                    title={navigation.state.params}
                    buttons={['Menu', 'Featured']}
                    backButton={true}
                    navigation={navigation}
                    selectedTab={0}
                />
            )
        }
    }

    render() {
        return <Product item={this.props.item} />
    }
}

function mapStateToProps(state) {
    return {
        item: state.menu.menuItem
    }
}

ProductContainer.propTypes = {
    item: PropTypes.shape({
        __typename: PropTypes.string,
        category: PropTypes.string,
    name: PropTypes.string,
        ingredients: PropTypes.string,
        price: PropTypes.string,
        similarItems: PropTypes.string,
        healthBenefits: PropTypes.string
    })
}

export default connect(mapStateToProps)(ProductContainer);
