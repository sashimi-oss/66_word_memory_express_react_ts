import { Container, inject, injectable, interfaces } from 'inversify';

interface IWeapon {
  damage: number;
}

@injectable()
class Katana implements IWeapon {
  public readonly damage: number = 10;
}

@injectable()
class Shuriken implements IWeapon {
  public readonly damage: number = 5;
}


export class LegendaryWarrior {
  constructor(
    @inject('IWeapon') public readonly weapon: IWeapon,
  ) {}

  public attack(): void {
    console.log(`Attacking with weapons that have damages: ${this.weapon.damage}`)
  }
}

const container: Container = new Container();
container.bind<IWeapon>('IWeapon').to(Shuriken).inRequestScope();
container.bind(LegendaryWarrior).toSelf();

const legendaryWarrior: LegendaryWarrior = container.get(LegendaryWarrior);

legendaryWarrior.attack();
