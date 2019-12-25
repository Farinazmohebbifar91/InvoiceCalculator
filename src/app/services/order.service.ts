import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ParametersModel} from '../models/parameters.model';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {
  }

  getCustomers() {
    return this.http.get('http://private-anon-859207935b-byrd1.apiary-mock.com/customers');
  }
  
}
