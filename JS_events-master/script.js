//Fonctionnalité 1 1-bis
footer= document.querySelector("footer")
let count =2

footer.addEventListener("click", function(){ 
    console.log ('click')
    console.log('click number:'+count)
});

//Fonctionnalité 2
let Navbar = document.querySelector('.navbar-toggler');
let navbarHeader = document.getElementById('navbarHeader');

Navbar.addEventListener('click',function(){
    navbarHeader.classList.toggle("collapse");
  } );

  //Fonctionnalité 3
  let firstCard = document.getElementsByClassName("col-md-4")[0];
let btnEditFirstCard = firstCard.getElementsByTagName('button')[1];

btnEditFirstCard.addEventListener('click',redCard);

function redCard() {
  firstCard.style.color = 'red';
}


// Fonctionnalité n°4
let secondCard = document.getElementsByClassName("col-md-4")[1];
let btnEditSecondCard = secondCard.getElementsByTagName('button')[1];

btnEditSecondCard.addEventListener('click',greenCard);

function greenCard() {
  if(secondCard.style.color === "") {
    secondCard.style.color = 'green';
  } else {
    secondCard.style.color = '';
  }
}

// Fonctionnalité n°5

let navbar = document.getElementsByTagName('header')[0];
navbar.addEventListener('dblclick', deleteCdn);
linkCdn = document.getElementsByTagName('link')[0]

// Fonctionnalité 6 :
let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");
for (let i = 0; i < viewButtons.length; i++){
  viewButtons[i].addEventListener("mouseover" , function(){
    document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
    document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
  });
}

