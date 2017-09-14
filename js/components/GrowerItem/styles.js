import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    growerWrapper: {
        width: '100%'
    },
    innerWrapper: {
        padding: 10
    },
    logo: {
        height: 150,
        width: 'auto',
        resizeMode: 'contain'
    },
    name: {
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        color: colors.grey,
        fontFamily: typography.fontBook,
        fontSize: 15,
        fontWeight: 'bold'
    },
    description: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        color: colors.grey,
        fontFamily: typography.fontBook,
        fontSize: 15,
    },
    line: {
        width: '100%',
        color: colors.lightGreen
    }
})
