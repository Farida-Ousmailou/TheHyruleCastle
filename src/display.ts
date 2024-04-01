import chalk from "chalk"
import figlet  from "figlet"


export const logger = async(text : string) => {
    await figlet(
        text, 
        {
        font: 'Slant',   
        verticalLayout: 'full',
        width: 80,
       }, 
    function(err, data) {
         data = chalk.cyan(data)
        if (err) {
            console.log('Erreur lors de la génération du texte stylisé :', err);
            return;
        }
        console.log(data);
    });
}

export const welcomeToGame  =  async()=>logger("welcome to The Hyrule Castle")
export function description(player,enemy) {
console.log(`\tDescription : You try to save the princess ZELDA\n`)
console.log(`\t`, "On this game you will confront", enemy.name, "and you will represent by your hero ", player.name, `\n`)
console.log(`\t Good luck \n`)
console.log(`~~~~~~~~~~You have to choose between the both options~~~~~~~~~~~\n`)
    
}
