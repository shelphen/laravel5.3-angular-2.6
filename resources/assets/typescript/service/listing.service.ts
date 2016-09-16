import { Injectable } from '@angular/core';
import { Listing } from '../object-metadata'
import { MockListings } from '../mock/mock-listings'

@Injectable()
export class ListingService {

    constructor() { }
    getListings():Listing[]{
        return MockListings
    }

    getListingsByUser(id:number){
        return MockListings.filter(function(listing:Listing){
            return listing.user==id;
        })
    }
}