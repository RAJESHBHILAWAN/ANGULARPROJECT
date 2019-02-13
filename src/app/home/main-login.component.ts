import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms'
import { LoginService } from './login.service';


@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: [ './main-login.component.css'],
  providers: [ LoginService ]
})
export class MainLoginComponent implements OnInit {
	loginForm: FormGroup;
	mylogins : any;
	 
  constructor(private _loginService: LoginService) { }
  
    ngOnInit() {
	  this.loginForm = new FormGroup(
	  {
		  userid: new FormControl(),
		  password: new FormControl(),
		  
	  }
	  );
	  	   
  }

    onSubmit(): void{
      console.log(this.loginForm.touched);
	  console.log(this.loginForm.value);
	  console.log(this.loginForm.controls.userid.touched);
	  console.log(this.loginForm.get('userid').value);
	
	debugger;
		 this._loginService.getLogin()
								.subscribe(employeeData => this.mylogins = employeeData );
  	 // this._loginService.getLogin()
		//						.subscribe(loginData => this.logins = loginData);
    }
  
  
  
  }
