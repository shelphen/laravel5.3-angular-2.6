import { Component } from '@angular/core';

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

@Component({
    selector: 'my-app',
    templateUrl: './html/app.html',
    styleUrls: ['./css/app.css']
})
export class AppComponent
{
    public title :string = 'List of Distributeurs';
    public myDistributer:Distributeur[];
    public myUsers:User[];
    public myListings:Listing[];
    loadData(id:number):void{
        switch(id){
            case 1:
                this.title = 'List of Distributeurs';break;
            case 2:
                this.title = 'List of Users';break;                
            default:
                this.title = 'List of Listings';break;    
        }
    }
}