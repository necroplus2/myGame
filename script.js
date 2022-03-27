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

    const classKotak = document.querySelectorAll('.kotak');

    // e.target.classList.add('kotakKlik');
    // e.target.parentElement.classList.add('diagonalKlik');

    // looping i lebih kecil dari 9 berfungsi untuk memanggil iterasi dari array parentNode.childNodes[(dari 0 - 8)]
    for(let i = 0; i < 9; i++){

      // jika, parent yg di klik sama dengan anak dari grandparent yg di iterasi dan parent yg di klik memiliki class kedua yg nilainya "diagonalKlik" maka, jalankan add atau tambah class diagonalKlik di parent yg di klik
      if(e.target.parentNode == e.target.parentNode.parentNode.childNodes[i] && e.target.parentNode.classList[1] == "diagonalKlik"){
        e.target.parentNode.classList.add("diagonalKlik");

      // jika tidak, anak anak dari grandparent ada yg memiliki class kedua "diagonalKlik" maka, jalankan hapus class yg classnya bernama "diagonalKlik"
      // lalu melakukan looping untuk mengecek anak anak dari tiap parent parent untuk melakukan kondisi
      // jika, anak anak dari para parent ada yg memiliki class "kotakKlik" maka, jalankan hapus class yg classnya bernama "kotakKlik"
      }else if(e.target.parentNode.parentNode.childNodes[i].classList[1] == "diagonalKlik"){
        e.target.parentNode.parentNode.childNodes[i].classList.remove("diagonalKlik");
        for(let j = 0; j < 81; j++){
          if(classKotak[j].classList[1] == "kotakKlik" && e.target !== classKotak[j]){
            classKotak[j].classList.remove("kotakKlik");
          }
        }
      // jika tidak, yg di klik memiliki parent yg sama dari para parent maka, jalankan tambah class yg bernama "diagonalKlik"
      }else if(e.target.parentNode == e.target.parentNode.parentNode.childNodes[i]){
        e.target.parentNode.classList.add("diagonalKlik");
      }
      
      
      if(e.target.parentNode == e.target.parentNode.parentNode.children[i] && e.target.parentNode.classList[1] == "diagonalKlik"){
        e.target.parentNode.classList.add("diagonalKlik");
      }

      if(e.target == e.target.parentNode.childNodes[i] && e.target.classList[1] == "kotakKlik"){
        e.target.classList.add("kotakKlik");
      }else if(e.target.parentNode.childNodes[i].classList[1] == "kotakKlik"){
        e.target.parentNode.childNodes[i].classList.remove("kotakKlik");
      }else if(e.target == e.target.parentNode.childNodes[i]){
        e.target.classList.add("kotakKlik");
      }

      


    }

// next memasukkan syntax kotakKlik ke diagonalKlik

  });
});




















