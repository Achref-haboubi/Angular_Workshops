import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  suggestionUrl = 'http://localhost:3000/suggestions';

  private suggestionList = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptée',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusée',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Programme de récompenses pour motiver les employés.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusée',
      nbLikes: 5
    },
    {
      id: 4,
      title: 'Moderniser l’interface utilisateur',
      description: 'Refonte de l’interface pour améliorer l’expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
    }
  ];

  constructor(private http: HttpClient) { }

  getSuggestionList() {
    return this.suggestionList;
  }
  getSuggestionsList() {
  return this.http.get(this.suggestionUrl);
  }

  getSuggestionById(id: number) {
  return this.http.get(`${this.suggestionUrl}/${id}`);
  }

  deleteSuggestion(id: number) {
  return this.http.delete(`${this.suggestionUrl}/${id}`);
  }

  addSuggestion(suggestion: any) {
  return this.http.post(this.suggestionUrl, suggestion);
  }

  updateSuggestion(id: number, suggestion: any) {
  return this.http.put(`${this.suggestionUrl}/${id}`, suggestion);
  }

  updateLikes(id: number, suggestion: any) {
  return this.http.put(`${this.suggestionUrl}/${id}`, suggestion);
  }

}