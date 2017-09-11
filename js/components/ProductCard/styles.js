import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#ffff',
		paddingTop: 30,
	},
	wrapper: {
		height: '33%',
		width: '100%',
		overflow: 'hidden',
		position: 'relative',
	},
	image: {
		height: '100%',
		width: '100%',
		resizeMode: 'cover',
		zIndex: 1,
	},
	btn_heart: {
		right: 10,
		position: 'absolute'
	},
	heart: {
		height: 25,
		width: 24,
		resizeMode: 'contain',
	},
	box: {
		bottom: 50,
		height: 50,
		zIndex: 2,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		backgroundColor: 'transparent',
		marginLeft: 10
	},
	price: {
		backgroundColor: 'transparent',
		marginLeft: 10
	}
});