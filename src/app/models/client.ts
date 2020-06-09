import {Agent} from "./agent";
import {Agence} from "./agence";
import {Compte} from "./compte";
import {Notification}  from "./notification";
import {Demande} from "./demande";
import {User} from "./user";
import {EventLogs} from "./eventLogs";


export class Client {

   id: number;
   agent? :Agent;
   agence?  :Agence;
   comptes? :Compte[];
   notifications? :Notification[];
   demande? : Demande[];
   user? : User;

}
