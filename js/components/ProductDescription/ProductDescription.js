import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
} from 'react-native';
import LineSeparator from '../LineSeparator/';
import { styles } from './styles';


const ProductDescription = () => (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Text style={styles.text}>
                An abundant bowl of rice + quinoa topped with fresh veggies, seeds, sprouts, avocado (when available) + House Dressing.
            </Text>
            <LineSeparator />
        </View>
    </View>
);

export default ProductDescription;

