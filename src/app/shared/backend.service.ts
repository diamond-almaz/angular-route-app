import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BREED_LIST } from 'src/assets/types';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient
    ) { }

    ngOnInit() {
    }
  

    getDogPictureByBreed(breed: BREED_LIST) {
      return this.http.get<{ message: string}>(`https://dog.ceo/api/breed/${breed}/images/random`)
    }
}
