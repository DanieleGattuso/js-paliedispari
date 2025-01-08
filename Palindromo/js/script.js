

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


function parolaInvertita(inversa) {

    return inversa.split("").reverse().join("");
    
}

function palindromo(pU, pF) {

    return pU === pF
    
}





let parolaUtente = prompt("Inserisci una parola e vediamo se è palindroma!");
let parolaFinale = parolaInvertita(parolaUtente);





if (!palindromo(parolaUtente, parolaFinale)){

    console.log("La parola non è palindroma");
    

}else {
    console.log("La parola è palindroma");
    
}


