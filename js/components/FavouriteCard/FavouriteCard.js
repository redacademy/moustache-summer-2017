import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    Image
} from 'react-native';
import LinearGradientColor from '../LinearGradientColor/';
import HeartIcon from '../HeartIcon';
import { styles } from './styles';

const FavouriteCard = ({ menuItemData }) => (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Image
                style={styles.image}
                source={{uri: menuItemData.imageLink}}
            />
            <View style={styles.box}>
                <LinearGradientColor />
                    <View style={styles.textWrapper}>
                        <Text 
                            style={styles.text}
                            numberOfLines={1}
                            ellipsizeMode={'tail'}
                        >
                            {menuItemData.name}
                        </Text>
                        <Text style={styles.price}>{menuItemData.price}</Text>
                    </View> 
                    <View style={styles.heartWrapper}>
                        <HeartIcon
                            itemId={'1'}
                            isFaved={false}
                            faveButton={{
                                right: 0,
                                position: 'relative'
                            }}
                            faveHeart={{
                                height: 25,
                                width: 25
                            }}
                        />
                    </View>
            </View>
        </View>
    </View>
);

FavouriteCard.propTypes = {
    renderArrow: PropTypes.bool,
    heartStyle: PropTypes.object,
    menuItemData: PropTypes.shape({
        category: PropTypes.string,
        name: PropTypes.string,
        ingredients: PropTypes.string,
        price: PropTypes.string,
        similarItems: PropTypes.string,
        healthBenefits: PropTypes.string
    })
}

export default FavouriteCard;
