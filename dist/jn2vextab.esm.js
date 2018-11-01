import { Injectable, Directive, NgModule } from '@angular/core';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var Jn2VextabService = /** @class */ (function () {
    function Jn2VextabService() {
    }
    Jn2VextabService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], Jn2VextabService);
    return Jn2VextabService;
}());

var Jn2VextabDirective = /** @class */ (function () {
    function Jn2VextabDirective(jn2VextabService) {
        this.jn2VextabService = jn2VextabService;
    }
    var _a;
    Jn2VextabDirective = __decorate([
        Directive({ selector: '[jn2abc]' }),
        __metadata("design:paramtypes", [typeof (_a = typeof Jn2VextabService !== "undefined" && Jn2VextabService) === "function" ? _a : Object])
    ], Jn2VextabDirective);
    return Jn2VextabDirective;
}());

var Jn2VextabModule = /** @class */ (function () {
    function Jn2VextabModule() {
    }
    Jn2VextabModule = __decorate([
        NgModule({
            imports: [],
            exports: [Jn2VextabDirective],
            declarations: [Jn2VextabDirective],
            providers: [Jn2VextabService],
        })
    ], Jn2VextabModule);
    return Jn2VextabModule;
}());

export { Jn2VextabModule, Jn2VextabDirective, Jn2VextabService };
//# sourceMappingURL=jn2vextab.esm.js.map
