import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';

import { styles } from './styles'

const HealthBenefits = ({ navigation }) => (
    <View style={styles.container}>
        <Text>This is HealthBenefits scene</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Ingredient')}>
            <Text> Take me to an ingredient </Text>
        </TouchableOpacity>
    </View>
)

HealthBenefits.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired
}

const HealthBenefitsWithNavigation = withNavigation(HealthBenefits)

export default HealthBenefitsWithNavigation;