
import {
  Component,
  EventEmitter,
  Output,
  inject
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Cart } from '../services/cart';
import { Wishlist } from '../services/wishlist';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  private cartService = inject(Cart);
  private wishlistService = inject(Wishlist);

  @Output() cartUpdated = new EventEmitter<number>();

  productList = [
    {
      name: 'Wireless Headphones',
      price: 2499,
      category: 'Tech',
      rating: 4.6,
      image: 'https://dellstatic.luroconnect.com/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/h/e/headset-dell-wl7024-hero.jpg'
    },
    {
      name: 'Minimal Backpack',
      price: 1599,
      category: 'Fashion',
      rating: 4.4,
      image:  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop'},
    {
      name: 'Smart Desk Lamp',
      price: 1299,
      category: 'Home',
      rating: 4.5,
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRU8XUP68ZtN5JQ-7aqrsAq321Xa4nEeuAjnaWbJ-TmLyu7CpIvceIFyEbiVOjMf-jTNGfMpWof-nwees7qiu7vcKKd8A7ZYFw2rEyGg88&usqp=CAc'
    },
    {
      name: 'Everyday Sneakers',
      price: 2199,
      category: 'Fashion',
      rating: 4.7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrJ7PeRcZW_Qreb17Lc49hp5IOXZIGzF9fxJEsdu04Q&s=10'
    }
  ];

  cartCount: number = 0;
  searchText: string = '';
  selectedCategory: string = 'All';
  sortOption: string = 'default';

  selectedProduct: typeof this.productList[number] | null = null;

  // Add product to cart
  addToCart(product: typeof this.productList[number]): void {
    this.cartService.addToCart(product);

    this.cartCount = this.cartService.getCartCount();
    this.cartUpdated.emit(this.cartCount);

    console.log('Cart items:', this.cartService.cartItems);
  }

  // Search, filter and sort products
  get filteredProducts() {
    let result = this.productList.filter(product => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase());

      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (this.sortOption === 'lowToHigh') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'highToLow') {
      result.sort((a, b) => b.price - a.price);
    } else if (this.sortOption === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }

  // View product details
  viewProduct(product: typeof this.productList[number]): void {
    this.selectedProduct = product;
  }

  // Return to products list
  backToProducts(): void {
    this.selectedProduct = null;
  }

  // Wishlist functions
  addToWishlist(product: typeof this.productList[number]): void {
    this.wishlistService.addToWishlist(product);
  }

  isInWishlist(product: typeof this.productList[number]): boolean {
    return this.wishlistService.isInWishlist(product.name);
  }
}
