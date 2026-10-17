
import { Component } from '@angular/core';

import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Categories } from './categories/categories';
import { Products } from './products/products';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Wishlist } from './wishlist/wishlist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Home,
    Categories,
    Products,
    Cart,
    Checkout,
    Wishlist
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cartCount: number = 0;
  showCheckout: boolean = false;
  showWishlist: boolean = false;

  updateCartCount(newCount: number): void {
    this.cartCount = newCount;
  }

  openCheckout(): void {
    this.showWishlist = false;
    this.showCheckout = true;
  }

  openWishlist(): void {
    this.showCheckout = false;
    this.showWishlist = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showProducts(): void {
    this.showWishlist = false;
    this.showCheckout = false;

    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
}
