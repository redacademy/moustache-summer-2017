import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffff',
		height: 175,
		borderBottomWidth: 1.5,
		borderColor: colors.lightGreen
	},
	wrapper: {
		height: '100%',
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
	arrow: {
		fontSize: typography.size22,
		color: colors.grey,
		zIndex: 1,
		right: 15,
		backgroundColor: 'transparent',
		position: 'absolute'
	},
	btn_heart: {
		right: 50,
		position: 'absolute'
	},
	heart: {
		height: 20,
		width: 19,
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
		marginLeft: 20,
		paddingTop: 5,
		fontSize: 15.5,
		paddingRight: 100,
		fontFamily: typography.fontBook,
		fontWeight: 'bold',
		color: colors.grey
	},
	price: {
		backgroundColor: 'transparent',
		marginLeft: 20,
		fontSize: 15.5,
		fontFamily: typography.fontBook,
		color: colors.grey
	}
});
