import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Growers = ({ growersList }) => (
    <View style={styles.container}>
        <Text>This is Growers scene</Text>
    </View>
);

Growers.propTypes = {
    growersList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string,
            logoLink: PropTypes.string,
            websiteLink: PropTypes.string
        })
    )
}

export default Growers