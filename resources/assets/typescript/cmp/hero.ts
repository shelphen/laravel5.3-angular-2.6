import { Component, OnInit } from '@angular/core';
import { Hero } from '../object-metadata';
import { HeroService } from '../service/hero.service'

@Component({
    selector: 'my-app',
    templateUrl: './html/hero.html',
    styleUrls: ['./css/app.css'],
    providers: [HeroService]
})
export class HeroComponent implements OnInit {
    constructor(private heroService: HeroService) { }
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    ngOnInit(): void {
        this.heroes = this.heroService.getListings();
        //this.heroes = this.heroService.getListingsPromise();
    }
}