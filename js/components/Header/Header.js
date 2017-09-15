import React from 'react';
import { View, Text, SegmentedControlIOS, Icon, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { styles } from './styles';

const CustomHeader = ({ title, buttons, selectedTab, dispatch, learnTab, tabChange, backButton, navigation }) => (

    <View style={styles.header}>
        <View style={styles.headerText}>
            {backButton === true &&
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            }
            <Text style={styles.title}>{title}</Text>
        </View>
        <SegmentedControlIOS
            values={buttons}
            selectedIndex={selectedTab || learnTab}
            tintColor='white'
            style={styles.button}
            onChange={(event) => {
                dispatch(tabChange(event.nativeEvent.selectedSegmentIndex))
            }}
        />
    </View>
);

CustomHeader.propTypes = {
    title: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedTab: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    learnTab: PropTypes.number.isRequired,
    tabChange: PropTypes.func.isRequired,
}


function mapStateToProps(state) {
    return {
        selectedTab: state.segment.tabChoice,
        learnTab: state.segment.learnChoice,
    }
}

export default connect(mapStateToProps)(CustomHeader);