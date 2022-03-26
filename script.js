// const main = document.querySelector('.main');
// const diagonal = document.querySelector('.diagonal');
// console.log(diagonal);

// main
const main = document.createElement("div");
main.classList.add("main");

// game
const game = document.createElement("div");
game.classList.add("game");

// menu
const menu = document.createElement("div");
menu.classList.add("menu");

// appendChild after head
document.body.appendChild(main).appendChild(game);
main.appendChild(menu);

// diagonal
const diagonal = document.createElement("div");
diagonal.classList.add("diagonal");
for(let i = 0; i < 9; i++) {
  const diagonalAkm = diagonal.cloneNode(true);
  game.appendChild(diagonalAkm);

  // kotak
  const kotak = document.createElement("div");
  kotak.classList.add("kotak");
  for(let i = 0; i < 9; i++) {
    const kotakAkm = kotak.cloneNode(true);
    // kotakAkm.innerHTML = i+1;
    diagonalAkm.appendChild(kotakAkm);
  }
}


const kotakIsi = document.querySelectorAll('.kotak');

kotakIsi.forEach(function(el){
  el.addEventListener('click', function(e){
    // console.log(e.target.parentElement);

    


    // e.target.classList.add('kotakKlik');
    // e.target.parentElement.classList.add('diagonalKlik');

    for(let i = 0; i < 9; i++){



      if(e.target.parentNode == e.target.parentNode.parentNode.childNodes[i] && e.target.parentNode.classList[1] == "diagonalKlik"){
        e.target.parentNode.classList.add("diagonalKlik");
      }else if(e.target.parentNode.parentNode.childNodes[i].classList[1] == "diagonalKlik"){
        e.target.parentNode.parentNode.childNodes[i].classList.remove("diagonalKlik");
      }else if(e.target.parentNode == e.target.parentNode.parentNode.childNodes[i]){
        e.target.parentNode.classList.add("diagonalKlik");
      }
      


      if(e.target.parentNode == e.target.parentNode.parentNode.children[i] && e.target.parentNode.classList[1] == "diagonalKlik"){
        e.target.parentNode.classList.add("diagonalKlik");
      }

      if(e.target.parentNode.childNodes[i].classList[1] == "kotakKlik"){
        e.target.parentNode.childNodes[i].classList.remove("kotakKlik");
      }else if(e.target == e.target.parentNode.childNodes[i]){
        e.target.classList.add("kotakKlik");
      }
      


    }

// next memasukkan syntax kotakKlik ke diagonalKlik

  });
});




















