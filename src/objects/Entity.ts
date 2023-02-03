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

  public defense: number;

  public speed: number;

  // eslint-disable-next-line max-len
  constructor(name: string, level: number, hp: number, attack: number, defense: number, speed: number) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.maxHp = hp;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
  }
}
