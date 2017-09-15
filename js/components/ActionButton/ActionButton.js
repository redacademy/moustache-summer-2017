import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const ActionButton = ({ text, action, url }) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => action(url)}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    </View>
);

ActionButton.propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
    url: PropTypes.string
}

export default ActionButton;