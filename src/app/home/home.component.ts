import {Component, OnInit} from '@angular/core';
import {CustomerModel} from '../models/customer.model';
import {ParametersModel} from '../models/parameters.model';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  parameters: ParametersModel = new ParametersModel();
  customers: any;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.orderService.getCustomers().subscribe(res => {
      this.customers = res;
    });
  }

  submit() {
  }
}
