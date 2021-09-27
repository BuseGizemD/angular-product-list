import { NgModule } from "@angular/core";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductFilterPipe } from "./pipes/product-filter.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MockApiService } from "./services/mock-api.service";
import { ProductItemComponent } from "./components/product-item/product-item.component";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ProductListComponent,
    ProductItemComponent,
  ],
  providers: [
    MockApiService
  ],
  bootstrap: []
})
export class CoreModule { }
