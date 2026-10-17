
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Wishlist as WishlistService } from '../services/wishlist';
import { Cart as CartService } from '../services/cart';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css'
})
export class Wishlist {
  private wishlistService = inject(WishlistService);
  private cartService = inject(CartService);

  @Output() continueShoppingEvent = new EventEmitter<void>();
  @Output() cartUpdated = new EventEmitter<number>();

  get wishlistItems() {
    return this.wishlistService.wishlistItems;
  }

  removeFromWishlist(productName: string): void {
    this.wishlistService.removeFromWishlist(productName);
  }

  addToCart(product: (typeof this.wishlistService.wishlistItems)[number]): void {
    this.cartService.addToCart(product);
    this.cartUpdated.emit(this.cartService.getCartCount());
  }

  continueShopping(): void {
    this.continueShoppingEvent.emit();
  }
}
