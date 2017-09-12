import { StyleSheet } from 'react-native';

import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffff',
		paddingTop: 20,
		alignItems: 'center',
		margin: 0,
		padding: 0,
	},
	title: {
		color: colors.grey,
		fontSize: 10,
		paddingTop: 5,
	},
	description: {
		paddingLeft: 25,
		paddingRight: 20,
		color: colors.grey,
		fontFamily: typography.fontBook,
		marginTop: 0,
	},
	descriptionContainer: {
		paddingTop: 15,
		paddingBottom: 15,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: colors.grey,
		marginTop: 5,
	},
	tabBar: {
		backgroundColor: 'white', 
		borderColor: colors.lightGreen, 
		width: '90%',
	},
	image: {
		width: 40,
		height: 60,
		overflow: 'visible',
		paddingBottom: 5,
	}
});