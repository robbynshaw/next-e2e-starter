export interface ICryptoPayload {
  secret: string;
}

export const SET_SEED = "CRYPTO_SEED_SET";

export type ActionTypes = typeof SET_SEED;

export interface ICryptoAction {
  type: ActionTypes;
  payload: ICryptoPayload;
}
