import { Component } from '@angular/core';
import {Distributeur,User,Listing} from './object-metadata';

@Component({
    selector: 'my-app',
    templateUrl: './html/app.html',
    styleUrls: ['./css/app.css']
})

export class AppComponent
{
    public title :string = 'List of Users';
    public selectedUser:number;
    public myUsers:User[] = [
        {id:1,name:"Previsite",status:true},
        {id:2,name:"WorldPost",status:true},
        {id:3,name:"ListGlob",status:false}
    ];
    selectUser(id:number):void{
        this.selectedUser=id;
    }
}