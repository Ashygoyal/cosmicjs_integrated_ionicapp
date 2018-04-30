import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriesList } from './categories-list';

@NgModule({
  declarations: [
    CategoriesList,
  ],
  imports: [
    IonicPageModule.forChild(CategoriesList),
  ],
})
export class CategoriesListPageModule {}
