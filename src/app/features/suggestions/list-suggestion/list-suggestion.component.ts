import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../suggestion.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent implements OnInit {

  searchTerm: string = '';
  favorites: Suggestion[] = [];
  suggestions: Suggestion[] = [];

  constructor(private suggestionService: SuggestionService) {}

  ngOnInit(): void {
    this.suggestions = this.suggestionService.getSuggestions();
  }

  likeSuggestion(s: Suggestion) {
    s.nbLikes++;
  }

  addToFavorites(s: Suggestion) {
    if (!this.favorites.includes(s)) {
      this.favorites.push(s);
    }
  }

  filteredSuggestions(): Suggestion[] {
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      s.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getSuggestionById(id: number) {
    return this.suggestions.find(s => s.id === id);
  }
}