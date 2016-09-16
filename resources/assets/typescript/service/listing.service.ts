import { Injectable } from '@angular/core';
import { Listing } from '../object-metadata'
import { MockListings } from '../mock/mock-listings'

@Injectable()
export class ListingService {

    constructor() { }
    getListings():Listing[]{
        return MockListings
    }

    getListingsPromise():Promise<Listing[]>{
        //return Promise.resolve(MockListings);
        return new Promise<Listing[]>(resolve => setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getListings());        
    }

    getListingsByUser(id:number){
        return MockListings.filter(function(listing:Listing){
            return listing.user==id;
        })
    }
}