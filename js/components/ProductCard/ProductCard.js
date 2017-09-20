import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradientColor from '../LinearGradientColor/';
import HeartIcon from '../HeartIcon';
import Icon from 'react-native-vector-icons/Entypo';
import { styles } from './styles';

const ProductCard = ({ renderArrow, heartStyle, data }) => (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Image style={styles.image} source={{ uri: data.imageLink }} />
            <View style={styles.box}>
                <LinearGradientColor />
                <View>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.text}>{data.name}</Text>
                    {
                        ((data.__typename === 'MenuItem') || (data.__typename === 'Event')) &&
                        <Text style={styles.price}>{(data.__typename === 'Event') ? data.date : data.price}</Text>
                    }
                </View>
                {
                    (data.__typename === 'MenuItem') && // turn menuItemData to true to test
                    <HeartIcon
                        itemId={data.id}
                        isFaved={data.fave}
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

ProductCard.PropTypes = {
    renderArrow: PropTypes.bool,
    heartStyle: PropTypes.object,
    data: PropTypes.shape({
        name: PropTypes.string,
        date: PropTypes.string,
        timeStart: PropTypes.string,
        timeEnd: PropTypes.string,
        location: PropTypes.string,
        imageLink: PropTypes.string,
        eventLink: PropTypes.string,
        details: PropTypes.string,
        id: PropTypes.string,
        category: PropTypes.string,
        ingredients: PropTypes.string,
        price: PropTypes.string,
        similarItems: PropTypes.string,
        healthBenefits: PropTypes.string,
        whereInMenu: PropTypes.string
    }),
}

export default connect()(ProductCard);
