import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductCard from '../ProductCard/';

import { styles } from './styles';

const Featured = ({ navigation, featuredItems, sendMenuItem }) => (
    <ScrollView>
        <View style={styles.container}>
            {
                featuredItems.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => {
                            sendMenuItem(item);
                            return navigation.navigate('Product', 'Featured');
                        }}
                    >
                        <ProductCard
                            renderArrow
                            data={item}
                        />
                    </TouchableOpacity>
                ))
            }
        </View>
    </ScrollView>
);

Featured.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
    featuredItems: PropTypes.arrayOf(
        PropTypes.shape({
        __typename: PropTypes.string,
        category: PropTypes.string,
        name: PropTypes.string,
        ingredients: PropTypes.string,
        price: PropTypes.string,
        similarItems: PropTypes.string,
        healthBenefits: PropTypes.string
    })),
    sendMenuItem: PropTypes.func.isRequired
};

const FeaturedWithNavigation = withNavigation(Featured);

export default FeaturedWithNavigation;