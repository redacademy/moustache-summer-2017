import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductCard from '../../components/ProductCard/';

import { styles } from './styles'

const MenuCategoryList = ({ navigation, menuItemsList, sendMenuItem }) => (
    <ScrollView>
        <View style={styles.container}>
            {
                menuItemsList.map((item) => (
                    <TouchableOpacity 
                        key={item.name} 
                        onPress={() => {
                            sendMenuItem(item);
                            return navigation.navigate('Product');
                        }}
                    >
                        <ProductCard
                            menuItemData={item}
                            renderArrow
                        />
                    </TouchableOpacity>
                ))
            }
        </View>
    </ScrollView>
)

MenuCategoryList.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
    menuItemsList: PropTypes.arrayOf(
        PropTypes.shape({
            __typename: PropTypes.string,
            category: PropTypes.string,
            name: PropTypes.string,
            ingredients: PropTypes.string,
            price: PropTypes.string,
            similarItems: PropTypes.string,
            healthBenefits: PropTypes.string
        })
    ),
    sendMenuItem: PropTypes.func.isRequired
}

const MenuCategoryListWithNavigation = withNavigation(MenuCategoryList);
export default MenuCategoryListWithNavigation;