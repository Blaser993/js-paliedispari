console.log("Palindroma")

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no




let parolaUtente = prompt("scrivi una parola");



// QUESTO CICLO SCOMPONE LA PAROLA DELL'UTENTE IN LETTERE, OGNI LETTERA EQUIVALE ALL'INDICE DELL'ARRAY IN CUI HO TRASFORMATO LA PAROLA

const parola = []

// let parola = [parolaUtente]

for (let i = 0; i < parolaUtente.length ; i++){

    let lettera = i

    lettera = parolaUtente[i]

    console.log("questa è una lettera della parola inserita: ",lettera)  

    parola.push(lettera) 


}

// -------------------------------



// QUESTO CICLO COMPONE LA PAROLA DELL'UTENTE IN LETTERE SCRITTE AL CONTRARIO IN UN ARRAY

const parolaReverse = []


for (let i = parolaUtente.length -1 ; i >= 0 ; i--){

    let lettera = i

    console.log(lettera)

    lettera = parolaUtente[i]

    console.log("questa è una lettera della parola nuova parola: ",lettera) 

    parolaReverse.push(lettera)   
}



console.log(parola, typeof parola) //oggetto

console.log(parolaUtente, typeof parolaUtente) //stringa

console.log(parolaReverse, typeof parolaReverse) //oggetto


// CREO LA CONDIZIONE PER CUI UNA PAROLA è PALINDROMA O MENO

let parolaPalindroma = [parola] === [parolaReverse]

parolaPalindroma = true

if ([parola] != [parolaReverse]){
    parolaPalindroma = false
    console.log(parolaPalindroma)
    console.log("la parola" , parolaUtente ,  "non è palindroma")
}   else console.log("la parola" , parolaUtente ,  " è palindroma")




   
