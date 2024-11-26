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


//DICHIARO GLI ELEMENTI DEL DOM
const box1 = document.getElementById('casella1')
const box2 = document.getElementById('casella2')
const box3 = document.getElementById('casella3')
const box4 = document.getElementById('casella4')
const box5 = document.getElementById('casella5')

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')
const input5 = document.getElementById('input5')

const title = document.getElementById('title')
const timer = document.getElementById('timer')
const btn = document.getElementById('btnConferma')


//ASSEGNO UN VALORE RANDOM AGLI ELEMENTI DEL DOM
box1.innerText = getRandomNumber(1,99)
box2.innerText = getRandomNumber(1,99)
box3.innerText = getRandomNumber(1,99)
box4.innerText = getRandomNumber(1,99)
box5.innerText = getRandomNumber(1,99)

//CREO ARRAY CON I NUMERI ESTRATTI
let arrayNumbers = [box1.innerText, box2.innerText,box3.innerText,box4.innerText,box5.innerText]

//CREO ARRAY DOVE INSERIRO' I NUMERI INPUT DELL'UTENTE
let arrayInput = [];

//FACCIO PARTIRE IL TIMER DI 10 SECONDI
let seconds = 10;
timer.innerHTML = seconds--;

const clock = setInterval(function(){
  timer.innerHTML = seconds;
  if(seconds === 0) {

    //FERMO IL TIMER
    clearInterval(clock);

    //FACCIO SCOMPARIRE LE CASELLE CON I NUMERI
    box1.classList.toggle('hide')
    box2.classList.toggle('hide')
    box3.classList.toggle('hide')
    box4.classList.toggle('hide')
    box5.classList.toggle('hide')

    //FACCIO COMPARIRE I 5 INPUT ED IL BUTTON CONFERMA
    input1.classList.toggle('hide')
    input2.classList.toggle('hide')
    input3.classList.toggle('hide')
    input4.classList.toggle('hide')
    input5.classList.toggle('hide')
    btn.classList.toggle('hide')

    //MODIFICO IL TITOLO DELLA PAGINA HTML
    title.innerText ='Inserisci i numeri nelle caselle corrispondenti e clicca conferma!'
  }
seconds--
},1000)



//EVENTS


//FUNCTIONS

function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
  }


