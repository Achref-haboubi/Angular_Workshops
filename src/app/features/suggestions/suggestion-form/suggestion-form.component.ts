import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SuggestionService } from '../../../core/Services/suggestion.service';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css']
})
export class SuggestionFormComponent implements OnInit {

  suggestionForm!: FormGroup;
  id?: number;
  suggestion?: any;

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {

    this.suggestionForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Z][a-zA-Z ]*$')
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(30)
      ]],
      category: ['', Validators.required],
      date: [{ value: new Date(), disabled: true }],
      status: [{ value: 'en attente', disabled: true }]
    });

    // récupérer l'id depuis l'URL
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // si id existe → mode modification
    if (this.id) {

      this.suggestionService.getSuggestionById(this.id)
        .subscribe((data: any) => {

          this.suggestion = data.suggestion;

          this.suggestionForm.patchValue(this.suggestion);

        });

    }
  }

  onSubmit(): void {

    if (this.suggestionForm.valid) {

      const formValue = this.suggestionForm.getRawValue();

      const suggestionData = {
        title: formValue.title,
        description: formValue.description,
        category: formValue.category,
        date: formValue.date,
        status: formValue.status,
        nbLikes: this.suggestion?.nbLikes ?? 0
      };

      // mode UPDATE
      if (this.id) {

        this.suggestionService.updateSuggestion(this.id, suggestionData)
          .subscribe(() => {

            this.router.navigate(['/suggestions']);

          });

      }

      // mode ADD
      else {

        this.suggestionService.addSuggestion(suggestionData)
          .subscribe(() => {

            this.router.navigate(['/suggestions']);

          });

      }

    }

  }

}