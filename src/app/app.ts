import { Component, signal } from '@angular/core';
import { PeopleListComponent } from './features/people/pages/people-list.component/people-list.component';

@Component({
  selector: 'app-root',
  imports: [PeopleListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nttdata');
  readonly logoUrl =
    'https://s3.amazonaws.com/media.greatplacetowork.com/peru/best-workplaces-in-peru/2025/3-mas-de-1000/14-ntt-data/logo.png';
}
