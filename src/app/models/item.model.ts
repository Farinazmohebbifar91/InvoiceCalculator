export class ItemModel {
  id: string;
  name: string;
  quantity: number;
  total_price: PriceModel;
}

class PriceModel {
  currency: string;
  amount: number;
}
