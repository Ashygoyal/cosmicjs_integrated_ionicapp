import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductsList } from './products-list';

@NgModule({
  declarations: [
    ProductsList,
  ],
  imports: [
    IonicPageModule.forChild(ProductsList),
  ],
})
export class ProductsListPageModule {}
