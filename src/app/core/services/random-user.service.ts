import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Person } from './models/person.model';

type RandomUserResponse = {
  results: Array<{
    gender: 'male' | 'female';
    name: { title: string; first: string; last: string };
    location: { city: string; country: string };
    email: string;
    dob: { date: string; age: number };
    picture: { large: string; medium: string; thumbnail: string };
  }>;
};


@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  private readonly baseUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getPeople(count = 10): Observable<Person[]> {
    const url = `${this.baseUrl}?results=${count}&inc=gender,name,location,email,dob,picture&noinfo`;
    return this.http.get<RandomUserResponse>(url).pipe(
      map((res) =>
        res.results.map((u) => ({
          fullName: `${u.name.first} ${u.name.last}`,
          gender: u.gender,
          location: `${u.location.city}, ${u.location.country}`,
          email: u.email,
          birthDate: u.dob.date,
          photoUrl: u.picture.large,
        }))
      )
    );
  }
}
