import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#ffff',
		paddingTop: 30,
	},
	wrapper: {
		height: '33%',
		width: '50%',
		overflow: 'hidden',
		position: 'relative',
	},
	image: {
		height: '100%',
		width: '100%',
		resizeMode: 'cover',
		zIndex: 1,
	},
	box: {
		bottom: 40,
		height: 40,
		zIndex: 2,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center'
	},
	btn_heart: {
		right: 10,
		position: 'absolute'
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