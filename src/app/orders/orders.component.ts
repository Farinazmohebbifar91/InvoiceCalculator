import {Component, OnInit} from '@angular/core';
import {OrderService} from '../services/order.service';
import {ActivatedRoute} from '@angular/router';
import {ParametersModel} from '../models/parameters.model';
import {ItemModel} from '../models/item.model';
import {MatDialog} from '@angular/material';
import {ItemsDialogComponent} from './items-dialog/items-dialog.component';
import {OrderModel} from '../models/order.model';
import {SummeryModel} from '../models/summery.model';

@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: OrderModel[];
  summery: SummeryModel;
  params = new ParametersModel();
  selectedOrder: OrderModel;

  constructor(private orderService: OrderService,
              private paramRoute: ActivatedRoute,
              private dialog: MatDialog) {
    this.paramRoute.paramMap.subscribe(params => {
      this.params.customerId = params.get('customerId');
      this.params.startDate = new Date(params.get('startDate'));
      this.params.endDate = new Date(params.get('endDate'));
    });
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getCustomerOrders(this.params).subscribe(data => {
      this.orders = data.orders;
      this.summery = data.summery;
    });
  }

  orderSelected(row) {
    this.selectedOrder = row;
  }

  showItems(order) {
    const dialogRef = this.dialog.open(ItemsDialogComponent, {
      width: '800px',
      data: {
        items: order.items
      }
    });
    dialogRef.afterClosed().subscribe(res => {
    });
  }
}
