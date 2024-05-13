
/* du må både ændre koden her, og i din HTML, hvis det er nødvendigt.. */


/*Opgave 1: skriv en validering af svar i koden herunder. resultatet skal vises i myAnsverFeedbackElement når bruger trykker på myAnsverButton .
der et korrekte svar:
nej 
*/


const myAnsverInput = document.getElementById('answerOne');
const myAnsverButton = document.getElementById('answerButton');
const myAnsverFeedbackElement = document.getElementById('answerFeedback');

// myAnsverButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   /* din kode her. Skriv en alert der skriver "du har svarret rigtigt" hvis svarret er true
//   og "du har svarret forkert" hvis svaret er false*/
//   let myAnswer = myAnsverInput.options[myAnsverInput.selectedIndex].text;
//   console.log(myAnswer);
//   if (myAnswer === 'nej') {
//     alert("du har svarret rigtigt")
//   } else {
//     alert("du har svarret forkert")
//   }
// });

/*Opgave 2: udkommenter opgave 1, og omskriv nu din funktion til to korrekte svar:
nej
ja i disney film
*/

myAnsverButton.addEventListener('click', (e) => {
  e.preventDefault();
  /* din kode her. Skriv en alert der skriver "du har svarret rigtigt" hvis svarret er true
  og "du har svarret forkert" hvis svaret er false*/
  let myAnswer = myAnsverInput.value;
  console.log(myAnswer);
  if (myAnswer === 'true') {
    alert("du har svarret rigtigt")
  } else {
    alert("du har svarret forkert")
  }
});


/*opgave 3: skriv en kode der valider formen med følgende elementer: (denne opgave er på extreme niveau) 

- korrekt e-mail type. brug funktionen "validateEmail(minEmail) til at checke en string med den indtastede email
- navnet skal være længere end 3 bogstaver, med realtime validering (brug keyup til at checke, og .lengt til at finde længden)
- alder skal være større end 12.
 du må gerne bare consol.logge de forskellige tests i konsollen, men hvis du kan må du gerne lave feedback i elementet formValideringResult.
*/
const submitButton = document.getElementById('submitButton')
const formName = document.getElementById('myName')
const formEmail = document.getElementById('myEmail')
const formAge = document.getElementById('myAge')

let formNameBoo = false;
let formEmailBoo = false;
let formAgeBoo = false;

formName.addEventListener('keyup', () => {
  if(formName.value.length > 3) {
    formName.classList.add('formValidBorder')
    formName.classList.remove('formInvalidBorder')
    formNameBoo = true
  } else {
    formName.classList.remove('formValidBorder')
    formName.classList.add('formInvalidBorder')
    formNameBoo = false
  }
})

formEmail.addEventListener('keyup', () => {
  if(validateEmail(formEmail.value)) {
    formEmail.classList.add('formValidBorder')
    formEmail.classList.remove('formInvalidBorder')
    formEmailBoo = true
  } else {
    formEmail.classList.remove('formValidBorder')
    formEmail.classList.add('formInvalidBorder')
    formEmailBoo = false
  }
})

formAge.addEventListener('keyup', () => {
  if(formAge.value > 12) {
    formAge.classList.add('formValidBorder')
    formAge.classList.remove('formInvalidBorder')
    formAgeBoo = true
  } else {
    formAge.classList.remove('formValidBorder')
    formAge.classList.add('formInvalidBorder')
    formAgeBoo = false
  }
})

submitButton.addEventListener('click', () => {
  if (formNameBoo === true && formEmailBoo === true && formAgeBoo === true) {
    alert('Success')
  } else {
    alert('Missing info')
  }
})





/* helper functions*/
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/* eks på kald:
if (validateEmail("test@example.com")) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
*/
