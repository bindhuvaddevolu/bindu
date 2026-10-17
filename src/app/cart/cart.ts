
import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { Cart as CartService } from '../services/cart';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  private cartService = inject(CartService);
private cdr = inject(ChangeDetectorRef);
 get cartItems() {
  return this.cartService.cartItems;
}

  get totalPrice(): number {
    return this.cartService.getCartTotal();
  }

  increaseQuantity(productName: string): void {
    this.cartService.increaseQuantity(productName);
  }

  decreaseQuantity(productName: string): void {
    this.cartService.decreaseQuantity(productName);
  }

  removeItem(productName: string): void {
    this.cartService.removeFromCart(productName);
  }
checkCart(): void {
  console.log('Current cart:', this.cartService.cartItems);
}
ngDoCheck(): void {
  this.cdr.detectChanges();
}
}



