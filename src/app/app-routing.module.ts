import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListSuggestionComponent } from './features/suggestions/list-suggestion/list-suggestion.component';
import { Suggestion } from './models/suggestion';
import { SuggestionDetailsComponent } from './features/suggestions/suggestion-details/suggestion-details.component';
import path from 'path';
import { NotfoundComponent } from './core/notfound/notfound.component';

const routes: Routes = [
  {path:'', redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'listSuggestion' , component:ListSuggestionComponent},
  {path:'suggDetails/:id', component:SuggestionDetailsComponent},
  { path: 'suggestions', loadChildren: () => import('./features/suggestions/suggestions.module').then(m => m.SuggestionsModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  {path: '**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
