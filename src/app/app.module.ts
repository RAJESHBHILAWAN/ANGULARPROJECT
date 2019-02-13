import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTitlePipe} from './employee/employeeTitle.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainLoginComponent } from './home/main-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    EmployeeComponent,
	EmployeeTitlePipe,
	EmployeeCountComponent,
	MainLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
