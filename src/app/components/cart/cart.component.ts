import {
  Component,
  EventEmitter,
} from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent {

  items: CartItem[] = [];

  idProductEventEmitter: EventEmitter<number> = new EventEmitter();

  total: number = 0;


  onDeleteCart(id: number) {
    this.idProductEventEmitter.emit(id);
  }
}
