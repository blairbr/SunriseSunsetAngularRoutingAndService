"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
var home_component_1 = require("./home/home.component");
var sunset_component_1 = require("./sunset/sunset.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var sunrise_component_1 = require("./sunrise/sunrise.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'sunrise', component: sunrise_component_1.SunriseComponent },
    { path: 'sunset', component: sunset_component_1.SunsetComponent },
    //redirects
    { path: 'sunrise', redirectTo: '/sunrises', pathMatch: 'full' },
    { path: 'sunset', redirectTo: '/sunsets', pathMatch: 'full' },
    //** = wildcard - catch all bad routes and redirect them to the not found page
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent } //order matters
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
