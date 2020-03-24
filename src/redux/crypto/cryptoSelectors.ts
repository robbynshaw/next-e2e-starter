import { IAppState } from "../store";

export function selectSeedPhrase(state: IAppState): string {
  const {
    crypto: { seedPhrase }
  } = state;
  return seedPhrase;
}
