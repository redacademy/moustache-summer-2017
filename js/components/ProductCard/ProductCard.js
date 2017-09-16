import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    Image
} from 'react-native';
import LinearGradientColor from '../LinearGradientColor/';
//import HeartIconActive from '../HeartIconActive';
import HeartIcon from '../HeartIcon';
import Icon from 'react-native-vector-icons/Entypo';
import { styles } from './styles';

const ProductCard = ({ renderArrow, heartStyle, eventData, menuItemData, ingredientData, numberOfLines, ellipsizeMode }) => (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            {(() => {
                switch (menuItemData || ingredientData || eventData) {
                    case (eventData):
                        return <Image style={styles.image} source={{ uri: eventData.imageLink }} />
                    case (ingredientData):
                        return <Image style={styles.image} source={{ uri: ingredientData.imageLink }} />
                    case (menuItemData):
                        return <Image style={styles.image} source={{ uri: menuItemData.imageLink }} />
                    default:
                        null
                }
            })()}
            <View style={styles.box}>
                <LinearGradientColor />
                <View>
                    {
                        (menuItemData || ingredientData) ?
                            <Text style={styles.text}>{menuItemData ? menuItemData.name : ingredientData.name}</Text>
                            :
                            <Text numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode} style={styles.text}>{eventData.name}</Text>
                    }
                    {
                        (menuItemData || eventData) &&
                        <Text style={styles.price}>{eventData ? eventData.date : menuItemData.price}</Text>
                    }
                </View>
                {
                    menuItemData && // turn menuItemData to true to test
                    <HeartIcon
                        itemId={'1'}
                        isFaved={false}
                    />
                }
                {
                    renderArrow &&
                    <Icon style={styles.arrow} name="chevron-thin-right" />
                }
            </View>
        </View>
    </View>
);

ProductCard.propTypes = {
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
    }),
    numberOfLines: PropTypes.number,
    ellipsizeMode: PropTypes.string
}

export default ProductCard;
