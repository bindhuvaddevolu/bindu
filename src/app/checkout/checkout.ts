

import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cart as CartService } from '../services/cart';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  private cartService = inject(CartService);
@Output() continueShoppingEvent = new EventEmitter<void>();
  fullName: string = '';
  mobile: string = '';
  address: string = '';
  city: string = '';

  orderPlaced: boolean = false;
  orderId: string = '';

  // Save order details before clearing the cart
  orderedItems: {
    name: string;
    price: number;
    quantity: number;
  }[] = [];

  orderedTotal: number = 0;

  // Get current cart items
  get cartItems() {
    return this.cartService.cartItems;
  }

  // Calculate cart total
  get totalPrice(): number {
    return this.cartService.getCartTotal();
  }

  // Place order
  placeOrder(): void {
    if (this.cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    // Save items and total before clearing cart
    this.orderedItems = this.cartItems.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }));

    this.orderedTotal = this.totalPrice;

    // Generate order ID
    this.orderId = 'ORD' + Date.now();

    // Clear cart
    this.cartService.clearCart();

    // Show confirmation
    this.orderPlaced = true;
  }

  // Continue shopping
  
continueShopping(): void {
  this.orderPlaced = false;
  this.fullName = '';
  this.mobile = '';
  this.address = '';
  this.city = '';
  this.orderId = '';
  this.orderedItems = [];
  this.orderedTotal = 0;

  this.continueShoppingEvent.emit();
}
// testing for github report
}
