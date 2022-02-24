import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html', 
  // templateUrl'e bir html sayfası atadığımız gibi direk html koduda atayabiliriz.
  // template:`<p>product name {{name}}</p>` şeklinde yaparsak da çalışır.
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  name = "monster";

  constructor() { }

  ngOnInit(): void {
  }

}
