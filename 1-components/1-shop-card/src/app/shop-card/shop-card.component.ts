import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICartProduct} from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent implements OnInit{
  @Input()
  public product: ICartProduct = {} as ICartProduct;

  @Output()
  public decrement = new EventEmitter();

  @Output()
  public increment = new EventEmitter();

  public stars: number[] = [1, 2, 3, 4, 5];

  ngOnInit() {
  }

  public decrementProductInCart(): void {
    this.decrement.emit();
  }

  public incrementProductInCart(): void {
    this.increment.emit();
  }

}
