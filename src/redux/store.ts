import { createStore } from 'redux';
import { CryptoState } from '@redux/crypto/cryptoReducer';
import rootReducer from '@redux/rootReducer';

export interface AppState {
  crypto: CryptoState;
}

const store = createStore(rootReducer);

export type AppStore = typeof store;

export default store;
