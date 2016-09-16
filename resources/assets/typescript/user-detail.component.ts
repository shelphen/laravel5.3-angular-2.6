import { Component, Input } from '@angular/core';
import { User, Listing } from './object-metadata';
import { ListingService } from './service/listing.service'

@Component({    
    selector: 'user-detail',
    templateUrl: './html/user-detail.component.html',
    providers: [ListingService]
})
export class UserDetailComponent {
    constructor(private listingService:ListingService) {}
    //ngOnInit() { }
    @Input() user :User;
    public myListings:Listing[];    
    showListings(id:number):void{
        this.myListings = this.listingService.getListingsByUser(id);
    }
}