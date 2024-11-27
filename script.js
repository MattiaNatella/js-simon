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

const title = document.getElementById('title')
const timer = document.getElementById('timer')
const btn = document.getElementById('btnConferma')
const evidence = document.getElementById('evidence')

//BONUS ----- DICHIARO ARRAY CUI ASSOCIO RETURN NUMERI RANDOM UNIVOCI(ARRAY) GENERATO TRAMITE FUNZIONE APPOSITA
let arrayNumbers = getUniqueRandomNumber(1,99,5)
console.log('Array numeri generati randomicamente', arrayNumbers);

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

  
  // ASSEGNO AD UN ARRAY I VALORI DI INPUTS
  let arrayInputs = []

  for (let i = 0; i < inputs.length; i++) {
  arrayInputs.push(parseInt(inputs[i].value))
}
  console.log('Array numeri generati da input', arrayInputs)

  //CONFRONTO ELEMENTI ARRAY RANDOM CON ELEMENTI ARRAY INPUT, INCREMENTO IL CONTATORE PER OGNI PAROLA IN MATCH, POPOLO ARRAY RISULTATO
  let contatore = 0
  let arrayRisultato = []

  for (let i = 0; i < arrayInputs.length - 1; i++) {
    if(arrayNumbers.includes(arrayInputs[i])) {
      contatore++;
      arrayRisultato.push(arrayInputs[i]);
    }
  }
console.log(contatore, arrayRisultato)  

//MOSTRO MESSAGGIO IN BASE AL RISULTATO
if(contatore > 0 && contatore < 5){
  evidence.innerText = `Hai indovinato ${contatore} numeri su 5! ecco quali ${arrayRisultato}`
} else if (contatore === 0) {
  evidence.innerText = 'GAME OVER'
} else if (contatore === 5) {
  evidence.innerText = `Perbacco! hai indovinato tutti i numeri! BRAVO!!`
}

evidence.classList.toggle('hide')

})




//FUNCTIONS

//GENERO NUMERI RANDOM
function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
  }

//GENERO ARRAY RANDOM UNIVOCI E RESTITUISCO UN ARRAY
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


  /* validità
  const userGuesses = []

    for (let i = 0; i < inputs.length; i++) {
    //prendo ogni valore singolo di field
    const field = inputs[i]
    //mi assicuro che sia un numero
    const value = parseInt(field.value)

    //validazione dati inseriti:

    /*
      se il valore è numerico
      se è compreso fra min e max
      se non è già stato inserito


      if(!isNaN(value) && value >= min && value <= max && !userGuesses.includes(value)) {
      userGuesses}

    //validazione il gioco funziona solo se ho inserito i dati corretti, solo se la lungheza dell'array dei numeri giocati è uguale al totale dei numeri da giocare

      if(userGuesses.lenght !== boxes.length){
      messageElement.classlist.add('text-danger');
      messageElement.innerHTML = 'attenzione! inserire 5 numeri corretti e senza duplicarli'
      return (così blocco la funzione);
      }

    // a questo punto del codice i numeri sono validi

      const correctAnswers = [];
      for(let i = 0; i < userGuesses.length; i++) {
      const guess = userGuesses[i];
        if(numbers.includes(guess)) correctAnswers.push(guess)
      }
        */