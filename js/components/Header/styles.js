import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../config/styles';

export const styles = StyleSheet.create({
    header: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: (Dimensions.get('window').width),
        height: 100,
        backgroundColor: colors.lightGreen,
    },
    button: {
        width: 280,
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    headerText: {
        marginTop: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        flex: 0,
        justifyContent: 'space-around'
    },
    backButton: {
        color: "white",
        fontSize: 24,
        // paddingRight: 10,
        textAlign: 'left',
        // right: 90,
        right: 80,
        position: 'absolute'
    },
})