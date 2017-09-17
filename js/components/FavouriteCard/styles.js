import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
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
	box: {
		padding: 10,
		bottom: 50,
		height: 50,
		zIndex: 2,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center'
	},
	textWrapper: {
		width: '85%'
	},
	text: {
		backgroundColor: 'transparent',
		fontSize: 13,
		fontFamily: typography.fontBook,
		fontWeight: 'bold',
		color: colors.grey
	},
	price: {
		backgroundColor: 'transparent',
		fontSize: 13,
		fontFamily: typography.fontBook,
		color: colors.grey
	},
	heartWrapper: {
		width: '15%'
	}
});
