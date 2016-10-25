import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
//import { HttpModule }    from '@angular/http';

//import { AppComponent }      from './cmp/app';
import { HeroComponent }      from './cmp/hero';
import { HeroDetailComponent }      from './cmp/hero-detail';
import {HeroService} from "./service/hero.service";



@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        //HttpModule
    ],
    declarations: [ HeroComponent, HeroDetailComponent ],
    providers:    [ HeroService ],
    bootstrap:    [ HeroComponent ]
})

export class AppModule { }