# ANGULARPROJECT
	getEmployees(): any {
		
	//	return this._http.get<IEmployee[]>("http://172.20.64.113:8023/api/employees")
	return this._http.get<IEmployee[]>("http://webapi.goldenaarcadia.com//all-employees")
//	return this._http.get<IEmployee[]>("http://localhost:55959/all-employees")
	// .map((response: HttpResponse)=> <IEmployee[]>response.json())	
	}
	iS WORKING
  BUT


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
	return this._http.post<any>(this.apiURL ,userData, httpOptions)
	.subscribe(response => {
		console.log(response);
		return response;
	}, err => {
		throw err;
	});

	}
  
  IS NOT WORKING
  
