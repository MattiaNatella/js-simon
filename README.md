Simon Says
===

Esercizio di oggi: **Simon Says**

nome repo: `js-simon`

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