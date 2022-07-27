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


// Rule Game

// console.log(Math.random()*9);
kotakS = document.querySelectorAll('.kotak');
// console.log(kotakS);

for(let ktk = 0; ktk < 81; ktk++){
  // console.log(ks);
  // kotakS[ktk].innerHTML = Math.ceil(Math.random()*9);
  
  ktk1 = ktk < 9;
  ktk2 = ktk > 8 && ktk < 18;
  ktk3 = ktk > 17 && ktk < 27;
  ktk4 = ktk > 26 && ktk < 36;
  ktk5 = ktk > 35 && ktk < 45;
  ktk6 = ktk > 44 && ktk < 54;
  ktk7 = ktk > 53 && ktk < 63;
  ktk8 = ktk > 62 && ktk < 72;
  ktk9 = ktk > 71 && ktk < 81;


  if(ktk1){
    // console.log(ktk);
    kotakS[ktk].innerHTML = Math.ceil(Math.random()*9);
  }else if(ktk2){
    // console.log(ktk);
  }else if(ktk3){
    // console.log(ktk);
  }else if(ktk4){
    // console.log(ktk);
  }else if(ktk5){
    // console.log(ktk);
  }else if(ktk6){
    // console.log(ktk);
  }else if(ktk7){
    // console.log(ktk);
  }else if(ktk8){
    // console.log(ktk);
  }else if(ktk9){
    // console.log(ktk);
  }








}

// for(let ktk = 1; ktk < 81; ktk++){
//   if(ktk <= 9){
//     // console.log(ktk);
//   }else if(ktk <= 18 && ktk >= 8){
//     console.log(ktk)
//   }
// }






