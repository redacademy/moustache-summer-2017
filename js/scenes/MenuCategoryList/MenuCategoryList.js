import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { styles } from './styles'

const MenuCategoryList = ({ navigation, menuItemsList }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
            <Text> Take me to a product! </Text>
        </TouchableOpacity>
    </View>
)

MenuCategoryList.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
    menuItemsList: PropTypes.arrayOf(
        PropTypes.shape({
            __typename: PropTypes.string,
            category: PropTypes.string,
            name: PropTypes.string,
            ingredients: PropTypes.string,
            price: PropTypes.string,
            similarItems: PropTypes.string,
            healthBenefits: PropTypes.string
        })
    )
}

const MenuCategoryListWithNavigation = withNavigation(MenuCategoryList);

export default MenuCategoryListWithNavigation;
