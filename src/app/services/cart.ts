

import { Injectable } from '@angular/core';
export interface CartItem {
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class Cart {
  cartItems: CartItem[] = [];


  addToCart(product: Omit<CartItem, 'quantity'>): void {
    const existingItem = this.cartItems.find(
      item => item.name === product.name
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({
        ...product,
        quantity: 1
      });
    }
  }

  getCartCount(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  getCartTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  increaseQuantity(productName: string): void {
    const item = this.cartItems.find(
      product => product.name === productName
    );

    if (item) {
      item.quantity++;
    }
  }

  decreaseQuantity(productName: string): void {
    const item = this.cartItems.find(
      product => product.name === productName
    );

    if (item && item.quantity > 1) {
      item.quantity--;
    }
  }

  removeFromCart(productName: string): void {
    this.cartItems = this.cartItems.filter(
      item => item.name !== productName
    );
  }

clearCart(): void {
  this.cartItems = [];
}

}
