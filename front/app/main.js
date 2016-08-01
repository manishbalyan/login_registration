"use strict";
/**
 * Created by consultadd on 29/7/16.
 */
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var router_deprecated_1 = require("@angular/router-deprecated");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [forms_1.disableDeprecatedForms(), forms_1.provideForms(), http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS]);
//# sourceMappingURL=main.js.map