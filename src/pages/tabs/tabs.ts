import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
import { CategoriesList } from '../categories-list/categories-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CategoriesList;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
