function afmelden() {
    var antwoord = confirm("Wilt u zich afmelden?");
    if (antwoord == true) {
        alert("U wordt afgemeld!!");
    }
}

function begroeten() {
    var vandaag = new Date();
    var uur = vandaag.getHours();
    if (uur <= 11) {
        document.write("Goedemorgen!");
    } else if (uur >= 12 && uur <= 17) {
        document.write("Goedemiddag!");
    } else {
        document.write("Goedenavond!");
    }
}

function dollarKoers() {
    return 1.36;
}

function euroKoers() {
    return 0.74;
}

function dollar_naar_euro(inputdollars) {
    return inputdollars * euroKoers();
}

function wissel(bedrag, valuta) {
    if (valuta == "euro") {
        return bedrag * dollarKoers();
    } else if (valuta == "dollar") {
        return bedrag * euroKoers();
    }
}