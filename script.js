/*

**Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

**NOTA**: non è importante l’ordine con cui l’utente inserisce i numeri, basta che ne indovini il più possibile.

**BONUS:**
- Inseriamo la validazione: se l’utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
- I numeri random generati devono essere univoci
Consigli del giorno:
> - Pensate prima in italiano.
> - Dividete in piccoli problemi la consegna.
> - Individuate gli elementi di cui avete bisogno per realizzare il programma.
> - Immaginate la logica come fosse uno snack: “Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array”

*LOGICA* 

1. genero 5 numeri casuali e li stampo a video
2. faccio partire il timer di 10 secondi alla rovescia
3. allo scadere del timer scompaiono i numeri e compaiono 5 input
4. una volta inseriti i 5 numeri indipendentemente dall'ordine, devo restituire un risultato che indichi quanti numeri sono stati indovinati e quali

*/


//ASSEGNO GLI ELEMENTI DEL DOM, UTILIZZO QUERYSELECTORALL IMPOSTANDO COME SELETTORE I TAG LI ED INPUT E MI CREA UN ARRAY DI CODICE HTML
const boxes = document.querySelectorAll('li')
const inputs = document.querySelectorAll('input')

const title = document.getElementById('title')
const timer = document.getElementById('timer')
const btn = document.getElementById('btnConferma')


//CREO ARRAY CON I NUMERI ESTRATTI
let arrayNumbers = []
//CREO ARRAY DOVE INSERIRO' I NUMERI INPUT DELL'UTENTE
let arrayInput = [];

// CREO CICLO CHE GENERA UN NUMERO RANDOM E LO PUSHA COME ELEMENTO NELL'ARRAY arrayNumbers
for (let i = 0; i < boxes.length; i++) {
  boxes[i].innerText = getRandomNumber(1,99);
  arrayNumbers.push(boxes[i].innerText)
}

//FACCIO PARTIRE IL TIMER DI 10 SECONDI
let seconds = 10;
timer.innerHTML = seconds--;

const clock = setInterval(function(){
  timer.innerHTML = seconds;
  if(seconds === 0) {

    //FERMO IL TIMER
    clearInterval(clock);

    //FACCIO SCOMPARIRE LE CASELLE CON I NUMERI
    for (let i = 0; i < boxes.length; i++) {
     boxes[i].classList.toggle('hide')
    }
    //FACCIO COMPARIRE I 5 INPUT ED IL BUTTON CONFERMA
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.toggle('hide')
     }
       btn.classList.toggle('hide')

    //MODIFICO IL TITOLO DELLA PAGINA HTML
    title.innerText ='Inserisci i numeri nelle caselle corrispondenti e clicca conferma!'
  }
seconds--
},1000)

//EVENTS
btn.addEventListener('click', () => {
  
  //CONFRONTO ELEMENTI ARRAY RANDOM CON ELEMENTI ARRAY INPUT, INCREMENTO IL CONTATORE PER OGNI PAROLA IN MATCH, POPOLO ARRAY RISULTATO
  let contatore = 0
  let arrayRisultato = []


  for (let i = 0; i < inputs.length - 1; i++) {
    if(arrayNumbers.includes(inputs[i].value)) {
      contatore++
      arrayRisultato.push(inputs[i].value)
    }
  }
console.log(contatore, arrayRisultato)  

})
console.log(arrayNumbers);

//FUNCTIONS

function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
  }


