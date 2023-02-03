import Entity from './Entity';

export default class Boss extends Entity {
  /**
   * this class describe the Boss
   * this class is a child of Entity
   * @param replics the replics of the boss
   * @param specialAttack the special attack of the boss
  */

  // eslint-disable-next-line max-len
  constructor(name: string, level: number, hp: number, attack: number, defense: number, speed: number, public replics: string[], public specialAttack: string) {
    super(name, level, hp, attack, defense, speed);
    this.replics = replics;
    this.specialAttack = specialAttack;
  }
}
