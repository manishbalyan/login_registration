/**
 * Created by consultadd on 29/7/16.
 */
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";


bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), HTTP_PROVIDERS, ROUTER_PROVIDERS]);
