import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-from-airport',
  templateUrl: './from-airport.component.html',
  styleUrls: ['./from-airport.component.scss']
})
export class FromAirportComponent {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
