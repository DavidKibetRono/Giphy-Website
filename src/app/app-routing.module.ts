import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayGifsComponent } from './display-gifs/display-gifs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {SpecificGifComponent} from "./specific-gif/specific-gif.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:"gifs",component:DisplayGifsComponent},
  {path:"gifs/:id",component:SpecificGifComponent},
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"**",component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
