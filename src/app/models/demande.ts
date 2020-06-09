import {Client} from "./client";

export class Demande {

   id?:number;
   email?:string;
   nom?:string;
   prenom?:string;

   client?:Client;
   timestamp?:Date;
}
