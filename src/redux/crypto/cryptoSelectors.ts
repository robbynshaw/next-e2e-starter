import { AppState } from '@redux/store';

export function selectSeedPhrase(state: AppState): string {
  const {
    crypto: { seedPhrase },
  } = state;
  return seedPhrase;
}
