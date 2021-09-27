import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ProductItemModel } from "../../models/product-item.model";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: ProductItemModel | undefined;

  constructor() { }

  ngOnInit(): void { }

}
