import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenderIndexComponent } from './gender/gender-index/gender-index.component';
import { CreateGenderComponent } from './gender/create-gender/create-gender.component';
import { GenderEditComponent } from './gender/gender-edit/gender-edit.component';
import { ActorIndexComponent } from './actor/actor-index/actor-index.component';
import { ActorCreateComponent } from './actor/actor-create/actor-create.component';
import { CineIndexComponent } from './cine/cine-index/cine-index.component';
import { CineCreateComponent } from './cine/cine-create/cine-create.component';
import { MoviesFilterComponent } from './movies/movies-filter/movies-filter.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { ActorEditComponent } from './actor/actor-edit/actor-edit.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'gender', component: GenderIndexComponent },
  { path: 'gender/create', component: CreateGenderComponent },
  { path: 'gender/edit/:id', component: GenderEditComponent },

  { path: 'actor', component: ActorIndexComponent },
  { path: 'actor/create', component: ActorCreateComponent },
  { path: 'actor/edit/:id', component: ActorEditComponent },


  { path: 'cine', component: CineIndexComponent },
  { path: 'cine/create', component: CineCreateComponent },

  { path: 'movies/create', component: MovieCreateComponent },
  { path: 'movies/search', component: MoviesFilterComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
