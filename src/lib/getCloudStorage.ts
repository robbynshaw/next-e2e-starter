import { Dropbox } from 'dropbox';
import fetch from 'isomorphic-fetch';
import Profile from '@src/models/Profile';
import fetchDataUrl from '@src/lib/fetchDataUrl';
import Storage from '@src/storage/Storage';
import CloudStorage from '@src/lib/cloud/CloudStorage';
import TokenDetails from '@src/lib/cloud/TokenDetails';

const baseUrl = process.env.BASE_URL;
const dbxAppKey = process.env.DROPBOX_APP_KEY;

const dropboxService: CloudStorage = {
  isConnected: async (db: Storage): Promise<boolean> => {
    const profile = await db.profiles.get();
    if (profile) {
      const svcs = profile.services.filter(s => s.isDefault);
      return svcs && svcs.length && svcs[0].name === 'dropbox';
      // todo deal with expirations
    }
  },
  getRedirectUrl: (isNew: boolean): string => {
    const dbx = new Dropbox({
      clientId: dbxAppKey,
      fetch,
    });
    const redirUrl = dbx.getAuthenticationUrl(
      `${baseUrl}/auth/service/dropbox/complete?isNew=${isNew}`,
    );
    return redirUrl;
  },
  getProfile: async (token: string, opts: TokenDetails): Promise<Profile> => {
    const dbx = new Dropbox({
      accessToken: token,
      fetch,
    });
    const account = await dbx.usersGetCurrentAccount();
    const imgDataUrl = await fetchDataUrl(account.profile_photo_url);

    return {
      email: account.email,
      givenName: account.name.given_name,
      surname: account.name.surname,
      displayName: account.name.display_name,
      img: imgDataUrl,
      services: [
        {
          isDefault: true,
          name,
          tokenReceived: new Date().getTime(),
          accessToken: token,
          tokenType: opts.tokenType,
          uid: opts.uid,
          accountId: opts.accountId,
        },
      ],
    };
  },
};

const getService = (name: string): CloudStorage => {
  switch (name.toLowerCase()) {
    case 'dropbox':
      return dropboxService;
  }
  throw new Error(`Service '${name}' not implemented`);
};

export default getService;
