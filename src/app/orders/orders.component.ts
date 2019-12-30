import {Component, OnInit} from '@angular/core';
import {OrderService} from '../services/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ItemsDialogComponent} from './items-dialog/items-dialog.component';
import {OrderModel} from '../models/order.model';
import {SummeryModel} from '../models/summery.model';
import * as moment from 'moment';
import {ParametersModel} from '../models/parameters.model';
import {SnackBarService} from '../core/snack-bar/snack-bar.service';

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
              private dialog: MatDialog,
              private snackBar: SnackBarService,
              private router: Router) {
    this.paramRoute.params.subscribe((params: any) => {
      this.params.customerId = params['customerId'];
    });
    this.paramRoute.queryParams
      .subscribe(params => {
        this.params.startDate = params.startDate;
        this.params.endDate = params.endDate;
      });
  }

  ngOnInit() {
    if (this.paramsValidator()) {
      this.getOrders();
    }
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

  showItems(items) {
    this.dialog.open(ItemsDialogComponent, {
      width: '800px',
      data: {
        items
      }
    });
  }

  paramsValidator() {
    let message;
    const isGreater = moment(this.params.endDate).isSameOrAfter(moment(this.params.startDate));
    if (!isGreater) {
      message = 'start date is greater than end date';
    }
    if (!this.params.startDate || !moment(this.params.startDate).isValid() ||
      !this.params.endDate || !moment(this.params.endDate).isValid()) {
      message = 'date parameters are not valid';
    }
    if (!this.params.customerId) {
      message = 'customer ID is not valid';
    }
    if (message) {
      this.router.navigateByUrl('/home');
      this.snackBar.showError(message);
      return false;
    } else {
      return true;
    }
  }

}
