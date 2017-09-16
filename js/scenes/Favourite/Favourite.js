import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import FavouriteCard from '../../components/FavouriteCard/';
import { styles } from './styles';

const Favourite = ({ navigation, favouriteItems, sendMenuItem }) => (
    <ScrollView>
        <View style={styles.container}>
        {
            favouriteItems.map((item) => (
                <TouchableOpacity 
                    key={item.name} 
                    onPress={() => {
                        sendMenuItem(item);
                        return navigation.navigate('Product');
                    }}
                >
                    <View style={styles.productWrapper}>
                        <FavouriteCard
                            menuItemData={item}
                        />
                    </View>
                </TouchableOpacity>
            ))
        }
        </View>
    </ScrollView>
);

Favourite.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
    favouriteItems: PropTypes.arrayOf(
        PropTypes.shape({
            __typename: PropTypes.string,
            category: PropTypes.string,
            name: PropTypes.string,
            ingredients: PropTypes.string,
            price: PropTypes.string,
            similarItems: PropTypes.string,
            healthBenefits: PropTypes.string,
            imageLink: PropTypes.string
        }).isRequired
    ),
    sendMenuItem: PropTypes.func.isRequired
}

export default Favourite;