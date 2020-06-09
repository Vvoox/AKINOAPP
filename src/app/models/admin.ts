import {Agence} from "./agence";
import {Agent} from "./agent";
import {User} from "./user";

export class Admin {

   id:number;
   agents?:Agent[];
   agences? :Agence[];
   user? : User;
}
