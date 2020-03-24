import { ICryptoAction } from "./cryptoActions";

export interface ICryptoState {
  seedPhrase: string;
}

const initialState: ICryptoState = {
  seedPhrase: ""
};

export default function cryptoReducer(
  state: ICryptoState = initialState,
  action: ICryptoAction
): ICryptoState {
  return state;
}
