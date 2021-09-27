import { Component, OnInit } from '@angular/core';
import {MockApiService} from "../../services/mock-api.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList = [];
  searchKey = '';
  loading = false;

  constructor(private _mockService: MockApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.loading = true;
    this._mockService.getProductData().subscribe(response => {
      this.loading = false;
      this.productList = response;
    }, error => {
      this.loading = false;
    });
  }

}
