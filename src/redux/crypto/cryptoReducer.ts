export interface CryptoState {
  seedPhrase: string;
}

const initialState: CryptoState = {
  seedPhrase: '',
};

export default function cryptoReducer(state: CryptoState = initialState): CryptoState {
  return state;
}
