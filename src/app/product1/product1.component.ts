import { Component, OnInit } from '@angular/core';
import { Product , ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component implements OnInit {

  product: Product;

  // 依赖注入的唯一注入方式——构造函数注入
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
