import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service'
import { ProductService } from '../services/product.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  filterText = "";
  title = "Ürün Listesi";
  products!: Product[];
  categoryId!: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.categoryId = params["categoryId"];
      this.categoryId > 0 ?
        this.productService.getProductsByCategoryId(this.categoryId).subscribe(data => { this.products = data; })
        : this.productService.getProducts().subscribe(data => { this.products = data; });
    });

  }

  addToCart(name: string) {
    this.alertifyService.success(name);
  }
}
