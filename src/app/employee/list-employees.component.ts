import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styles: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
	public pageHeader: string;
  constructor() {
    this.pageHeader = "Employee List";
  }

  ngOnInit() {
  }


}

 