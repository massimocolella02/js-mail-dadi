//Array email presenti.
let email = [
    "massimocolella@libero.it",
    "massimocolella2@libero.it",
    "massimocolella3@libero.it",
    "massimocolella4@libero.it"
]

//Al click del bottone controlla se la mail è nell'array e scrivi un messaggio appropriato
function submit(){
    let emailUtente = document.querySelector('#emailUtente').value;
    let soldatino = false

    for( let i=0; i< email.length; i++ ){
        if( email[i] == emailUtente ){
            soldatino = true
        }
    }
    if(soldatino){
        document.querySelector('.container').innerHTML+= `<div class="text-danger">${emailUtente} esiste</div>`
    } else{
        document.querySelector('.container').innerHTML+= `<div class="text-danger">${emailUtente} non esiste</div>`
    }
}