function gioca(){
    //variabili numeri casuali
    let number_Player = Math.floor(Math.random() * 6) + 1;
    let number_Computer = Math.floor(Math.random() * 6) + 1;

    document.querySelector('#numeroGiocatore').innerHTML = `Il tuo numero è: ${number_Player}`
    document.querySelector('#numeroComputer').innerHTML = `Il numero del computer è: ${number_Computer}`

    //Logica per trovare un vincitore
    if( number_Player > number_Computer ){
        document.querySelector('#vincitore').innerHTML= `Hai vinto tu con il numero ${number_Player}!!!!!`
    } else if( number_Player < number_Computer ){
        document.querySelector('#vincitore').innerHTML= `Ha vinto il computer con il numero ${number_Player}`
    } else{
        document.querySelector('#vincitore').innerHTML= `Non c'è un vincitore, parità`
    }
}