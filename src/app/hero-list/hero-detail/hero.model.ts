export class Hero {
  public name;
  public intelligence;
  public strength;
  public speed;
  public durability;
  public power;
  public combat;
  public image;

  constructor(name: string, intelligence: number, strength: number,
              speed: number, durability: number, power: number, combat: number,
              image: string) {
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.speed = speed;
    this.durability = durability;
    this.power = power;
    this.combat = combat;
    this.image = image;
  }
}
