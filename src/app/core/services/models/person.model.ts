export type Gender = 'male' | 'female';

export interface Person {
  fullName: string;
  gender: Gender;
  location: string;
  email: string;
  birthDate: string;
  photoUrl: string;
}
