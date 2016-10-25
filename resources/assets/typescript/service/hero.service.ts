import { Injectable } from '@angular/core';
import { Hero } from '../object-metadata'
import { MockHeroes } from '../mock/mock-hero'

@Injectable()
export class HeroService {

    constructor() { }
    getListings():Hero[]{
        return MockHeroes
    }

    getListingsPromise():Promise<Hero[]>{
        //return Promise.resolve(MockListings);
        return new Promise<Hero[]>(resolve => setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getListings());        
    }

    getListingsByUser(id:number){
        return MockHeroes.filter(function(hero:Hero){
            return hero.id==id;
        })
    }
}