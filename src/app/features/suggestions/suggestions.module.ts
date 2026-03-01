import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SuggestionsComponent,
    SuggestionFormComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SuggestionsModule { }
