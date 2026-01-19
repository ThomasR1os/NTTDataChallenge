import { Component , Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'; 
import { Person } from '../../../../core/services/models/person.model';

@Component({
  selector: 'app-person-card',
  imports: [CommonModule, DatePipe],
  standalone: true,
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css',
})
export class PersonCardComponent {
  @Input({ required: true }) person!: Person;
}
