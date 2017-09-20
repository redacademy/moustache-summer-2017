import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { storeHealthBenefits } from '../../redux/modules/healthBenefits';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductCard/';

const HealthBenefits = ({ navigation, benefitsList, dispatch }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    benefitsList.map(item => (
                        <TouchableOpacity
                            style={styles.wrapper}
                            key={item.name}
                            onPress={() => {
                                const data = item
                                dispatch(storeHealthBenefits(data))
                                return navigation.navigate('Ingredient')
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
    dispatch: PropTypes.func,
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