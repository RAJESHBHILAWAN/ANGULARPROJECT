import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
	
	constructor(private _http: HttpClient){
		
	}
	getEmployees(): any {
		
	//	return this._http.get<IEmployee[]>("http://172.20.64.113:8023/api/employees")
	return this._http.get<IEmployee[]>("http://webapi.goldenaarcadia.com//all-employees")
//	return this._http.get<IEmployee[]>("http://localhost:55959/all-employees")
	// .map((response: HttpResponse)=> <IEmployee[]>response.json())	
	}
	
	getEmployees1(): IEmployee[] {
		return 	[
		{code: 'emp101', name: 'Virendra', gender: 'Male', annualSalary: 5500, dateOfBirth: '2/5/1981' },
		{code: 'emp102', name: 'Anurag', gender: 'Male', annualSalary: 25500, dateOfBirth: '05/2/1981' },
		{code: 'emp103', name: 'Bhism', gender: 'Male', annualSalary: 34500, dateOfBirth: '12/3/1981' },
		{code: 'emp104', name: 'Narendra', gender: 'Male', annualSalary: 132500, dateOfBirth: '11/4/1981' },
		{code: 'emp105', name: 'Pratyush', gender: 'Male', annualSalary: 155400, dateOfBirth: '9/3/1981' },
		{code: 'emp106', name: 'Preeti', gender: 'Female', annualSalary: 15523, dateOfBirth: '04/12/1981' },
		{code: 'emp107', name: 'Geeta', gender: 'Female', annualSalary: 234300, dateOfBirth: '12/12/1981' },
		{code: 'emp108', name: 'Sweety', gender: 'Female', annualSalary: 43200, dateOfBirth: '8/9/1981' },
		{code: 'emp109', name: 'Tanvi', gender: 'Female', annualSalary: 34450, dateOfBirth: '05/6/1981' },
		{code: 'emp110', name: 'Shalini', gender: 'Female', annualSalary: 454200, dateOfBirth: '05/2/1981' }
	];
	}
}
