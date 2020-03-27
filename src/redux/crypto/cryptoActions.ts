export interface CryptoPayload {
  secret: string;
}

export const SET_SEED = 'CRYPTO_SEED_SET';

export type ActionTypes = typeof SET_SEED;

export default interface CryptoAction {
  type: ActionTypes;
  payload: CryptoPayload;
}
