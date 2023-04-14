# Vue Todolist

## Consegna

**Descrizione:**

Rifare l’esercizio della to do list. Ogni todo sarà un oggetto, formato da due proprietà:

  - `text`, una stringa che indica il testo del todo
  
  - `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no

**MILESTONE 1**

Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.

**MILESTONE 2**

Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

**MILESTONE 3**

Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

**Bonus:**

1. Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

2. Cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se `done` era uguale a `false`, impostare `true` e viceversa)

---

## Steps

**Steps Milestone 1:**

1. Creare il markup

2. Importare Vue

3. All'interno del return del data() creare un array di oggetti conteneti:

  - `text`: titolo della task

  - `done`: variabile booleana che indica se la task è stata fatta o no

4. Stampare dinamicamente le task nell'html

5. Al click dell'`li` cambia la classe done in true e viene assegnata una classe che aggiunge la linea che attraversa il testo

**Steps Milestone 2:**

1. All'interno dell'li aggiungo un fontawesome che quando sarà cliccato eliminerà la task. Per far ciò utilizzo click.stop per inibire il funzionamento del click che agisce sull'li; il click.stop invoca una funzione che:

    - Ha in ingresso l'indice e la proprietà done dell'oggetto

    - Controlla se done è vero o falso:

      - Nel caso in cui sia vero allora elimina tramite l'uso dello `splice` l'oggetto avente l'indice che la funzione ha ricevuto in ingresso

      - Nel caso in cui sia falsa invoca una funzione che mostra un messaggio di errore, passando in ingresso una stringa; questa funzione è così strutturata:

        - Salva la stringa in ingresso in una variabile chiamata `errorMsg`

        - Assegna il valore della stringa alla proprietà dell'oggetto in `return` di `data()` chiamata `message`

        - Dopo 5 secondi, tramite l'utilizzo di un setTimeout resetta message

**Steps Milestone 3:**

1. Creare un campo di imput type="text" ed un button

2. Al click del bottone invoco una funzione che tramite l'uso del v-model crei un nuovo oggetto

3. L'oggetto verrà poi pushato nell'array di oggetti tramite l'uso dell'unshift; ciò avviene se quello che è scritto nell'imput abbia 5 caratteri o più

**Steps Bonus:**

1. Nel tag imput aggiungo @keyup.enter ed invoco la stessa funzione usata precedentemente per il bottone

2. Al click dell'li inverto il valore di done scrivendo @click="task.done = !task.done"