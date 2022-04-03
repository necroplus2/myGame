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
        }




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


      if(e.target == classKotak[bloker.h1[7]] || e.target == classKotak[bloker.h2[7]] || e.target == classKotak[bloker.h3[7]] || e.target == classKotak[bloker.h4[7]] || e.target == classKotak[bloker.h5[7]] || e.target == classKotak[bloker.h6[7]] ||e.target == classKotak[bloker.h7[7]] || e.target == classKotak[bloker.h8[7]] || e.target == classKotak[bloker.h9[7]]){
        bloker.v8.forEach(function(v){
          classKotak[v].classList.add('kotakDiagonal');
          e.target.classList.remove('kotakDiagonal');
        })
      }









      
      // for(let h in bloker) {
      //   console.log(bloker[h][i]);
      // }

      
      // if(e.target == classKotak[bloker.h1[i]]){
      //   delHor();
      //   bloker.h1.forEach(function(hh1){
      //     classKotak[hh1].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.h2[i]]){
      //   delHor();
      //   bloker.h2.forEach(function(hh2){
      //     classKotak[hh2].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.h3[i]]){
      //   delHor();
      //   bloker.h3.forEach(function(hh3){
      //     classKotak[hh3].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.h4[i]]){
      //   delHor();
      //   bloker.h4.forEach(function(hh4){
      //     classKotak[hh4].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.h5[i]]){
      //   delHor();
      //   bloker.h5.forEach(function(hh5){
      //     classKotak[hh5].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.h6[i]]){
      //   delHor();
      //   bloker.h6.forEach(function(hh6){
      //     classKotak[hh6].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.h7[i]]){
      //   delHor();
      //   bloker.h7.forEach(function(hh7){
      //     classKotak[hh7].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.h8[i]]){
      //   delHor();
      //   bloker.h8.forEach(function(hh8){
      //     classKotak[hh8].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.h9[i]]){
      //   delHor();
      //   bloker.h9.forEach(function(hh9){
      //     classKotak[hh9].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }

      // if(e.target == classKotak[bloker.v1[i]]){
      //   delHor();
      //   bloker.v1.forEach(function(vv1){
      //     classKotak[vv1].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.v2[i]]){
      //   delHor();
      //   bloker.v2.forEach(function(vv2){
      //     classKotak[vv2].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.v3[i]]){
      //   delHor();
      //   bloker.v3.forEach(function(vv3){
      //     classKotak[vv3].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.v4[i]]){
      //   delHor();
      //   bloker.v4.forEach(function(vv4){
      //     classKotak[vv4].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.v5[i]]){
      //   delHor();
      //   bloker.v5.forEach(function(vv5){
      //     classKotak[vv5].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.v6[i]]){
      //   delHor();
      //   bloker.v6.forEach(function(vv6){
      //     classKotak[vv6].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.v7[i]]){
      //   delHor();
      //   bloker.v7.forEach(function(vv7){
      //     classKotak[vv7].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.v8[i]]){
      //   delHor();
      //   bloker.v8.forEach(function(vv8){
      //     classKotak[vv8].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }else if(e.target == classKotak[bloker.v9[i]]){
      //   delHor();
      //   bloker.v9.forEach(function(vv9){
      //     classKotak[vv9].classList.add('kotakDiagonal');
      //     e.target.classList.remove('kotakDiagonal');
      //   })
      // }

      








    }

// next memasukkan syntax kotakKlik ke diagonalKlik

  });
});




















