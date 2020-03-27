export default interface IService {
  isDefault: boolean;
  name: string;
  tokenReceived: number;
  accessToken: string;
  refreshToken?: string;
  tokenType: string;
  uid?: string;
  accountId?: string;
}
