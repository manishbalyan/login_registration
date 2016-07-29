/**
 * Created by consultadd on 29/7/16.
 */
import { Component } from '@angular/core';
import {RegistrationComponent} from "./registration.component";
import {LoginComponent} from "./login.component";


@Component({
    selector: 'my-app',
    template: `<h1 id="main-heading">Login and Registration </h1>       
                <div class="row">
                    <div class="col-lg-6">
                        <registration></registration>
                    </div>
                    <div class="col-lg-6">
                        <login></login>
                    </div>
                </div>        
    `,
    styleUrls: ['css/styles.css'],
    directives: [RegistrationComponent, LoginComponent]
})


export class AppComponent {

}