// eventListener click
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

      let deleteD = function (){
        for(let hhh1 = 0; hhh1 < 81; hhh1++){
          if(classKotak[hhh1].classList[0] == 'kotakDiagonal' || classKotak[hhh1].classList[1] == 'kotakDiagonal' || classKotak[hhh1].classList[2] == 'kotakDiagonal'){
            classKotak[hhh1].classList.remove('kotakDiagonal');
          }
        }
      }
    
      const bloker = {
        
        h1 : [0,1,2,9,10,11,18,19,20],
        h2 : [3,4,5,12,13,14,21,22,23],
        h3 : [6,7,8,15,16,17,24,25,26],
        h4 : [27,28,29,36,37,38,45,46,47],
        h5 : [30,31,32,39,40,41,48,49,50],
        h6 : [33,34,35,42,43,44,51,52,53],
        h7 : [54,55,56,63,64,65,72,73,74],
        h8 : [57,58,59,66,67,68,75,76,77],
        h9 : [60,61,62,69,70,71,78,79,80],
      
        v1 : [0,3,6,27,30,33,54,57,60],
        v2 : [1,4,7,28,31,34,55,58,61],
        v3 : [2,5,8,29,32,35,56,59,62],
        v4 : [9,12,15,36,39,42,63,66,69],
        v5 : [10,13,16,37,40,43,64,67,70],
        v6 : [11,14,17,38,41,44,65,68,71],
        v7 : [18,21,24,45,48,51,72,75,78],
        v8 : [19,22,25,46,49,52,73,76,79],
        v9 : [20,23,26,47,50,53,74,77,80],


        baris1 : function(){
          if(e.target == classKotak[bloker.h1[i]]){
            deleteD();
            bloker.h1.forEach(function(hh1){
              classKotak[hh1].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }
        },

        baris2 : function(){
          if(e.target == classKotak[bloker.h2[i]]){
            deleteD();
            bloker.h2.forEach(function(hh2){
              classKotak[hh2].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }  
        },

        baris3 : function(){
          if(e.target == classKotak[bloker.h3[i]]){
            deleteD();
            bloker.h3.forEach(function(hh3){
              classKotak[hh3].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }  
        },

        baris4 : function(){
          if(e.target == classKotak[bloker.h4[i]]){
            deleteD();
            bloker.h4.forEach(function(hh4){
              classKotak[hh4].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }  
        },

        baris5 : function(){
          if(e.target == classKotak[bloker.h5[i]]){
            deleteD();
            bloker.h5.forEach(function(hh5){
              classKotak[hh5].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }  
        },

        baris6 : function(){
          if(e.target == classKotak[bloker.h6[i]]){
            deleteD();
            bloker.h6.forEach(function(hh6){
              classKotak[hh6].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }  
        },

        baris7 : function(){
          if(e.target == classKotak[bloker.h7[i]]){
            deleteD();
            bloker.h7.forEach(function(hh7){
              classKotak[hh7].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }  
        },

        baris8 : function(){
          if(e.target == classKotak[bloker.h8[i]]){
            deleteD();
            bloker.h8.forEach(function(hh8){
              classKotak[hh8].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }  
        },

        baris9 : function(){
          if(e.target == classKotak[bloker.h9[i]]){
            deleteD();
            bloker.h9.forEach(function(hh9){
              classKotak[hh9].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }
        },

        kolom1 : function(){
          if(e.target == classKotak[bloker.h1[0]] || e.target == classKotak[bloker.h2[0]] || e.target == classKotak[bloker.h3[0]] || e.target == classKotak[bloker.h4[0]] || e.target == classKotak[bloker.h5[0]] || e.target == classKotak[bloker.h6[0]] ||e.target == classKotak[bloker.h7[0]] || e.target == classKotak[bloker.h8[0]] || e.target == classKotak[bloker.h9[0]]){
            bloker.v1.forEach(function(v){
              classKotak[v].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }
        },

        kolom2 : function(){
          if(e.target == classKotak[bloker.h1[1]] || e.target == classKotak[bloker.h2[1]] || e.target == classKotak[bloker.h3[1]] || e.target == classKotak[bloker.h4[1]] || e.target == classKotak[bloker.h5[1]] || e.target == classKotak[bloker.h6[1]] ||e.target == classKotak[bloker.h7[1]] || e.target == classKotak[bloker.h8[1]] || e.target == classKotak[bloker.h9[1]]){
            bloker.v2.forEach(function(v){
              classKotak[v].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }
        },

        kolom3 : function(){
          if(e.target == classKotak[bloker.h1[2]] || e.target == classKotak[bloker.h2[2]] || e.target == classKotak[bloker.h3[2]] || e.target == classKotak[bloker.h4[2]] || e.target == classKotak[bloker.h5[2]] || e.target == classKotak[bloker.h6[2]] ||e.target == classKotak[bloker.h7[2]] || e.target == classKotak[bloker.h8[2]] || e.target == classKotak[bloker.h9[2]]){
            bloker.v3.forEach(function(v){
              classKotak[v].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }
        },

        kolom4 : function(){
          if(e.target == classKotak[bloker.h1[3]] || e.target == classKotak[bloker.h2[3]] || e.target == classKotak[bloker.h3[3]] || e.target == classKotak[bloker.h4[3]] || e.target == classKotak[bloker.h5[3]] || e.target == classKotak[bloker.h6[3]] ||e.target == classKotak[bloker.h7[3]] || e.target == classKotak[bloker.h8[3]] || e.target == classKotak[bloker.h9[3]]){
            bloker.v4.forEach(function(v){
              classKotak[v].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }
        },

        kolom5 : function(){
          if(e.target == classKotak[bloker.h1[4]] || e.target == classKotak[bloker.h2[4]] || e.target == classKotak[bloker.h3[4]] || e.target == classKotak[bloker.h4[4]] || e.target == classKotak[bloker.h5[4]] || e.target == classKotak[bloker.h6[4]] ||e.target == classKotak[bloker.h7[4]] || e.target == classKotak[bloker.h8[4]] || e.target == classKotak[bloker.h9[4]]){
            bloker.v5.forEach(function(v){
              classKotak[v].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }
        },

        kolom6 : function(){
          if(e.target == classKotak[bloker.h1[5]] || e.target == classKotak[bloker.h2[5]] || e.target == classKotak[bloker.h3[5]] || e.target == classKotak[bloker.h4[5]] || e.target == classKotak[bloker.h5[5]] || e.target == classKotak[bloker.h6[5]] ||e.target == classKotak[bloker.h7[5]] || e.target == classKotak[bloker.h8[5]] || e.target == classKotak[bloker.h9[5]]){
            bloker.v6.forEach(function(v){
              classKotak[v].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }
        },

        kolom7 : function(){
          if(e.target == classKotak[bloker.h1[6]] || e.target == classKotak[bloker.h2[6]] || e.target == classKotak[bloker.h3[6]] || e.target == classKotak[bloker.h4[6]] || e.target == classKotak[bloker.h5[6]] || e.target == classKotak[bloker.h6[6]] ||e.target == classKotak[bloker.h7[6]] || e.target == classKotak[bloker.h8[6]] || e.target == classKotak[bloker.h9[6]]){
            bloker.v7.forEach(function(v){
              classKotak[v].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }
        },

        kolom8 : function(){
          if(e.target == classKotak[bloker.h1[7]] || e.target == classKotak[bloker.h2[7]] || e.target == classKotak[bloker.h3[7]] || e.target == classKotak[bloker.h4[7]] || e.target == classKotak[bloker.h5[7]] || e.target == classKotak[bloker.h6[7]] ||e.target == classKotak[bloker.h7[7]] || e.target == classKotak[bloker.h8[7]] || e.target == classKotak[bloker.h9[7]]){
            bloker.v8.forEach(function(v){
              classKotak[v].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }
        },

        kolom9 : function(){
          if(e.target == classKotak[bloker.h1[8]] || e.target == classKotak[bloker.h2[8]] || e.target == classKotak[bloker.h3[8]] || e.target == classKotak[bloker.h4[8]] || e.target == classKotak[bloker.h5[8]] || e.target == classKotak[bloker.h6[8]] ||e.target == classKotak[bloker.h7[8]] || e.target == classKotak[bloker.h8[8]] || e.target == classKotak[bloker.h9[8]]){
            bloker.v9.forEach(function(v){
              classKotak[v].classList.add('kotakDiagonal');
              e.target.classList.remove('kotakDiagonal');
            })
          }
        },



      }


      bloker.baris1();
      bloker.baris2();
      bloker.baris3();
      bloker.baris4();
      bloker.baris5();
      bloker.baris6();
      bloker.baris7();
      bloker.baris8();
      bloker.baris9();

      bloker.kolom1();
      bloker.kolom2();
      bloker.kolom3();
      bloker.kolom4();
      bloker.kolom5();
      bloker.kolom6();
      bloker.kolom7();
      bloker.kolom8();
      bloker.kolom9();


    }


  });
});















