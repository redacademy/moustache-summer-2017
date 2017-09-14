import React from 'react';
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

const ProductCard = ({ arrowStyle, heartStyle, eventData, menuItemData }) => (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Image
                style={styles.image}
                source={{uri: eventData.imageLink}}
            />
            <View style={styles.box}>
                <LinearGradientColor />
                <View>
                    <Text style={styles.text}>{eventData.name}</Text>
                    <Text style={styles.price}>{eventData.time}</Text>
                </View>
                {
                    menuItemData ? 
                        <TouchableOpacity style={[styles.btn_heart, heartStyle]} onPress={this.toggleDescription}>
                            <HeartIconActive/>
                        </TouchableOpacity>
                    :
                        null
                }
                <Icon style={[styles.arrow, arrowStyle]} name="chevron-thin-right" />
            </View>
        </View>
    </View>
);

ProductCard.PropTypes = {

}

export default ProductCard;
