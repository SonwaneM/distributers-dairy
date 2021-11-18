import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { BillComponent } from './bill/bill.component';
import { SalesTodayComponent } from './sales-today/sales-today.component';
import { ProductComponent } from './product/product.component';
import { CustomerRequestComponent } from './customer-request/customer-request.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogVComponent } from './dialog-v/dialog-v.component';
import { BillDialogComponent } from './bill-dialog/bill-dialog.component';
import { SalesDialogComponent } from './sales-dialog/sales-dialog.component';


const routes: Routes = [
    {path:'',redirectTo:'login', pathMatch:'full'},
                          {path:'login',component:LoginComponent},
                          {path:'SignUp', component:SignUpComponent},
                          {path:'home', component:HomeComponent},
                          {path:'user', component:UserComponent},
                          {path:'customer_request', component: CustomerRequestComponent},
                          {path:'customer', component:CustomerComponent},
                          {path:'bill', component:BillComponent},
                          {path:'sales_today', component:SalesTodayComponent},
                          {path:'product', component:ProductComponent},
                          {path:'dialog', component:DialogComponent},
                          {path:'dialog-v', component:DialogVComponent},
                          {path:'bill-dailog',component:BillDialogComponent},
                          {path:'sales-dialog',component:SalesDialogComponent},
                        
                    
                          
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
