import { openDB, IDBPDatabase } from 'idb';
import Schema from '@src/models/Schema';
import config from '@src/config';
import Storage from '@src/storage/Storage';
import Profiles from '@src/storage/Profiles';

class AppDB implements Storage {
  public profiles: Profiles;

  constructor(db: IDBPDatabase<Schema>) {
    this.profiles = new Profiles(db);
  }
}

const getDb = async (): Promise<Storage> => {
  const db = await openDB<Schema>(config.dbName, 1, {
    upgrade(upgradeDb) {
      if (!upgradeDb.objectStoreNames.contains('profile')) {
        upgradeDb.createObjectStore('profile', {
          keyPath: 'email',
        });
      }
    },
  });
  return new AppDB(db);
};

export default getDb;
