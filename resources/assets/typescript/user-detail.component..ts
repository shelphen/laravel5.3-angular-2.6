import { Component, Input } from '@angular/core';
import { User, Listing } from './object-metadata';

@Component({    
    selector: 'user-detail',
    templateUrl: 'user-detail.component.html'
})
export class UserDetailComponent {
    //constructor() { }
    //ngOnInit() { }
    @Input() user:User;
    public myListings:Listing[];
    
    showListings(id:number):void{

    }
}