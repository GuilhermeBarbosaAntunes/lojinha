import { Component, Input } from '@angular/core';
import { Cart, CartItem } from '../../../../types/cart.model';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;
  @Input() get cart(): Cart {
    return this._cart;
  }

  constructor(private _cartService: CartService) { }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }

  getTotal(items: Array<CartItem>) {
    return this._cartService.getTotal(items);
  }

  onCLearCart(): void {
    this._cartService.clearCart();
  }

}
