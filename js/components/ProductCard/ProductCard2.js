// import React from 'react';
// import {
//     Text,
//     View,
//     Image,
//     TouchableOpacity
// } from 'react-native';
// import { connect } from 'react-redux';
// import LinearGradientColor from '../LinearGradientColor/';
// import HeartIcon from '../HeartIcon';
// import Icon from 'react-native-vector-icons/Entypo';
// import { styles } from './styles';
// import { toggleFave } from '../../redux/modules/user';
// const ProductCard = ({ arrowStyle, heartStyle, dispatch }) => (
//     <View style={styles.container}>
//         <View style={styles.wrapper}>
//             <Image
//                 style={styles.image}
//                 source={require('../../assets/images/buddhabowl.png')}
//             />
//             <View style={styles.box}>
//                 <LinearGradientColor />
//                 <View>
//                     <Text style={styles.text}>Buddha Bowl</Text>
//                     <Text style={styles.price}>11.95</Text>
//                 </View>
//                 <TouchableOpacity style={[styles.btn_heart, heartStyle]} onPress={() => dispatch(toggleFave('1'))}>
//                     <HeartIconActive/>
//                 </TouchableOpacity>
//                 <Icon style={[styles.arrow, arrowStyle]} name="chevron-thin-right" />
//             </View>
//         </View>
//     </View>
// );

// export default connect()(ProductCard);