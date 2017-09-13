import { combineReducers } from 'redux';

import { segmentReducer } from './modules/SegmentedComps';
import client from '../config/apolloClient';

export default combineReducers({
    segment: segmentReducer,
    apollo: client.reducer(),
});
