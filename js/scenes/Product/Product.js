import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native';

import { styles } from './styles'

const Product = () => (
    <View style={styles.container}>
        <Text> This is Product Scene </Text>
    </View>
)

Product.propTypes = {}

export default Product