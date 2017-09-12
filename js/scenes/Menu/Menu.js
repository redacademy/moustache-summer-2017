import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';

import { styles } from './styles'

const list = [
    {
        title: 'Breakfast',
        icon: require('../../assets/icons/menu/breakfasticon.png')
    },
    {
        title: 'Nutritious Food',
        icon: require('../../assets/icons/menu/nutritiousfoodicon.png')
    },
    {
        title: 'Beverages',
        icon: require('../../assets/icons/menu/beveragesicon.png')
    },
    {
        title: 'Juices',
        icon: require('../../assets/icons/menu/juicesicon.png')
    },
    {
        title: 'Daily Shots',
        icon: require('../../assets/icons/menu/dailyshotsicon.png')
    },
    {
        title: 'Smoothies',
        icon: require('../../assets/icons/menu/smoothiesicon.png')
    },
    {
        title: 'Kids Menu',
        icon: require('../../assets/icons/menu/kidsmenuicon.png')
    },
    {
        title: 'Raw Dessert',
        icon: require('../../assets/icons/menu/rawdesserticon.png')
    },
]

const Menu = ({ navigation }) => (
    <ScrollView contentContainerStyle={styles.container}>
        <List containerStyle={styles.list}>
            {list.map((item, i) => (
                <ListItem
                    title={item.title}
                    key={i}
                    containerStyle={styles.listItem}
                    chevronColor={'#6BAE44'}
                    leftIcon={
                        <Image 
                            source={item.icon} 
                            style={{width: 25, height: 25}}
                        />
                    }
                    titleStyle={styles.title}
                    onPress={() => navigation.navigate('MenuCategoryList', {title: item.title})}
                />
            ))}
        </List>
    </ScrollView>
)

Menu.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired
}

const MenuWithNavigation = withNavigation(Menu);

export default MenuWithNavigation;
