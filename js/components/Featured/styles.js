import { StyleSheet } from 'react-native';

import { colors } from '../../config/styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    list: {
        flex: 1,
        borderTopWidth: 0,
    },
    listItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomColor: colors.grey,
        borderColor: colors.grey,
        margin: 5,
        borderRadius: 5,
        height: 42,

    },
    title: {
        paddingLeft: 15,
        fontSize: 16,
    }
})
