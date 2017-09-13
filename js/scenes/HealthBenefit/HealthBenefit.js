import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';

import { styles } from './styles'

const HealthBenefits = ({ navigation, benefitsList }) => (
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
    }).isRequired,
    benefitsList: PropTypes.arrayOf(
        PropTypes.shape({
            __typename: PropTypes.string,
            details: PropTypes.string,
            healthBenefits: PropTypes.string,
            name: PropTypes.string,
            whereInMenu: PropTypes.string
        })
    )
}

const HealthBenefitsWithNavigation = withNavigation(HealthBenefits)

export default HealthBenefitsWithNavigation;