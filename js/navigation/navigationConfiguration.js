import { TabNavigator } from 'react-navigation';

import homeNavigation from './homeNavigation';
import learnNavigation from './learnNavigation';
import favouritesNavigation from './favouritesNavigation';

const routeConfiguration = {
    homeNavigation: { screen: homeNavigation },
    learnNavigation: { screen: learnNavigation },
    favouritesNavigation: { screen: favouritesNavigation },
}

export const TabBar = TabNavigator(routeConfiguration);

export const tabBarReducer = (state, action) => {
    if (action.type === 'JUMP_TO_TAB') {
        return { ...state, index: 0 }
    } else {
        return TabBar.router.getStateForAction(action, state)
    }
}