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
var registration_service_1 = require("./registration.service");
var RegistrationComponent = (function () {
    function RegistrationComponent(_userService) {
        // constructor
        this._userService = _userService;
    }
    RegistrationComponent.prototype.onSubmit = function () {
        this._userService.insertUser(this.newUser).subscribe(function (res) {
            console.log('print user from component ', res);
            // router.route change to your new page ...
        });
    };
    RegistrationComponent.prototype.onLogin = function () {
        var tempJSON = {
            email: 'email@email.com',
            password: ''
        };
    };
    RegistrationComponent.prototype.ngOnInit = function () {
        this.newUser = { name: '', email: "", password: "" };
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'registration',
            templateUrl: 'templates/registration.template.html',
            styleUrls: ['css/styles.css'],
            providers: [registration_service_1.RegistrationService]
        }), 
        __metadata('design:paramtypes', [registration_service_1.RegistrationService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map