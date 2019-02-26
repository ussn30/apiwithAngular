import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
// Import RxJs required methods


@Injectable()
export class AppService {
    private greetUrl = 'http://localhost:5000/api/hello';

    // Resolve HTTP using the constructor
    constructor(private _http: HttpClient) { }

    // sayHello() : any {        
    //    return this._http.get(this.greetUrl).subscribe(next =>
    //     {
    //         return  next.text();
    //     });
    //     // this._http.get(this.greetUrl)
    //     // .subscribe(data => {
    //     // return data;
    //     // });
    // }
    sayHello(): Observable<any> {
        return this._http.get(this.greetUrl).map((response: Response) => {
            return response.text();
        });
    }
}