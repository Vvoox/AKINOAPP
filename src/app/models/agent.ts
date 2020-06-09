import {Agence} from "./agence";
import {Admin} from "./admin";
import {Client} from "./client";
import {User} from "./user";
import {EventLogs} from "./eventLogs";

export class Agent {

   id?:number;
   admin?:Admin;
   agence?:Agence;
   clients?:Client[];
   users?:User;
   eventLogs?:EventLogs[];

}
