import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { FlexLayoutModule } from "@angular/flex-layout";

import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenderIndexComponent } from './gender/gender-index/gender-index.component';
import { CreateGenderComponent } from './gender/create-gender/create-gender.component';
import { ActorIndexComponent } from './actor/actor-index/actor-index.component';
import { ActorCreateComponent } from './actor/actor-create/actor-create.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { CineCreateComponent } from './cine/cine-create/cine-create.component';
import { CineIndexComponent } from './cine/cine-index/cine-index.component';
import { GenderFormComponent } from './gender/gender-form/gender-form.component';
import { GenderEditComponent } from './gender/gender-edit/gender-edit.component';
import { MoviesFilterComponent } from './movies/movies-filter/movies-filter.component';
import { ActorFormComponent } from './actor/actor-form/actor-form.component';
import { ErrorShowComponent } from './utilities/error-show/error-show.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    GenderIndexComponent,
    CreateGenderComponent,
    ActorIndexComponent,
    ActorCreateComponent,
    MovieCreateComponent,
    CineCreateComponent,
    CineIndexComponent,
    GenderFormComponent,
    GenderEditComponent,
    MoviesFilterComponent,
    ActorFormComponent,
    ErrorShowComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
