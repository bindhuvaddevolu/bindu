
import { Injectable } from '@angular/core';

export interface WishlistItem {
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class Wishlist {
  wishlistItems: WishlistItem[] = [];

  addToWishlist(product: WishlistItem): void {
    const exists = this.wishlistItems.some(
      item => item.name === product.name
    );

    if (!exists) {
      this.wishlistItems.push(product);
    }
  }

  removeFromWishlist(productName: string): void {
    this.wishlistItems = this.wishlistItems.filter(
      item => item.name !== productName
    );
  }

  isInWishlist(productName: string): boolean {
    return this.wishlistItems.some(
      item => item.name === productName
    );
  }
}
