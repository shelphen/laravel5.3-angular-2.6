export class Distributeur{
    public id:number;
    public name:string;
}

export class User{
    public id:number;
    public name:string;
    public status:boolean;
}

export class Listing{
    public id:number;
    public user:number;
    public ref:string;
    public title:string;
    public texte:string;
}