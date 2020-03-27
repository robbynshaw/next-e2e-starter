import { openDB, IDBPDatabase } from "idb";
import ISchema from "@models/ISchema";
import config from "@src/config";
import IProfile from "@models/IProfile";

export interface IStorage {
  profiles: {
    put: (profile: IProfile) => Promise<void>;
    get: () => Promise<IProfile | undefined>;
  };
}

abstract class IndexedDbRepo {
  protected _db: IDBPDatabase<ISchema>;

  constructor(db: IDBPDatabase<ISchema>) {
    this._db = db;
  }
}

class Profiles extends IndexedDbRepo {
  constructor(db: IDBPDatabase<ISchema>) {
    super(db);
  }

  async put(profile: IProfile): Promise<void> {
    await this._db.put("profile", profile);
  }

  async get(): Promise<IProfile | undefined> {
    const profiles = await this._db.getAll("profile");
    if (profiles && profiles.length) {
      return profiles[0];
    }
    return undefined;
  }
}

class AppDB implements IStorage {
  public profiles: Profiles;

  constructor(db: IDBPDatabase<ISchema>) {
    this.profiles = new Profiles(db);
  }
}

export const getDb = async (): Promise<IStorage> => {
  const db = await openDB<ISchema>(config.dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("profile")) {
        console.log("Creating profile store...");
        db.createObjectStore("profile", {
          keyPath: "email"
        });
      }
    }
  });
  return new AppDB(db);
};
