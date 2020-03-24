import { createStore } from "redux";
import { ICryptoState } from "./crypto/cryptoReducer";
import rootReducer from "./rootReducer";

export interface IAppState {
  crypto: ICryptoState;
}

const store = createStore(rootReducer);

export default store;
