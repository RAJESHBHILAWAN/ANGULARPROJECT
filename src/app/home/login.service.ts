import { Injectable } from '@angular/core';
import { ILogin } from './login';
import { HttpClient, HttpResponse, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
	apiURL : string;
	reports : string;
	retmsg : string ;
	constructor(private _http: HttpClient){
		
	}


	

	getLogin(): any {
		debugger;
		this.apiURL = "http://webapi.goldenaarcadia.com/";
		this.apiURL ="http://webapi.goldenaarcadia.com/get/token";
	var userData = 	"";

	var reqHeader = new HttpHeaders({ 
	'Content-Type': 'application/json',
	'Authorization':'Basic YWtoaWw6YWtoaWw ='
	} );
	var httpOptions = {
		headers: new HttpHeaders({
		  'Content-Type':  'application/json',
		  'Authorization': 'Basic YWtoaWw6YWtoaWw ='
		})
	  };
	debugger;
//        return this._http.post<any>(this.apiURL, userData, httpOptions)
        return this._http.post<any>(this.apiURL, userData, httpOptions)

	}


    get_Login(): any {
        debugger;
        this.apiURL = "http://webapi.goldenaarcadia.com/";
        this.apiURL = "http://webapi.goldenaarcadia.com/get/token";
        var userData = "";

        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWtoaWw6YWtoaWw ='
        });
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic YWtoaWw6YWtoaWw ='
            }),
            observe: 'response' as 'response'
        };
        debugger;
        //        return this._http.post<any>(this.apiURL, userData, httpOptions)

        //return this._http.post<any>(this.apiURL, userData, httpOptions)
        //    .subscribe((res: HttpResponse<any>) => {
        //        console.log(res.headers.get('token'));
        //    })
       

            return this._http.post(this.apiURL, userData, httpOptions)
            .subscribe((res: HttpResponse<any>) => {
            console.log(res.headers.get('token'));
        })
    }


}
