import TokenDetails from '@src/lib/cloud/TokenDetails';
import Profile from '@models/Profile';
import Storage from '@src/storage/Storage';

export default interface CloudStorage {
  isConnected: (db: Storage) => Promise<boolean>;
  getRedirectUrl: (isNew: boolean) => string;
  getProfile: (token: string, opts: TokenDetails) => Promise<Profile>;
}
