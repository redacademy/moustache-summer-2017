import React from 'react';
import { View, Text, SegmentedControlIOS, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const CustomHeader = ({ title, buttons, selectedTab, backButton, navigation }) => (

    <View style={styles.header}>
        <View style={styles.headerText}>
            {backButton === true &&
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name={"ios-arrow-back"} style={styles.backButton} />
                </TouchableOpacity>
            }
            <Text style={styles.title}>{title}</Text>
        </View>
        <SegmentedControlIOS
            values={buttons}
            selectedIndex={selectedTab}
            tintColor='white'
            style={styles.button}
            onChange={(event) => {
                navigation.navigate(`${event.nativeEvent.value}`)
            }}
        />
    </View>
);

CustomHeader.propTypes = {
    title: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedTab: PropTypes.number.isRequired,
    dispatch: PropTypes.func,
    backButton: PropTypes.bool,
    navigation: PropTypes.shape({
        dispatch: PropTypes.func,
        navigate: PropTypes.func
    }).isRequired
}

export default CustomHeader;
