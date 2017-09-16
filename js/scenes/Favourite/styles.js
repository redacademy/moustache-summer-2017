import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        padding: 0,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    productWrapper: {
        margin: 0,
        padding: 0,
        width: Dimensions.get('window').width / 2
    }
})
