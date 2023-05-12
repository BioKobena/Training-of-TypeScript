function damage(characterToDamage : {life:number}, amount: number): number{
    characterToDamage.life -= amount;
    return characterToDamage.life;
}

const result = damage({life:100}, 12);
console.log(result);

type CodeSecret = string | number;

const Code1: CodeSecret = 123;
const Code2: CodeSecret = "New things to learn";

type Character = {
    name: string,
    life: number,
    attack: number,  
    defense:number,
};

type Pet = Character;
type Hero = Character & {
    pet?:Pet;
}