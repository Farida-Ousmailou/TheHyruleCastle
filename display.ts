const figlet = require('figlet');
const chalk = require('chalk');



function afficherTexteStylise(texte, options) {
    figlet(texte, options, function(err, data) {
         data = chalk.cyan(data)
        if (err) {
            console.log('Erreur lors de la génération du texte stylisé :', err);
            return;
        }
        console.log(data);
    });
}

const texte = 'Welcome to The Hyrule Castle !';

const options = {
    font: 'Slant',
    verticalLayout: 'full',
    width: 80,
};

afficherTexteStylise(texte, options);
