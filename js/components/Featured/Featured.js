import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductCard from '../ProductCard/';

import { styles } from './styles';

const Featured = ({ navigation }) => (
    <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                <ProductCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                <ProductCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                <ProductCard />
            </TouchableOpacity>
        </View>
    </ScrollView>
);

Featured.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired
};

const FeaturedWithNavigation = withNavigation(Featured);

export default FeaturedWithNavigation;