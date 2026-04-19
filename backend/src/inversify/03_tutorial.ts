import { Container, inject, injectable, interfaces } from 'inversify';

interface Weapon {
  damage: number;
}

@injectable()
class Katana {
  public readonly damage: number = 10;
}

@injectable()
class Shuriken {
  public readonly damage: number = 5;
}


export class LegendaryWarrior {
  constructor(
    @inject('Weapon') public readonly firstWeapon: Weapon,
    @inject('Weapon') public readonly secondWeapon: Weapon,
    @inject('Weapon') public readonly thirdWeapon: Weapon,
  ) {}

  public attack(): void {
    console.log(`Attacking with weapons that have damages: ${this.firstWeapon.damage}, ${this.secondWeapon.damage}, ${this.thirdWeapon.damage}`)
  }
}

const container: Container = new Container();
container.bind<Weapon>('Weapon').to(Katana).inRequestScope();
container.bind(LegendaryWarrior).toSelf();

const firstKatana: Weapon = container.get<Weapon>('Weapon');
const secondKatana: Weapon = container.get<Weapon>('Weapon');

const legendaryWarrior: LegendaryWarrior = container.get(LegendaryWarrior);

legendaryWarrior.attack();

// // Returns false
// const isSameKatana: boolean = firstKatana === secondKatana;
// console.log('isSameKatana', isSameKatana);

// // Returns true
// const warriorHasSameKatana: boolean =
//   legendaryWarrior.firstWeapon === legendaryWarrior.secondWeapon &&
//   legendaryWarrior.secondWeapon === legendaryWarrior.thirdWeapon;
// console.log('warriorHasSameKatana', warriorHasSameKatana);

// console.log('legendaryWarrior.firstWeapon.damage', legendaryWarrior.firstWeapon.damage);
// console.log('legendaryWarrior.secondWeapon.damage', legendaryWarrior.secondWeapon.damage);
// console.log('legendaryWarrior.thirdWeapon.damage', legendaryWarrior.thirdWeapon.damage);



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