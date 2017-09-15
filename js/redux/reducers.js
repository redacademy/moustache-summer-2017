import { combineReducers } from 'redux';
import { segmentReducer } from './modules/SegmentedComps';
import { menuItemReducer } from './modules/menuItems';
import client from '../config/apolloClient';
import { Tabs, homeStack, learnStack, favouritesStack } from '../navigation/routes';

export default combineReducers({
    segment: segmentReducer,
    apollo: client.reducer(),
    menu: menuItemReducer,
    tabBar: (state,action) => Tabs.router.getStateForAction(action,state),
    home: (state, action) => homeStack.router.getStateForAction(action, state),
    learn: (state, action) => learnStack.router.getStateForAction(action, state),
    favourites: (state, action) => favouritesStack.router.getStateForAction(action, state),
});