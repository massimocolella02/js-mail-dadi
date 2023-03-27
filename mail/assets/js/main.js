//Array email presenti.
let email = [
    "massimocolella@libero.it",
    "massimocolella2@libero.it",
    "massimocolella3@libero.it",
    "massimocolella4@libero.it"
]

function submit(){

    //Variabili
    let emailUtente = document.querySelector('#emailUtente').value;
    let soldatino = false
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  

    //Controllo email valida
     if (!filter.test(emailUtente)) {  
        alert('Immetti un indirizzo email valido');  
        email.focus;  
        return false;  
    }  

    //Controllo mail se è nell'array con testo annesso
    for( let i=0; i< email.length; i++ ){
        if( email[i] == emailUtente ){
            soldatino = true
        }
    }
    if(soldatino){
        document.querySelector('#email-result').innerHTML= `${emailUtente} esiste</div>`
    } else{
        document.querySelector("#email-result").innerHTML= `${emailUtente} non esiste</div>`
    }
}