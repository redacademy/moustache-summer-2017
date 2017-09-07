import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { styles } from './styles'

const Favourite = () => (
    <View style={styles.container}>
        <Text>This is Favourite Scene</Text>
    </View>
)

Favourite.propTypes = {}

export default Favourite