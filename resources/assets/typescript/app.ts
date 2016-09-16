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
    public myDistributer:Distributeur[] = [
     {id:1,name:"Previsite"},
     {id:2,name:"WorldPost"},
     {id:3,name:"ListGlob"}
    ];
    public currentDistrib:number;
    public myUsers:User[] = [
        {id:1,name:"Previsite",status:true},
        {id:2,name:"WorldPost",status:true},
        {id:3,name:"ListGlob",status:false}
    ];
    public myListings:Listing[];
    goToDistrib(id:number):void{
        this.currentDistrib=id;
    }
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