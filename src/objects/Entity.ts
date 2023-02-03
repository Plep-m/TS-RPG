export default class Entity {
  /** this class describe the bones of an Entity
     * it can be extended to create a player, an enemy, a boss, etc.
     * @param name the name of the entity
     * @param level the level of the entity
     * @param hp the health points of the entity
     * @param attack the attack points of the entity
     * @param defense the defense points of the entity
     * @param speed the speed points of the entity
     * @returns a new Entity
     */

  public hp: number;

  public maxHp: number;

  public name: string;

  public level: number;

  public attack: number;

  public magic_power: number;

  public defense: number;

  public magic_resistance: number;

  public speed: number;

  public is_alive: boolean;

  public is_magical: boolean;

  constructor(name: string, level: number, hp: number, attack: number, magic_power: number, defense: number, magic_resistance: number, speed: number, is_alive: boolean, is_magical: boolean) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.maxHp = hp;
    this.attack = attack;
    this.magic_power = magic_power;
    this.defense = defense;
    this.magic_resistance = magic_resistance;
    this.speed = speed;
    this.is_alive = is_alive;
    this.is_magical = is_magical;
  }

  take_damage(damage: number): void {
    /**
     * this function is called when the entity take damage
     * it decrease the hp of the entity by the damage taken minus entity's defense
     * @param damage the damage taken by the entity
     */
    this.hp -= (damage - this.defense);
    if (this.hp <= 0) {
      this.is_alive = false;
    }
  }
}
