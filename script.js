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

    e.target.classList.add('kotakKlik');
    e.target.parentElement.classList.add('diagonalKlik');
    // const diagonalKlik = e.target.classList[1];
/*
    // cek yg di klik(e.target) sama atau tidak dengan anak pertama(firstChild) dari parent(parentNode) yg di klik
    if(e.target == e.target.parentNode.firstChild){
      // console.log("yes");
      // looping angka sampai 8 karena dikurangi 1(firstChild)
      for(let i = 0; i < 8; i++){
        // console.log(Array.from(e.target.parentNode.childNodes[i+1].classList)[1]);
        if(Array.from(e.target.parentNode.childNodes[i+1].classList)[1] == "kotakKlik"){
          e.target.parentNode.childNodes[i+1].classList.remove("kotakKlik");
        }
      }
    }
*/

    // console.log(e);
    for(let i = 0; i < 9; i++){
      if(e.target == e.target.parentNode.childNodes[i]){
        // console.log(e);
        
        for(let j = 0; j < 9; j++){

          // buat firstChild
          // console.log(i+j+1);
          // console.log(e.target.parentNode.childNodes[i+j+1]);
          // buat lastChild
          // console.log(i-j-1);
          // console.log(e.target.parentNode.childNodes[i-j-1]);

          console.log(i+j);

          // if(e.target == e.target.parentNode.firstChild){
          //   e.target.nextElementSibling.classList.remove("kotakKlik");  
          // }else if(Array.from(e.target.parentNode.childNodes[i-j-1].classList)[1] == "kotakKlik"){
          //   console.log(i-j-1);
          //   e.target.parentNode.childNodes[i-j-1].classList.remove("kotakKlik");
          // }else if(Array.from(e.target.parentNode.childNodes[i+j+1].classList)[1] == "kotakKlik"){
          //   console.log(i+j+1);
          //   e.target.parentNode.childNodes[i+j+1].classList.remove("kotakKlik");
          // }



        }

      }
    }






  });
});




















