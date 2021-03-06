(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global.jn2vextab = {}),global.core));
}(this, (function (exports,core) { 'use strict';

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
        Jn2VextabService.prototype.jnToVextab = function (jnElement) {
            return { x: jnElement.x, y: jnElement.y };
        };
        Jn2VextabService.prototype.jnArrayToVextabArray = function (jnArray) {
            var a = [];
            jnArray.forEach(function (jnElement) {
                a.push({ x: jnElement.x, y: jnElement.y });
            });
            return a;
        };
        Jn2VextabService.prototype.vexTabArrayToString = function (vextabArray) {
            var a = [];
            vextabArray.forEach(function (vextabElement) {
                a.push(vextabElement.x + "/" + vextabElement.y);
            });
            return a.join(" ");
        };
        Jn2VextabService.prototype.jnArrayToVextabString = function (jnArray) {
            return this.vexTabArrayToString(this.jnArrayToVextabArray(jnArray));
        };
        Jn2VextabService = __decorate([
            core.Injectable(),
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
            core.Directive({ selector: '[jn2abc]' }),
            __metadata("design:paramtypes", [typeof (_a = typeof Jn2VextabService !== "undefined" && Jn2VextabService) === "function" ? _a : Object])
        ], Jn2VextabDirective);
        return Jn2VextabDirective;
    }());

    var Jn2VextabModule = /** @class */ (function () {
        function Jn2VextabModule() {
        }
        Jn2VextabModule = __decorate([
            core.NgModule({
                imports: [],
                exports: [Jn2VextabDirective],
                declarations: [Jn2VextabDirective],
                providers: [Jn2VextabService],
            })
        ], Jn2VextabModule);
        return Jn2VextabModule;
    }());

    exports.Jn2VextabModule = Jn2VextabModule;
    exports.Jn2VextabDirective = Jn2VextabDirective;
    exports.Jn2VextabService = Jn2VextabService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=jn2vextab.umd.js.map
