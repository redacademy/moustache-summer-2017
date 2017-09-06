import React from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

import { styles } from './styles'

const Onboarding = () => (
    <View style={styles.container}>
        <Swiper>
            <View style={styles.slide}>
                <View>
                    <Image 
                        style={styles.image}
                        source={require('../../assets/icon/onboarding/graphics_explore.png')}
                    />
                </View>
                <View style={styles.intro}>
                    <View>
                        <Text style={styles.text}>Explore</Text></View>
                    <View>
                        <Text style={styles.p}>100% organic, locally grown, whole food cuisine</Text></View>
                </View>
            </View>

            <View style={styles.slide}>
                <View>
                    <Image 
                        style={styles.image}
                        source={require('../..//assets/icon/onboarding/graphics_learn.png')}
                    /></View>
                <View style={styles.intro}>                        
                    <View>
                        <Text style={styles.text}>Learn</Text></View>
                    <View>
                        <Text style={styles.p}>Achieve optimum health using food as medicine</Text></View>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.getStarted}>
                    <View >
                        <Text style={styles.btn_text}>Get Started</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Swiper>
    </View>
)

Onboarding.propTypes = {}


export default Onboarding