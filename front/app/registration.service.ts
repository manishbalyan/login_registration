/**
 * Created by consultadd on 29/7/16.
 */
import { Injectable } from '@angular/core';
import {User} from "./registration";
import {USER} from "./mock-registration";
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/map';



@Injectable()
export class RegistrationService {
    constructor(private _http: Http){}

    insertUser(user: User){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // Promise.resolve(USER).then((users: User[])=>users.push(user)user);
       // return this._http.post('http://127.0.0.1:8000/user',JSON.stringify(user))

         return this._http.post('http://127.0.0.1:8000/user/', user, {headers: headers}).map(res => res.json());


    }

}