import { createStore } from "redux";
import { ICryptoState } from "@redux/crypto/cryptoReducer";
import rootReducer from "@redux/rootReducer";

export interface IAppState {
  crypto: ICryptoState;
}

const store = createStore(rootReducer);

export default store;
