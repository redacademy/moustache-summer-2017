import { combineReducers } from 'redux';

import { segmentReducer } from './modules/SegmentedComps';

export default combineReducers({
    segment: segmentReducer,
});