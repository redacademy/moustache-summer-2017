import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductCard/';

const HealthBenefits = ({ navigation, benefitsList }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    benefitsList.map(item => (
                        <TouchableOpacity
                            style={styles.wrapper}
                            key={item.name}
                            onPress={() => {
                                return navigation.navigate('Ingredient', { healthBenefit: item })
                            }}
                        >
                            <ProductCard
                                data={item}
                                ingredientData={item}
                                renderArrow
                                numberOfLines={2}
                                ellipsizeMode={'tail'}
                            />
                        </TouchableOpacity>

                    )
                    )}
            </View>
        </ScrollView>
    )
}

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

export default connect()(HealthBenefitsWithNavigation);