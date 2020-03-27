import cryptoReducer from '@redux/crypto/cryptoReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  crypto: cryptoReducer,
});

export default rootReducer;
