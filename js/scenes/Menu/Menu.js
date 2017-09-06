import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { styles } from './styles'

const Menu = ({ navigation }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('MenuCategoryList')}>
            <Text> Take me to a category </Text>
        </TouchableOpacity>
    </View>
)

Menu.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired
}

const MenuWithNavigation = withNavigation(Menu);

export default MenuWithNavigation;
