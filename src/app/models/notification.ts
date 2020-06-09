import {Client} from "./client";

export class Notification {

   id?:number;
   content?:string;
   lue?:boolean;
   type?:string;
   dateDeNotification? : Date;

   client?:Client;
}
