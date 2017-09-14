import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import LinearGradientColor from '../LinearGradientColor/';
import HeartIconActive from '../HeartIconActive/';
import Icon from 'react-native-vector-icons/Entypo';
import { styles } from './styles';

const ProductCard = ({ renderArrow, heartStyle, eventData, menuItemData, ingredientData }) => (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Image
                style={styles.image}
                source={{uri: eventData.imageLink}}
            />
            <View style={styles.box}>
                <LinearGradientColor />
                    <View>
                        {
                            (menuItemData || ingredientData) ?
                                <Text style={styles.text}>{ menuItemData ? menuItemData.name : ingredientData.name}</Text>
                            :
                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.text}>{eventData.name}</Text>
                        }
                        {
                            (menuItemData || eventData) &&
                                <Text style={styles.price}>{ eventData ? eventData.date : menuItemData.price }</Text>
                        }
                    </View> 
                {
                    menuItemData &&
                        <TouchableOpacity style={[styles.btn_heart, heartStyle]} onPress={this.toggleDescription}>
                            <HeartIconActive/>
                        </TouchableOpacity>
                }
                {
                    renderArrow &&
                        <Icon style={styles.arrow} name="chevron-thin-right" />
                }
            </View>
        </View>
    </View>
);

ProductCard.PropTypes = {
    renderArrow: PropTypes.bool,
    heartStyle: PropTypes.object,
    eventData: PropTypes.shape({
        name: PropTypes.string,
        date: PropTypes.string,
        timeStart: PropTypes.string,
        timeEnd: PropTypes.string,
        location: PropTypes.string,
        imageLink: PropTypes.string,
        eventLink: PropTypes.string,
        details: PropTypes.string
    }),
    menuItemData: PropTypes.shape({
        category: PropTypes.string,
        name: PropTypes.string,
        ingredients: PropTypes.string,
        price: PropTypes.string,
        similarItems: PropTypes.string,
        healthBenefits: PropTypes.string
    }),
    ingredientData: PropTypes.shape({
        details: PropTypes.string,
        healthBenefits: PropTypes.string,
        name: PropTypes.string,
        whereInMenu: PropTypes.string
    })

}

export default ProductCard;
