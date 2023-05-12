function damage(characterToDamage, amount) {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
var result = damage({ life: 100 }, 12);
console.log(result);
var Code1 = 123;
var Code2 = "New things to learn";
