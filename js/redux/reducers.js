import { combineReducers } from 'redux';
import { userReducer } from './modules/user'
import { menuItemReducer } from './modules/menuItems';
import { healthBenefitsReducer } from './modules/healthBenefits';
import client from '../config/apolloClient';
import { Tabs, homeStack, learnStack, favouritesStack } from '../navigation/routes';

export default combineReducers({
    user: userReducer,
    apollo: client.reducer(),
    menu: menuItemReducer,
    healthBenefit: healthBenefitsReducer,
    tabBar: (state, action) => Tabs.router.getStateForAction(action, state),
    home: (state, action) => homeStack.router.getStateForAction(action, state),
    learn: (state, action) => learnStack.router.getStateForAction(action, state),
    favourites: (state, action) => favouritesStack.router.getStateForAction(action, state),
});