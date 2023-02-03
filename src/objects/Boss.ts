import Monster from './Monster';

export default class Boss extends Monster {
  /**
   * this class describe the Boss
   * this class is a child of Monster
   * @param specialAttack the special attack of the boss
   */

  public specialAttack: string;

  constructor(name: string, level: number, hp: number, attack: number, magic_power: number, defense: number, magic_resistence: number, speed: number, replics: string[], specialAttack: string, is_alive: boolean, is_magical: boolean) {
    super(name, level, hp, attack, magic_power, defense, magic_resistence, speed, replics, is_alive, is_magical);
    this.specialAttack = specialAttack;
  }
}
