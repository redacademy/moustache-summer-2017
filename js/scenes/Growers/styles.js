import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    mainContainer: {
        width: '100%'
    },
    growerContainer: {
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
