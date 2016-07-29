"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by consultadd on 29/7/16.
 */
var core_1 = require('@angular/core');
var registration_component_1 = require("./registration.component");
var login_component_1 = require("./login.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1 id=\"main-heading\">Login and Registration </h1>       \n                <div class=\"row\">\n                    <div class=\"col-lg-6\">\n                        <registration></registration>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <login></login>\n                    </div>\n                </div>        \n    ",
            styleUrls: ['css/styles.css'],
            directives: [registration_component_1.RegistrationComponent, login_component_1.LoginComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map