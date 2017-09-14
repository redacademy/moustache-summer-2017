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
                            menuItemData || ingredientData ?
                                <Text style={styles.text}>{ menuItemData ? menuItemData.name : ingredientData.name}</Text>
                            :
                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.text}>{eventData.name}</Text>
                        }
                        {
                            menuItemData || eventData ?
                                <Text style={styles.price}>{ eventData ? eventData.date : menuItemData.price }</Text>
                            :
                                null
                        }
                    </View> 
                {
                    menuItemData ? 
                        <TouchableOpacity style={[styles.btn_heart, heartStyle]} onPress={this.toggleDescription}>
                            <HeartIconActive/>
                        </TouchableOpacity>
                    :
                        null
                }
                {
                    renderArrow ?
                        <Icon style={styles.arrow} name="chevron-thin-right" />
                    :
                        null
                }
            </View>
        </View>
    </View>
);

ProductCard.PropTypes = {

}

export default ProductCard;
