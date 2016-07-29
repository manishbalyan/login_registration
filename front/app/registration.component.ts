/**
 * Created by consultadd on 29/7/16.
 */
import { Component } from '@angular/core';
import {RegistrationService} from "./registration.service";
import {User} from "./registration";



@Component({
    selector: 'registration',
    templateUrl: 'templates/registration.template.html',
    styleUrls: ['css/styles.css'],
    providers: [RegistrationService]
})

export class RegistrationComponent {
    newUser: User;


    constructor(private _userService: RegistrationService){
        // constructor

    }

    onSubmit(){
         this._userService.insertUser(this.newUser).subscribe(res => {
            console.log('print user from component ', res);
             // router.route change to your new page ...
             
        });
    }

    onLogin(){
        let tempJSON = {
            email: 'email@email.com',
            password: ''
        }
    }


    ngOnInit(): any{
        this.newUser = {name: '', email: "", password: ""};
    }
}
