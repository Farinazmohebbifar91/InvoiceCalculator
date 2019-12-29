import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ParametersModel} from '../models/parameters.model';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {
  }

  getCustomerOrders(params: ParametersModel) {
    return this.http.get('https://private-anon-a9bf300322-byrd1.apiary-mock.com/orders/' + params.customerId +
      '?start_date=' + params.startDate + '&end_date=' + params.endDate).pipe(map(data => {
      this.calculateOrderPrice(data);
      return data;
    })).pipe(map(data => this.calculateSummery(data)));
  }

  // calculate total price of the order based on the total_price from each item
  calculateOrderPrice(orders) {
    orders.map(order => {
      order.totalPrice = order.items.reduce((a: number, b) => {
        return b.total_price.amount == null ? a : a + Number(b.total_price.amount);
      }, 0);
    });
  }

  calculateSummery(orders) {
    const summery = {
      ordersCount: orders.length,
      invoiceAmount: orders.reduce((a: number, b) => {
        return b.totalPrice == null ? a : a + Number(b.totalPrice);
      }, 0),
      daysCount: 2
    };
    return {
      orders,
      summery
    };
  }
}
