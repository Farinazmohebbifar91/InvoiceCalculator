import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import {
  MatTableModule, MatButtonModule, MatSelectModule, MatInputModule, MatGridListModule, MatFormFieldModule, MatDatepickerModule,
  MatSnackBarModule,
  MatToolbarModule, MatNativeDateModule, MatProgressSpinnerModule, MatRadioModule, MatCardModule, MatMenuModule, MatCheckboxModule,
  MatIconModule,
  MatSlideToggleModule, MatDialogModule, MatSortModule, MatPaginatorModule, MatListModule, MatSidenavModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderService} from './services/order.service';
import {AngularMaterialModule} from '../material.module';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
