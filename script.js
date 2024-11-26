/*
*LOGICA* 

1. genero 5 numeri casuali e li stampo a video
2. faccio partire il timer di 10 secondi alla rovescia
3. allo scadere del timer scompaiono i numeri e compaiono 5 input
4. una volta inseriti i 5 numeri indipendentemente dall'ordine, devo restituire un risultato che indichi quanti numeri sono stati indovinati e quali
*/


//ASSEGNO GLI ELEMENTI DEL DOM, UTILIZZO QUERYSELECTORALL IMPOSTANDO COME SELETTORE I TAG LI ED INPUT E MI CREA UN ARRAY DI CODICE HTML
const boxes = document.querySelectorAll('li')
const inputs = document.querySelectorAll('input')

console.log(boxes, inputs);


const title = document.getElementById('title')
const timer = document.getElementById('timer')
const btn = document.getElementById('btnConferma')
const evidence = document.getElementById('evidence')

//BONUS ----- DICHIARO ARRAY CUI ASSOCIO RETURN NUMERI RANDOM UNIVOCI(ARRAY) GENERATO TRAMITE FUNZIONE APPOSITA
let arrayNumbers = getUniqueRandomNumber(1,99,5)

// ASSEGNO ALL'INNERTEXT DI OGNI ELEMENTO DEL NODELIST BOXES
 for (let i = 0; i < boxes.length; i++) {
   boxes[i].innerText = arrayNumbers[i]
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

//GENERO NUMERI RANDOM
function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
  }

//GENERO NUMERI RANDOM UNIVOCI E RESTITUISCO UN ARRAY

function getUniqueRandomNumber(min,max,quanti) {
  let UniqueArray = []
  let randomNumber = 0
  while (UniqueArray.length < quanti) {
    randomNumber = getRandomNumber(min,max)
    if(!(UniqueArray.includes(randomNumber))){
      UniqueArray.push(randomNumber)
    }
  }
  return UniqueArray
  }

