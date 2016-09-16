import { Component, Input } from '@angular/core';
import { User, Listing } from '../object-metadata';

@Component({    
    selector: 'my-listings',
    templateUrl: './html/listings.component.html',
})
export class ListingsComponent {
    //constructor() { }
    //ngOnInit() { }
    @Input() listings :Listing[];    
}