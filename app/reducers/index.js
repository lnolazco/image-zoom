import { combineReducers } from 'redux';
import zoom from './zoomReducer';

const rootReducer = combineReducers({
  zoomStore: zoom,
});

export default rootReducer;
