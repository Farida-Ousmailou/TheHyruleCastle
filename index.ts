import * as rl from 'readline-sync'
import { player, enemy, boss } from './characters'


console.log(`\twelcome to The Hyrule Castle\n \tDescription : You try to save the princess ZELDA\n`)
console.log(`\t`, "On this game you will confront", enemy.name,"and you will represent by your hero ",playeur.name, `\n`)
console.log(`\t Good luck \n`)
console.log(`~~~~~~~~~~You have to choose between the both options~~~~~~~~~~~\n`)

const getInput = (question: string) => rl.question(`${question}\n`)
const answer_possible = ["attack", "heal"]
const nb_floors = 10 


let hp_hero = player.hp
let hp_enemy = enemy.hp
let hp_boss = boss.hp

let str_hero = player.str
let str_enemy = enemy.str
let str_boss = boss.str

function check_getInput() {

    let answer = " "
        try {
            while(answer_possible.includes(answer = getInput("attack 🗡 or heal ❤️ ?").toLowerCase())) {
                if (answer === answer_possible[0] || answer === answer_possible[1]) {
                    return answer
                } else {
                    console.log("Invalid action! Please choose 'attack' or 'heal'.")
            }
        } 
    } catch (error) {
            console.error("Désolé une erreur est servenue" + error)
        }
    }
