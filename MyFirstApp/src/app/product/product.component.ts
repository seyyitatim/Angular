import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi";
  products: any[] = [
    { id: 1, name: "laptop", price: 2500, categoryId: 1, description: "Asus Zenbook" },
    { id: 1, name: "mouse", price: 25, categoryId: 2, description: "lucitik" }
  ];
  
  ngOnInit(): void {
  }

}
