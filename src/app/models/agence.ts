import {Ville} from "./ville";
import {Admin} from "./admin";
import {Client} from "./client";
import {User} from "./user";

export class Agence {

    id:number;
    dateCreated?:Date;
    dateUpdate?:Date;
    libelleAgence?:string;

    ville? : Ville;
    admin? : Admin;
    agent? : Agence[];
    client? : Client[];
    user? : User[];

}
