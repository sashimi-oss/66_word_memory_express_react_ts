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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const ninjaServiceId = Symbol.for('NinjaServiceId');
const weaponServiceId = Symbol.for('WeaponServiceId');
let Katana = class Katana {
    constructor() {
        this.damage = 10;
    }
};
Katana = __decorate([
    (0, inversify_1.injectable)()
], Katana);
let Shuriken = class Shuriken {
    constructor() {
        this.damage = 5;
    }
};
Shuriken = __decorate([
    (0, inversify_1.injectable)()
], Shuriken);
let Ninja = class Ninja {
    constructor(weapon) {
        this.weapon = weapon;
    }
};
Ninja = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(weaponServiceId)),
    __metadata("design:paramtypes", [Object])
], Ninja);
const container = new inversify_1.Container();
container.bind(ninjaServiceId).to(Ninja);
container.bind(weaponServiceId).to(Shuriken);
const ninja = container.get(ninjaServiceId);
console.log(ninja.weapon.damage);
