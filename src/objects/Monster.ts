import Entity from './Entity';

export default class Monster extends Entity {
  /**
     * this class describe the Monster
     * this class is a child of Entity
     * @param replics the replics of the monster
     */

  public replics: string[];

  constructor(name: string, level: number, hp: number, attack: number, magic_power: number, defense: number, magic_resistence: number, speed: number, replics: string[], is_alive: boolean, is_magical: boolean) {
    super(name, level, hp, attack, magic_power, defense, magic_resistence, speed, is_alive, is_magical);
    this.replics = replics;
  }
}
