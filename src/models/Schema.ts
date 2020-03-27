import { DBSchema } from 'idb';
import ProfileStore from '@models/ProfileStore';

export default interface Schema extends DBSchema {
  profile: ProfileStore;
}
