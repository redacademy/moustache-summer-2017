import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard/';
import ThreeIconTabs from '../../components/ThreeIconTabs/';

import { styles } from './styles';

const Ingredient = ({ data }) => (
    <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
            <ProductCard data={data} />
            <ThreeIconTabs data={data} />
        </View>
    </ScrollView>
)

Ingredient.propTypes = {
    data: PropTypes.shape({
        __typename: PropTypes.string,
        details: PropTypes.string,
        healthBenefits: PropTypes.string,
        name: PropTypes.string,
        whereInMenu: PropTypes.string,
        id: PropTypes.string,
        imageLink: PropTypes.string,
    })
}

export default Ingredient;