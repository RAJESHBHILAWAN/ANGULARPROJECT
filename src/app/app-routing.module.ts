import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
    
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { MainLoginComponent } from './home/main-login.component';




const appRoutes: Routes = [
{ path: 'login', component: MainLoginComponent},
{ path: 'list', component: ListEmployeesComponent},
{ path: 'create', component: CreateEmployeeComponent},
{ path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
    imports: [
	RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
