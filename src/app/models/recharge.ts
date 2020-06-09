import {Compte} from "./compte";

export class Recharge {

   id?:number;
   operateur?:string;
   numeroTelephone?:string;
   montant?:number;
   dateDeRecharge?:Date;
   statut?:string;

   compte?:Compte;
}
