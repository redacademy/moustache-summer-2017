import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';

import BreakfastIcon from '../../assets/icons/menu/breakfasticon.png';
import NutritiousIcom from '../../assets/icons/menu/nutritiousfoodicon.png';
import BeveragesIcon from '../../assets/icons/menu/beveragesicon.png';
import JuiceIcon from '../../assets/icons/menu/juicesicon.png';
import DailyIcon from '../../assets/icons/menu/dailyshotsicon.png';
import SmoothiesIcon from '../../assets/icons/menu/smoothiesicon.png';
import KidsIcon from '../../assets/icons/menu/kidsmenuicon.png';
import RawIcon from '../../assets/icons/menu/rawdesserticon.png';
import { styles } from './styles'

const list = [
    {
        title: 'Breakfast',
        icon: BreakfastIcon
    },
    {
        title: 'Nutritious Food',
        icon: NutritiousIcom
    },
    {
        title: 'Beverages',
        icon: BeveragesIcon
    },
    {
        title: 'Juices',
        icon: JuiceIcon
    },
    {
        title: 'Daily Shots',
        icon: DailyIcon
    },
    {
        title: 'Smoothies',
        icon: SmoothiesIcon
    },
    {
        title: 'Kids Menu',
        icon: KidsIcon
    },
    {
        title: 'Raw Dessert',
        icon: RawIcon
    },
]

const Menu = ({ navigation, sendCategory }) => (
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
                            style={{ width: 25, height: 25 }}
                        />
                    }
                    titleStyle={styles.title}
                    onPress={() => {
                        sendCategory(item.title);
                        return navigation.navigate('MenuCategoryList', item.title);
                    }}
                />
            ))}
        </List>
    </ScrollView>
)

Menu.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
    sendCategory: PropTypes.func.isRequired
}

const MenuWithNavigation = withNavigation(Menu);

export default MenuWithNavigation;
