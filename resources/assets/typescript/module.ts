import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
//import { HttpModule }    from '@angular/http';
//import { RouterModule }    from '@angular/http';

import { AppComponent }      from './component/app.component';
import { UserDetailComponent }      from './component/user-detail.component';
import { ListingsComponent }      from './component/listings.component';



@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        //HttpModule
    ],
    declarations: [ AppComponent, UserDetailComponent, ListingsComponent ],
    //providers:    [ HeroService ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }