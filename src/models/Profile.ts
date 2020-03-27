import Service from '@models/Service';

export default interface Profile {
  givenName: string;
  surname: string;
  displayName: string;
  email: string;
  img: string;
  services: Service[];
}
