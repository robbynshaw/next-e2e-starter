import cryptoReducer from "./crypto/cryptoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  crypto: cryptoReducer
});

export default rootReducer;
