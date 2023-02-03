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

  constructor(name: string, level: number, hp: number, attack: number, magic_power: number, defense: number, magic_resistance: number, speed: number, inventory: string[], gold: number, spells: string[], is_alive: boolean, is_magical: boolean) {
    super(name, level, hp, attack, magic_power, defense, magic_resistance, speed, is_alive, is_magical);
    this.inventory = inventory;
    this.gold = gold;
    this.spells = spells;
  }
}
