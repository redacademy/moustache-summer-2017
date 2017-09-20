import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import LineSeparator from '../LineSeparator/';
import { colors } from '../../config/styles';
import { styles } from './styles';

const GrowerItem = ({ grower, growerLink }) => (
    <View style={styles.growerWrapper}>
        <View style={styles.innerWrapper}>
            <TouchableOpacity onPress={() => growerLink(grower.websiteLink)}>
                <Image source={{uri: grower.logoLink}} style={styles.logo}/>
            </TouchableOpacity>
            <Text style={styles.name}>{grower.name}</Text>
            <Text style={styles.description}>{grower.description}</Text>
        </View>
        <LineSeparator 
            additionalStyles={{height: 1, width: '100%', backgroundColor: colors.lightGreen}} 
        />
    </View>
);

GrowerItem.propTypes = {
    grower: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        logoLink: PropTypes.string,
        websiteLink: PropTypes.string
    }),
    growerLink: PropTypes.func.isRequired
}

export default GrowerItem;
