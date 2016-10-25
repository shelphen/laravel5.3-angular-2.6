import { Component, Input } from '@angular/core';
import { Hero } from '../object-metadata';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './html/hero-detail.html',
    styleUrls: ['./css/app.css']
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}
