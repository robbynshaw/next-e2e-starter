import { IDBPDatabase } from 'idb';
import Schema from '@src/models/Schema';

abstract class IndexedDbRepo {
  protected db: IDBPDatabase<Schema>;

  constructor(db: IDBPDatabase<Schema>) {
    this.db = db;
  }
}

export default IndexedDbRepo;
