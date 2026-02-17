/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore
*/

console.log(Object);


const bici_da_corsa=[{
    nome:"specialissima RC",
    unita_di_misura:"kg",
    weight:7 
},
{
    nome:"aria",
    unita_di_misura:"kg",
    weight:8
},
{
    nome:"dogma F",
    unita_di_misura:"kg",
    weight:1
},
{
    nome:"F7",
    unita_di_misura:"kg",
    weight:8
},
{
    nome:"F1",
    unita_di_misura:"kg",
    weight:9
},
{
    nome:"V4Rs",
    unita_di_misura:"kg",
    weight:1
},
{
    nome:"S-Works Tarmac SL8",
    unita_di_misura:"kg",
    weight:7
},
{
    nome:"S-Works Aethos 2",
    unita_di_misura:"kg",
    weight:6
},
{
    nome:"R5",
    unita_di_misura:"kg",
    weight:7
},
{
    nome:"Addict RC Ultimate",
    unita_di_misura:"kg",
    weight:6
},
{
    nome:"Addict RC 40",
    unita_di_misura:"kg",
    weight:8
}
]

const light_bike=[]

for (let i = 0; i < bici_da_corsa.length; i++) {
    const bike = bici_da_corsa[i];
    console.log(bike.weight);
    if (bike.weight <= 6) {
        light_bike.push(bike)
        console.log(light_bike);
    } 
};

console.log("bici leggere trovate:",light_bike);
