import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const AddFavButton = () => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Add to Favorites</Text>
        </TouchableOpacity>
    </View>
);

export default AddFavButton;