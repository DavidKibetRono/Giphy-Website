import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { DisplayGifsComponent } from './display-gifs/display-gifs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpecificGifComponent } from './specific-gif/specific-gif.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InputSearchComponent,
    DisplayGifsComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    SpecificGifComponent,
    LoadMoreComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
