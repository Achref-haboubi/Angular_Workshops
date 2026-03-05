import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ListSuggestionComponent } from './features/suggestions/list-suggestion/list-suggestion.component';
import { SuggestionDetailsComponent } from './features/suggestions/suggestion-details/suggestion-details.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    ListSuggestionComponent,
    SuggestionDetailsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    [provideHttpClient()]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
