import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../config/styles';
export const styles = StyleSheet.create({
    header: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: (Dimensions.get('window').width),
        height: 100,
        backgroundColor: colors.lightGreen
    },
    button: {
        width: 280,
    },
    title: {
        color: 'white',
        marginTop: 20,
        marginBottom: 15,
    },
    headerText: {
        flexDirection: 'row',
    }
})