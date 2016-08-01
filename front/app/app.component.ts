/**
 * Created by consultadd on 29/7/16.
 */
import { Component } from '@angular/core';
import {RegistrationComponent} from "./registration.component";
import {LoginComponent} from "./login.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {HomeComponent} from "./home.component";





@Component({
    selector: 'my-app',
    template: ` 
      <header>
            <nav>
                <ul class="nav nav-pills">
                    <li role="presentation" class="btn btn-default "><a [routerLink]="['Register']">Registration</a></li>
                    <li role="presentation" class="btn btn-default "><a [routerLink]="['Login']">Login</a> </li>
                </ul>
            </nav>
       </header>
            <br><br>
                <div class="row">
                    <div>
                        <router-outlet></router-outlet> 
                     </div>
                </div>        
    `,
    styleUrls: ['css/styles.css'],
    directives: [RegistrationComponent, LoginComponent, ROUTER_DIRECTIVES  ]
})
@RouteConfig([
    {path: '/register', name: 'Register', component: RegistrationComponent},
    {path: '/login', name: 'Login', component: LoginComponent},
    {path: '/home', name: 'Home', component: HomeComponent}
])

export class AppComponent {

}
