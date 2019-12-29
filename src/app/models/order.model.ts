import {ItemModel} from './item.model';
import {SummeryModel} from './summery.model';

export class OrderModel {
  id: string;
  recipient: RecipientModel;
  created_at: Date;
  items: ItemModel[];
  delivery: DeliveryModel;
  charge_customer: ChargeModel;
  totalPrice: number;
}

export class RecipientModel {
  name: string;
  email: string;
}

class DeliveryModel {
  courier: string;
  method: string;
}

class ChargeModel {
  currency: string;
  total_price: number;
}
