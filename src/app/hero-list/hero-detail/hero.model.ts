export class Hero {
  public name: string;
	public id: number;
  public intelligence: number;
  public strength: number;
  public speed: number;
  public durability: number;
  public power: number;
  public combat: number;
  public image: string;

  constructor(name: string, id: number, intelligence: number, strength: number,
              speed: number, durability: number, power: number, combat: number,
              image: string) {
    this.name = name;
		this.id = id;
    this.strength = strength;
    this.intelligence = intelligence;
    this.speed = speed;
    this.durability = durability;
    this.power = power;
    this.combat = combat;
    this.image = image;
  }
}
