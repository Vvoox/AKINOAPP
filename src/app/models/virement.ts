import {VirementStatus} from "./enum/virement-status";
import {Compte} from "./compte";

export class Virement {

   id?:number;
   notes?:string;
   codeVerification?:number;
   montant?:number;
   dateDeVirement?:Date;

   statut?:VirementStatus;
   compte?:Compte;
   destCompte? : Compte;
}
