console.log("Palindroma")

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no


function palindroma (parolaUtente) {

    const parolaPalindroma = parolaUtente === reverseParola
    
    console.log("la parola" , parolaUtente ,  "è palindroma")
}







let parolaUtente = prompt("scrivi una parola");



// QUESTO CICLO SCOMPONE LA PAROLA DELL'UTENTE IN LETTERE, OGNI LETTERA EQUIVALE ALL'INDICE DELL'ARRAY IN CUI HO TRASFORMATO LA PAROLA



let parola = [parolaUtente]

for (let i = 0; i < parolaUtente.length ; i++){

    let lettera = i

    lettera = parolaUtente[i]

    console.log("questa è una lettera della parola inserita: ",lettera)  


}

// -------------------------------


const parolaReverse = []


for (let i = parolaUtente.length -1 ; i < 0 ; i--){

    let lettera = i

    console.log(lettera)

    lettera = parolaUtente[i]

    console.log("questa è una lettera della parola nuova parola: ",lettera) 

     parolaReverse.push(lettera)   
}










console.log(parolaReverse)



