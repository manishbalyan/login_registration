/**
 * Created by consultadd on 29/7/16.
 */
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {HTTP_PROVIDERS} from "@angular/http";


bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), HTTP_PROVIDERS]);
