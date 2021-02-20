var boitevitesse

var formulaire = document.querySelector(".formulaire");



function myliste() {

    var i = formulaire.vehicule.selectedIndex;

    for (j = 1; j < 5; j++) formulaire.carburant.options[j].text = "";



    if (i == 0) {
        for (j = 1; j < 4; j++) formulaire.carburant.options[j].text = "";

    } else {
        switch (i) {
            case 1:
                var v = new Array("Electrique", "Essence");
                boitevitesse = 0;

                break;

            case 2:
                var v = new Array("Hybride", "Essence", "Diesel");
                boitevitesse = 0;
                break;
            case 3:
                var v = new Array("Electrique", "Hybride", "Essence", "Diesel");
                boitevitesse = 0;
                break;
            case 4:
                var v = new Array("Hybride", "Essence", "Diesel");
                boitevitesse = 0.19;
                break;
            case 5:
                var v = new Array("Diesel");
                boitevitesse = 0;
                break;
            case 6:
                var v = new Array("Essence", "Diesel");
                boitevitesse = 0;
                break;
            case 7:
                var v = new Array("Diesel");
                boitevitesse = 0.19;
                break;

        }

        for (k = 0; k < v.length; k++)
            formulaire.carburant.options[k + 1].text = v[k];
    }


}


function calcule() {
    var i = formulaire.vehicule.selectedIndex;
    var tarifcarburant, tarif;
    var jour = Number(document.querySelector(".jours").value);

    switch (i) {

        case 1:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 10;
            if (p == 1) {
                tarifcarburant = 0.05;

            } else {
                tarifcarburant = 0.14;

            }
            break;

        case 2:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 14;
            if (p == 1) {
                tarifcarburant = 0.09;

            } else if (p == 2) {
                tarifcarburant = 0.14;
            } else {
                tarifcarburant = 0.21;
            }
            break;

        case 3:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 12;
            if (p == 1) {
                tarifcarburant = 0.05;

            } else if (p == 2) {
                tarifcarburant = 0.09;
            } else {
                tarifcarburant = 0.14;
            }
            break;

        case 4:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 20;
            if (p == 1) {
                tarifcarburant = 0.09;

            } else if (p == 2) {
                tarifcarburant = 0.14;
            } else {
                tarifcarburant = 0.21;
            }
            break;

        case 5:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 16;
            tarifcarburant = 0.21;

            break;
        case 6:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 900;
            if (p == 1) {
                tarifcarburant = 0.14;
            } else {
                tarifcarburant = 0.21;
            }
            break;

        case 7:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 250;
            tarifcarburant = 0.21;

            break;

    }

    prixTotal = ((boitevitesse + tarifcarburant) * tarif + tarif) * jour;
    document.querySelector("#test").innerHTML = "le prix est :" + "  " + prixTotal + "   " + "$";
}