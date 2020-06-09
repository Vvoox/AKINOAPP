import {Client} from "./client";
import {Virement} from "./virement";
import {Recharge} from "./recharge";
import {CompteStatus} from "./enum/compte-status";

export class Compte {

   numeroCompte?:string;
   solde? : number;
   intitule?:string;
   dateDeCreation?:Date;
   dernierOperation?:Date;
   codeSecret?: string;

   statut? : CompteStatus;
   client?:Client;
   virements?:Virement[];
   recharges?:Recharge[];


}
