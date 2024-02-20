export interface Cart {
  items: Array<CartItem>;
}

export interface CartItem {
  name: string;
  id: number
  price: number;
  product: string;
  quantity: number;
}
