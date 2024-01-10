window.onload = function() {
    let button = document.querySelector('button');
    button.onclick = calculerIMC;
}

function calculerIMC() {
    const poids = document.getElementById('poids').value;
    const taille = document.getElementById('taille').value;

    if (!poids || !taille) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    const imc = poids / Math.pow(taille, 2);
    const interpretation = getInterpretation(imc);

    document.getElementById('resultat').innerHTML = "<br><br>Votre IMC est de " + imc.toFixed(2) + "<br><br>" + interpretation;
}

function getInterpretation(imc) {
    let interpretation = "Vous êtes en état ";

    if (imc < 16.5){
        interpretation += "de dénutrition";
    }
    else if(imc >=16.5 && imc < 18.5){
        interpretation += "de maigreur";
    }

    else if(imc >=18.5 && imc < 25){
        interpretation += "de poids normal";
    }

    else if(imc >=25 && imc < 30){
        interpretation += "de surpoids";
    }
    else if(imc >=30 && imc < 35){
        interpretation += "d'obéisité modérée";
    }
    else if(imc >=35 && imc < 40){
        interpretation += "d'obéisité modérée";
    }
    else {
        interpretation += "d'obéisité morbide ou massive";
    }
    return interpretation;
}
