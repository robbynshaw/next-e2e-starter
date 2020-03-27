import Profile from '@src/models/Profile';

export default interface Storage {
  profiles: {
    put: (profile: Profile) => Promise<void>;
    get: () => Promise<Profile | undefined>;
  };
}
