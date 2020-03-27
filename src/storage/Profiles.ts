import Profile from '@src/models/Profile';
import IndexedDbRepo from '@src/storage/IndexedDbRepo';

class Profiles extends IndexedDbRepo {
  async put(profile: Profile): Promise<void> {
    await this.db.put('profile', profile);
  }

  async get(): Promise<Profile | undefined> {
    const profiles = await this.db.getAll('profile');
    if (profiles && profiles.length) {
      return profiles[0];
    }
    return undefined;
  }
}

export default Profiles;
