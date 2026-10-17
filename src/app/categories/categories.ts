import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {

  categoryList = [
    {
      name: 'Tech & Gadgets',
      icon: '💻',
      description: 'Smart devices and useful gadgets'
    },
    {
      name: 'Fashion',
      icon: '👟',
      description: 'Everyday styles and essentials'
    },
    {
      name: 'Home',
      icon: '🏠',
      description: 'Things that make home better'
    },
    {
      name: 'Beauty',
      icon: '✨',
      description: 'Personal care and beauty picks'
    }
  ];

}