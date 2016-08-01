/**
 * Created by consultadd on 1/8/16.
 */
import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {LUser} from "./login";

@Injectable()
export class LoginService{
        constructor(private _http: Http){}

        login(luser: LUser){
            var headers = new Headers();
            let body = JSON.stringify(luser);
            headers.append('Content-Type', 'application/json');
            // Promise.resolve(USER).then((users: User[])=>users.push(user)user);
            // return this._http.post('http://127.0.0.1:8000/user',JSON.stringify(user))

            return this._http.post('http://127.0.0.1:8000/login/', body, {headers: headers}).map(res => {

            });
        }
}