import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffff',
		paddingTop: 30,
	},
	image: {
		height: 60,
		width: 50,
		resizeMode: 'contain',
		zIndex: 1,
	},
	tab: {
		top: "50%",
	},
	title: {
		fontSize: 13,
		fontWeight: '300',
	},
	selectedTitle: {
		fontWeight: 'bold',
	}
});