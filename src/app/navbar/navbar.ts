
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() cartCount: number = 0;

  @Output() wishlistClicked = new EventEmitter<void>();

  openWishlist(): void {
    this.wishlistClicked.emit();
  }
}
