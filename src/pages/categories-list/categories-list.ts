import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import Cosmic from 'cosmicjs';
import { ProductsList } from '../products-list/products-list';

@Component({
    selector: 'page-categories',
    templateUrl: 'categories-list.html'
})
export class CategoriesList {
    public categories;

    constructor(
        public navCtrl: NavController
    ) {
        this.categories = [];

        Cosmic.getObjectType({
            bucket: {
                slug: 'cosmic-ionic'
            }
        }, {
            type_slug: 'categories'
        }, (err, res) => {
            this.categories = res.objects.all;
        });
    }
    navToCategory(category) {
        this.navCtrl.push(ProductsList, { title: category.title, id: category._id });
    }
}