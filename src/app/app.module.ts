import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { MaterialModule } from './material/material.module';
import { SignUpComponent } from './signup/signup.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatBadgeModule } from '@angular/material/badge';
import { CustomerRequestComponent } from './customer-request/customer-request.component';
import { CustomerComponent } from './customer/customer.component';
import { BillComponent } from './bill/bill.component';
import { SalesTodayComponent } from './sales-today/sales-today.component';
import { ProductComponent } from './product/product.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogVComponent } from './dialog-v/dialog-v.component';
import { BillDialogComponent } from './bill-dialog/bill-dialog.component';
import { SalesDialogComponent } from './sales-dialog/sales-dialog.component';


@NgModule ({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    SignUpComponent,
    HomeComponent,
    ToolbarComponent,
    CustomerRequestComponent,
    CustomerComponent,
    BillComponent,
    SalesTodayComponent,
    ProductComponent,
    DialogComponent,
    DialogVComponent,
    BillDialogComponent,
    SalesDialogComponent,
  
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule ,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
