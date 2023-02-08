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


let parola = [parolaUtente]


for (let i = 0; i < parolaUtente.length ; i++){

    let lettera = i

    lettera = parolaUtente[i]

    console.log("questa è la lettera della parola inserita: ",lettera)  
}





