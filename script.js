

let nomeDoHeroi = "MaskMan";
let XpDeExperiencia = 11.000;

if (XpDeExperiencia <= 1.000) {
    console.log(`${nomeDoHeroi}, você está no nível de Ferro`);

} else if (XpDeExperiencia >= 1.001 && XpDeExperiencia <= 2.000) {
    console.log(`${nomeDoHeroi}, você está no nível de Bronze`);

} else if (XpDeExperiencia >= 2.001 && XpDeExperiencia <= 5.000) {
    console.log(`${nomeDoHeroi}, você está no nível de Prata`);

} else if (XpDeExperiencia >= 6.001 && XpDeExperiencia <= 7.000) {
    console.log(`${nomeDoHeroi}, você está no nível de Ouro`);

} else if (XpDeExperiencia >= 7.001 && XpDeExperiencia <= 8.000) {
    console.log(`${nomeDoHeroi}, você está no nível de Platina`);

} else if (XpDeExperiencia >= 8.001 && XpDeExperiencia <= 9.000) {
    console.log(`${nomeDoHeroi}, você está no nível de Ascendente`);

} else if (XpDeExperiencia >= 9.001 && XpDeExperiencia <= 10.000) {
    console.log(`${nomeDoHeroi}, você está no nível de Imortal`);

} else if (XpDeExperiencia >= 10.001 && XpDeExperiencia <= 11.000) {
    console.log(`${nomeDoHeroi}, você está no nível de Deus  da Guerra`);
} else {
    console.log(`${nomeDoHeroi} você  é apenas um iniciante, volte a treinar para aumentar sua experiência`);
}
