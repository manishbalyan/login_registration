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
 * Created by consultadd on 1/8/16.
 */
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    LoginService.prototype.login = function (luser) {
        var headers = new http_1.Headers();
        var body = JSON.stringify(luser);
        headers.append('Content-Type', 'application/json');
        // Promise.resolve(USER).then((users: User[])=>users.push(user)user);
        // return this._http.post('http://127.0.0.1:8000/user',JSON.stringify(user))
        return this._http.post('http://127.0.0.1:8000/login/', body, { headers: headers }).map(function (res) {
        });
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map