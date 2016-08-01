/**
 * Created by consultadd on 29/7/16.
 */
import { Component } from '@angular/core';
import {RegistrationService} from "./registration.service";
import {User} from "./registration";
import {Router} from "@angular/router-deprecated";



@Component({
    selector: 'registration',
    templateUrl: 'templates/registration.template.html',
    styleUrls: ['css/styles.css'],
    providers: [RegistrationService],

})

export class RegistrationComponent {
    newUser: User;


    constructor(private _userService: RegistrationService, private _router: Router){
        // constructor

    }

    onSubmit(){
         this._userService.insertUser(this.newUser).subscribe(res => {
            console.log('print user from component ', res);
             this._router.navigate(['Login']);


             // router.route change to your new page ...

             
        });
    }



    ngOnInit(): any{
        this.newUser = {name: '', email: "", password: ""};
    }
}
