/**
 * Created by consultadd on 29/7/16.
 */
/**
 * Created by consultadd on 29/7/16.
 */
import { Component } from '@angular/core';
import {LoginService} from "./login.service";
import {LUser} from "./login";
import {Router} from "@angular/router-deprecated";




@Component({
    selector: 'login',
    templateUrl: 'templates/login.template.html',
    styleUrls: ['css/styles.css'],
    providers: [LoginService]

})

export class LoginComponent {
    luser: LUser;
        constructor(private _loginService: LoginService, private _router: Router){}

    onLSubmit(){
        this._loginService.login(this.luser).subscribe((res) =>{
            console.log("Success", res)
        })
        this._router.navigate(['Home'])
    }

}

