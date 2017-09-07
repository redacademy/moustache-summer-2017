import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { styles } from './styles'

const Featured = () => (
    <View style={styles.container}>
        <Text> This is Featured Scene </Text>
    </View>
)

Featured.propTypes = {}

export default Featured