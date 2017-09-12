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

const ProductCard = () => (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Image
                style={styles.image}
                source={require('../../assets/images/buddhabowl.png')}
            />
            <View style={styles.box}>
                <LinearGradientColor />
                <View>
                    <Text style={styles.text}>Buddha Bowl</Text>
                    <Text style={styles.price}>11.95</Text>
                </View>
                <TouchableOpacity style={styles.btn_heart} onPress={this.toggleDescription}>
                    <HeartIconActive />
                </TouchableOpacity>
                <Icon style={styles.arrow} name="chevron-thin-right" />
            </View>
        </View>
    </View>
);

export default ProductCard;
