import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BREED_LIST, IProduct, IUser } from 'src/assets/types';
import { map } from 'rxjs';

const BASE_URL_PRODUCTS = 'https://dummyjson.com/products';
const BASE_URL_USERS = 'https://jsonplaceholder.typicode.com/users';

interface ResponseProducts { products: IProduct[]} 

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

    ngOnInit() {
    }

    getUsers() {
      return this.http.get<IUser[]>(BASE_URL_USERS)
    }

    getUsersByID(id: number) {
      return this.http.get<IUser>(`${BASE_URL_USERS}/${id}`)
    }

    getDogPictureByBreed(breed: BREED_LIST) {
      return this.http.get<{ message: string}>(`https://dog.ceo/api/breed/${breed}/images/random`)
    }

    getProducts() {
      return this.http.get<ResponseProducts>(BASE_URL_PRODUCTS).pipe(map((data) => data.products));
    }

    getProductsBySearch(searchText: string) {
      return this.http.get<ResponseProducts>(`${BASE_URL_PRODUCTS}/search?q=${searchText}`).pipe(map((data) => data.products))
    }
}
