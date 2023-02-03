import Entity from './Entity';

export default class Monster extends Entity {
  /**
     * this class describe the Monster
     * this class is a child of Entity
     * @param replics the replics of the monster
     */

  // eslint-disable-next-line max-len
  constructor(name: string, level: number, hp: number, attack: number, defense: number, speed: number, public replics: string[]) {
    super(name, level, hp, attack, defense, speed);
    this.replics = replics;
  }
}
