import Entity from './Entity';

export default class Player extends Entity {
  /**
     * this class describe the Player
     * this class is a child of Entity
     * @param inventory the inventory of the player
     * @param gold the gold of the player
     * @param spells the spells of the player
     */

  public inventory: string[];

  public gold: number;

  public spells: string[];

  // eslint-disable-next-line max-len
  constructor(name: string, level: number, hp: number, attack: number, defense: number, speed: number, inventory: string[], gold: number, spells: string[]) {
    super(name, level, hp, attack, defense, speed);
    this.inventory = inventory;
    this.gold = gold;
    this.spells = spells;
  }
}
