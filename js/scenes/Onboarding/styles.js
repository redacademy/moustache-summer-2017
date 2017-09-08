import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6CB045',
    },
    intro: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 40,
        height: 100,
        width: '100%',
    },
    text: {
        fontSize: 20,
        paddingTop: 10,
        fontWeight: 'bold',
    },
    p: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    image: {
        height: 250,
        resizeMode: 'contain',
        padding: 20,
    },
    button: {
        alignItems: 'center',        
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
        backgroundColor: 'red',
        marginTop: 20,        
    },
    btn_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
});
  