import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    button: {
        width: '80%',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.red,
    },
    text: {
        color: colors.white,
        fontSize: typography.size14,
        fontFamily: typography.fontBook,
        fontWeight: 'bold',
    }
})
