import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeeComponent implements OnInit {
	colSpan:number = 2;
	CompanyName:string = 'Team Pranav';
    CompanyAddress:string = '3603 Sector 71';
    Business: string = 'Information Technology';
	Outlets:number = 30;
	selectedEmployeeCountRadioButton :string = "All";
	employees : IEmployee[];

  constructor(private _employeeService: EmployeeService ) {
	
  }

	
	ngOnInit() {
		 this._employeeService.getEmployees()
								.subscribe(employeeData => this.employees = employeeData );
  }


  onEmployeeCountRadioButtonChange(selectedRadioButtonValue : string) : void{
	  this.selectedEmployeeCountRadioButton = selectedRadioButtonValue ;
  }
  	

	getTotalEmployeesCount():number{
		return this.employees.length;
	}

	getTotalMaleEmployeesCount():number{
		return this.employees.filter(s=>s.gender === "Male").length;
	}


	getTotalFemaleEmployeesCount():number{
		return this.employees.filter(s=>s.gender === "Female").length;
	}

  getEmployees(): void{
	  this.employees = [
	{code: 'emp101', name: 'Virendra', gender: 'Male', annualSalary: 5500, dateOfBirth: '2/5/1981' },
	{code: 'emp102', name: 'Anurag', gender: 'Male', annualSalary: 25500, dateOfBirth: '05/2/1981' },
	{code: 'emp103', name: 'Bhism', gender: 'Male', annualSalary: 34500, dateOfBirth: '12/3/1981' },
	{code: 'emp104', name: 'Narendra', gender: 'Male', annualSalary: 132500, dateOfBirth: '11/4/1981' },
	{code: 'emp105', name: 'Pratyush', gender: 'Male', annualSalary: 155400, dateOfBirth: '9/3/1981' },
	{code: 'emp106', name: 'Preeti', gender: 'Female', annualSalary: 15523, dateOfBirth: '04/12/1981' },
	{code: 'emp107', name: 'Geeta', gender: 'Female', annualSalary: 234300, dateOfBirth: '12/12/1981' },
	{code: 'emp108', name: 'Sweety', gender: 'Female', annualSalary: 43200, dateOfBirth: '8/9/1981' },
	{code: 'emp109', name: 'Tanvi', gender: 'Female', annualSalary: 345450, dateOfBirth: '05/6/1981' },
	{code: 'emp111', name: 'Tanushree', gender: 'Female', annualSalary: 15500, dateOfBirth: '05/2/1981' },
	{code: 'emp111', name: 'Nivedhita', gender: 'Female', annualSalary: 15500, dateOfBirth: '05/2/1981' }
	
	]; 
  }
  
  trackByEmpCode(index:number, employee:any):string{
	  
	  return employee.code;
  }
  
}

