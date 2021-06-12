import { FormArrayName } from "@angular/forms";

export class UserModel{
    constructor(
        public fname:string,
        public lname:string,
        public number: string,
        public email: string,
        public password: string){}
}