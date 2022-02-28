import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Kategori Listesi";
  categories: Category[] = [
    { id: 1, name: "elektronik" },
    { id: 2, name: "müzik" },
    { id: 3, name: "bilgisayar" }
  ]
  ngOnInit(): void {
  }

}
