"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SunriseComponent = void 0;
var core_1 = require("@angular/core");
var SunriseComponent = /** @class */ (function () {
    function SunriseComponent() {
    }
    SunriseComponent.prototype.ngOnInit = function () {
    };
    SunriseComponent = __decorate([
        core_1.Component({
            selector: 'app-sunrise',
            templateUrl: './sunrise.component.html',
            styleUrls: ['./sunrise.component.css']
        })
    ], SunriseComponent);
    return SunriseComponent;
}());
exports.SunriseComponent = SunriseComponent;
