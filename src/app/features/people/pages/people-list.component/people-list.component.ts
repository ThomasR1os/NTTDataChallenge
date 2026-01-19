import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomUserService } from '../../../../core/services/random-user.service';
import { Person } from '../../../../core/services/models/person.model';
import { PersonCardComponent } from '../../components/person-card.component/person-card.component';

@Component({
  selector: 'app-people-list',
  imports: [CommonModule, PersonCardComponent],
  standalone: true,
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css',
})
export class PeopleListComponent {
  loading = signal(false);
  error = signal<string | null>(null);
  people = signal<Person[]>([]);

  total = computed(() => this.people().length);

  constructor(private randomUser: RandomUserService) {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set(null);

    this.randomUser.getPeople(10).subscribe({
      next: (data) => this.people.set(data),
      error: () => this.error.set('No se pudo cargar la lista.'),
      complete: () => this.loading.set(false),
    });
  }
}
