
import { Routes } from '@angular/router';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [
  {
    path: 'product/:slug',
    component: ProductDetails
  }
];
