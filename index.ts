import * as rl from 'readline-sync'
import { player, enemy, boss } from './characters'


console.log(`\twelcome to The Hyrule Castle\n \tDescription : You try to save the princess ZELDA\n`)
console.log(`\t`, "On this game you will confront", enemy.name, "and you will represent by your hero ", player.name, `\n`)
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

    let answer = ""
    try {
        while (!answer_possible.includes(answer = getInput("attack 🗡 or heal ❤️ ?").toLowerCase())) {
            if (answer === answer_possible[0] || answer === answer_possible[1]) {
                return answer
            } else {
                console.log("Invalid action! Please choose 'attack' or 'heal'.")
            }
        }
    } catch (error) {
        console.error("Désolé une erreur est servenue" + error)
    }
    return answer
}



function hp_flow(hp_hero: number, hp_opponent: number) {
    if (hp_opponent === 0) {
        console.log("Your opponent is died", `\n`)
        console.log("congratulation you win the round", `\n`)
    } else if (hp_hero === 0) {
        console.log("You lose, Game Over", `\n`)
    } else {
        console.log("The game will be to continue...", `\n`)
    }
}


function round(floor: number, hp_hero: number): number {
    console.log(`\t`, "Début du round", floor, `\n`)
    const max_hp = 60
    const heal: number = 30

    hp_enemy = 30


    try {

        while (hp_enemy > 0 && hp_hero > 0) {
            let answering = check_getInput()

            if (answering === answer_possible[0]) {
                hp_enemy -= str_hero
                hp_hero -= str_enemy

                console.log(`${enemy.name} Attack, his hp is ${hp_enemy} \n`)
                console.log(`You Attack, your hp is ${hp_hero}\n`)
                hp_flow(hp_hero, hp_enemy)


            } else if (answering === answer_possible[1]) {
                hp_hero = hp_hero + heal - str_enemy
                const hp = max_hp - str_enemy

                hp_hero = Math.min(hp, hp_hero)
                console.log(`${enemy.name} Attack, his hp is ${hp_enemy} \n`)
                console.log("You use heal and win", heal, "hp", "your hp is", hp_hero, `\n`)
                hp_flow(hp_hero, hp_enemy)

            }
        }
    } catch (error) {
        console.error("Désolé une erreur est servenue" + error)
    }
    return hp_hero
}

function round_with_boss(floor: number, hp_hero: number): number {
    console.log(`\t`, "final, round with the BOSS", floor, `\n`)
    const max_hp = 60
    const heal: number = 30

    hp_boss = 150

    try {

        while (hp_boss > 0 && hp_hero > 0) {
            let answering = check_getInput()

            if (answering === answer_possible[0]) {
                hp_boss -= str_hero
                hp_hero -= str_boss

                console.log(`${boss.name} Attack, his hp is ${hp_boss} \n`)
                console.log(`You Attack, your hp is ${hp_hero}\n`)
                hp_flow(hp_hero, hp_boss)


            } else if (answering === answer_possible[1]) {
                hp_hero = hp_hero + heal - str_boss
                const hp = max_hp - str_boss
                hp_hero = Math.min(hp, hp_hero)
                console.log(`${boss.name} Attack, his hp is ${hp_boss} \n`)
                console.log("You use heal and win", heal, "hp", "your hp is", hp_hero, `\n`)
                hp_flow(hp_hero, hp_boss)


            }
        }
    } catch (error) {
        console.error("Désolé une erreur est servenue" + error)
    }
    return hp_hero
}

