import { Component, Input } from '@angular/core';
import { User, Listing } from './object-metadata';

@Component({    
    selector: 'user-detail',
    templateUrl: './html/user-detail.component.html',
})
export class UserDetailComponent {
    //constructor() { }
    //ngOnInit() { }
    @Input() user :User;
    public myListings:Listing[];    
    showListings(id:number):void{
        this.myListings = [
            {id:1,
            user:1,
            ref:'string',
            title:"my listing string",
            texte:'à vendre string'}            
        ]
    }
}