let sozlar = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];

let nBorSozlar = [];
let nYoqSozlar = [];

for (let i = 0; i < sozlar.length; i++) {
    let soz = sozlar[i];
    let nBormi = false;

    for (let j = 0; j < soz.length; j++) {
        if (soz[j].toLowerCase() === 'n') {
            nBormi = true;
            break;
        }
    }

    if (nBormi) {
        nBorSozlar.push(soz);
    } else {
        nYoqSozlar.push(soz);
    }
}

console.log(nBorSozlar, "'n' harfi ishtirok etgan so'zlar");
console.log(nYoqSozlar, "'n' harfi ishtirok etmagan so'zlar");