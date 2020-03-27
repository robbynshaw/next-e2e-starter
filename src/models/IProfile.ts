import IService from "@models/IService";

export default interface IProfile {
  givenName: string;
  surname: string;
  displayName: string;
  email: string;
  img: string;
  services: IService[];
}
