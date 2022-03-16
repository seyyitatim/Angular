import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url = 'http://localhost:3000/Categories';
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<Category[]>(this.url);
  }

  getCategory(id: number) {
    return this.http.get<Category>(this.url + '?id' + id);
  }
}
