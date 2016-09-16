import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
//import { HttpModule }    from '@angular/http';

import { AppComponent }      from './app';
import { UserDetailComponent }      from './user-detail.component';


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        //HttpModule
    ],
    declarations: [ AppComponent, UserDetailComponent ],
    //providers:    [ HeroService ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }