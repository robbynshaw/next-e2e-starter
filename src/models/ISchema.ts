import { DBSchema } from "idb";
import IProfileStore from "@models/IProfileStore";

export default interface ISchema extends DBSchema {
  profile: IProfileStore;
}
