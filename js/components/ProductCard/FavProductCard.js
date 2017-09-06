import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import LinearGradientColor from '../LinearGradientColor/';
import HeartIconActive from '../HeartIconActive/';
import { styles } from './styles';

const HeartIconActive = () => (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Image
                style={styles.image}
                source={require('./354.jpeg')}
            />
            <View style={styles.box}>
                <LinearGradientColor />
                <View>
                    <Text style={styles.text}>Buddha Bowl</Text>
                    <Text style={styles.price}>$11.95</Text>
                </View>
                <TouchableOpacity style={styles.btn_heart} onPress={this.toggleDescription}>
                    <HeartIconActive />
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

export default HeartIconActive;

