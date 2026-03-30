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
exports.LegendaryWarrior = void 0;
const inversify_1 = require("inversify");
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
let LegendaryWarrior = class LegendaryWarrior {
    constructor(firstWeapon, secondWeapon, thirdWeapon) {
        this.firstWeapon = firstWeapon;
        this.secondWeapon = secondWeapon;
        this.thirdWeapon = thirdWeapon;
    }
};
exports.LegendaryWarrior = LegendaryWarrior;
exports.LegendaryWarrior = LegendaryWarrior = __decorate([
    __param(0, (0, inversify_1.inject)('Weapon')),
    __param(1, (0, inversify_1.inject)('Weapon')),
    __param(2, (0, inversify_1.inject)('Weapon')),
    __metadata("design:paramtypes", [Object, Object, Object])
], LegendaryWarrior);
const container = new inversify_1.Container();
container.bind('Weapon').to(Katana).inRequestScope();
container.bind(LegendaryWarrior).toSelf();
const firstKatana = container.get('Weapon');
const secondKatana = container.get('Weapon');
const legendaryWarrior = container.get(LegendaryWarrior);
// Returns false
const isSameKatana = firstKatana === secondKatana;
console.log('isSameKatana', isSameKatana);
// Returns true
const warriorHasSameKatana = legendaryWarrior.firstWeapon === legendaryWarrior.secondWeapon &&
    legendaryWarrior.secondWeapon === legendaryWarrior.thirdWeapon;
console.log('warriorHasSameKatana', warriorHasSameKatana);
console.log('legendaryWarrior.firstWeapon.damage', legendaryWarrior.firstWeapon.damage);
console.log('legendaryWarrior.secondWeapon.damage', legendaryWarrior.secondWeapon.damage);
console.log('legendaryWarrior.thirdWeapon.damage', legendaryWarrior.thirdWeapon.damage);
// // ---------------------------------------------------
// const container: Container = new Container();
// container.bind<Weapon>('Weapon').to(Katana).inSingletonScope();
// const firstKatana: Weapon = container.get<Weapon>('Weapon');
// const secondKatana: Weapon = container.get<Weapon>('Weapon');
// // Returns true
// const isSameKatana: boolean = firstKatana === secondKatana;
// // --------------------------------------------------
// const container: Container = new Container();
// container.bind<Weapon>('Weapon').to(Katana).inTransientScope();
// const firstKatana: Weapon = container.get<Weapon>('Weapon');
// const secondKatana: Weapon = container.get<Weapon>('Weapon');
// // Returns false
// const isSameKatana: boolean = firstKatana === secondKatana;
