import { IAppState } from "@redux/store";

export function selectSeedPhrase(state: IAppState): string {
  const {
    crypto: { seedPhrase }
  } = state;
  return seedPhrase;
}
