import {Role} from "./enum/role";
import {Admin} from "./admin";
import {Agent} from "./agent";
import {Client} from "./client";
import {Agence} from "./agence";
import {Compte} from "./compte";
import {EventLogs} from "./eventLogs";


export class User {

  id?:number;
  email?:string;
  nom?:string;
  prenom?:string;
  password?:string;
  newPassword?:string;
  confPassword?:string;
  emailConfirmed? : boolean;
  photo?:any;
  verificationToken?:string;
  numeroTelephone?:number;
  dateDeCreation?:Date;
  dateUpdate?:Date;
  adresse?:string;
  codePostale?:number;
  ville?:string;

  role?:Role;
  admin?:Admin;
  agent?:Agent;
  client?:Client;
  agence?:Agence;
  comptes?:Compte[];
  eventLogs?:EventLogs[];
  refresh_token?:string;
}
