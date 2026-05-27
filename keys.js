
// from w3Schools: (take inspiration ig)

const keys = document.querySelectorAll('.keys');
const whiteKeys = [a,s,d,f,g,h,j];
const blackKeys = [w,e,t,y,u];

keyboard = [
  {
    tast: "a",
    note: "C",
    lyd: "keys/C.mp3"
  } ,

  {
    tast: "w",
    note: "Db",
    lyd: "keys/Db.mp3"
  } ,

  {
    tast: "s",
    note: "D",
    lyd: "keys/D.mp3"
  } ,

  {
    tast: "e",
    note: "Eb",
    lyd: "keys/Eb.mp3"
  } ,

  {
    tast: "d",
    note: "E",
    lyd: "keys/E.mp3"
  } ,

  {
    tast: "f",
    note: "F",
    lyd: "keys/F.mp3"
  } ,

  {
    tast: "t",
    note: "Gb",
    lyd: "keys/Gb.mp3"
  } ,

  {
    tast: "g",
    note: "G",
    lyd: "keys/G.mp3"
  } ,

  {
    tast: "y",
    note: "Ab",
    lyd: "keys/Ab.mp3"
  } ,

  {
    tast: "h",
    note: "A",
    lyd: "keys/A.mp3"
  } , 

  {
    tast: "u",
    note: "Bb",
    lyd: "keys/Bb.mp3"
  } ,

  {
    tast: "j",
    note: "B",
    lyd: "keys/B.mp3"
  }
];

keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    const dataKey = key.getAttribute('data-key');

    const clickedKey = e.target.dataset.key;
    console.log(clickedKey);
  });

document.addEventListener('keydown', (event) => {
  keyboard.forEach(key => {
    if (event.key == key.tast) {
      const note = new Audio(key.lyd);
      note.play();
      document.getElementById(key.tast).style.opacity = "50%"
      document.getElementById(key.tast).style.transition = "0.5s"
      console.log(key.note);
}

document.addEventListener('keyup', (event) => {
  keyboard.forEach(key => {
    if (event.key == key.tast) {
      document.getElementById(key.tast).style.opacity = "100%"
      document.getElementById(key.tast).style.transition = "0.5s"
    }
  })

});


});

});

});
    
// ![27/5/26] fra StackOverflow

let volume = document.getElementById('vol');
volume.addEventListener("change", function(e) {
  audio.volume = e.currentTarget.value / 100;
})


//   document.addEventListener('keydown', (event) => {
//     if (event.key == "a") {
//       console.log("a");
//       const C = new Audio('keys/C.mp3');
//       C.play();
//       document.getElementById('a').style.opacity = "50%"
//       document.getElementById('a').style.transition = "0.5s"

//     } else if (event.key == "w") {
//       console.log("w");
//       const Db = new Audio('keys/Db.mp3');
//       Db.play();
//       document.getElementById('w').style.opacity = "80%"
//       document.getElementById('w').style.transition = "0.5s"

//     } else if (event.key == "s") {
//       console.log("s");
//       const D = new Audio('keys/D.mp3');
//       D.play();
//       document.getElementById('s').style.opacity = "50%"
//       document.getElementById('s').style.transition = "0.5s"

//     } else if (event.key == "e") {
//       console.log("e");
//       const Eb = new Audio('keys/Eb.mp3');
//       Eb.play();
//       document.getElementById('e').style.opacity = "80%"
//       document.getElementById('e').style.transition = "0.5s"

//     } else if (event.key == "d") {
//       console.log("d");
//       const E = new Audio('keys/E.mp3');
//       E.play();
//       document.getElementById('d').style.opacity = "50%"
//       document.getElementById('d').style.transition = "0.5s"

//     } else if (event.key == "f") {
//       console.log("f");
//       const F = new Audio('keys/F.mp3');
//       F.play();
//       document.getElementById('f').style.opacity = "50%"
//       document.getElementById('f').style.transition = "0.5s"

//     } else if (event.key == "t") {
//       console.log("t");
//       const Gb = new Audio('keys/Gb.mp3');
//       Gb.play();
//       document.getElementById('t').style.opacity = "80%"
//       document.getElementById('t').style.transition = "0.5s"

//     } else if (event.key == "g") {
//       console.log("g");
//       const G = new Audio('keys/G.mp3');
//       G.play();
//       document.getElementById('g').style.opacity = "50%"
//       document.getElementById('g').style.transition = "0.5s"

//     } else if (event.key == "y") {
//       console.log("y");
//       const Ab = new Audio('keys/Ab.mp3');
//       Ab.play();
//       document.getElementById('y').style.opacity = "80%"
//       document.getElementById('y').style.transition = "0.5s"

//     } else if (event.key == "h") {
//       console.log("h");
//       const A = new Audio('keys/A.mp3');
//       A.play();
//       document.getElementById('h').style.opacity = "50%"
//       document.getElementById('h').style.transition = "0.5s"

//     } else if (event.key == "u") {
//       console.log("u");
//       const Bb = new Audio('keys/Bb.mp3');
//       Bb.play();
//       document.getElementById('u').style.opacity = "80%"
//       document.getElementById('u').style.transition = "0.5s"

//     } else if (event.key == "j") {
//       console.log("j");
//       const B = new Audio('keys/B.mp3');
//       B.play();
//       document.getElementById('j').style.opacity = "50%"
//       document.getElementById('j').style.transition = "0.5s"

//     }
//   })

// });

// document.addEventListener('keyup', (event) => {
//   if (event.key == "a") {
//     console.log("a");
//     document.getElementById('a').style.opacity = "100%"
//     document.getElementById('a').style.transition = "0.5s"


//   } else if (event.key == "w") {
//     console.log("w");
//     document.getElementById('w').style.opacity = "100%"
//     document.getElementById('w').style.transition = "0.5s"

//   } else if (event.key == "s") {
//     console.log("s");
//     document.getElementById('s').style.opacity = "100%"
//     document.getElementById('s').style.transition = "0.5s"

//   } else if (event.key == "e") {
//     console.log("e");
//     document.getElementById('e').style.opacity = "100%"
//     document.getElementById('e').style.transition = "0.5s"

//   } else if (event.key == "d") {
//     console.log("d");
//     document.getElementById('d').style.opacity = "100%"
//     document.getElementById('d').style.transition = "0.5s"

//   } else if (event.key == "f") {
//     console.log("f");
//     document.getElementById('f').style.opacity = "100%"
//     document.getElementById('f').style.transition = "0.5s"

//   } else if (event.key == "t") {
//     console.log("t");
//     document.getElementById('t').style.opacity = "100%"
//     document.getElementById('t').style.transition = "0.5s"

//   } else if (event.key == "g") {
//     console.log("g");
//     document.getElementById('g').style.opacity = "100%"
//     document.getElementById('g').style.transition = "0.5s"

//   } else if (event.key == "y") {
//     console.log("y");
//     document.getElementById('y').style.opacity = "100%"
//     document.getElementById('y').style.transition = "0.5s"

//   } else if (event.key == "h") {
//     console.log("h");
//     document.getElementById('h').style.opacity = "100%"
//     document.getElementById('h').style.transition = "0.5s"

//   } else if (event.key == "u") {
//     console.log("u");
//     document.getElementById('u').style.opacity = "100%"
//     document.getElementById('u').style.transition = "0.5s"

//   } else if (event.key == "j") {
//     console.log("j");
//     document.getElementById('j').style.opacity = "100%"
//     document.getElementById('j').style.transition = "0.5s"

//   }

// });

// addEventListener('input', (scale) => {
//   if (value) {
    
//   } else {
    
//   }
// })


// ref: http://geeksforgeeks.org/javascript/build-a-piano-using-html-css-and-javascript/
// ref: https://stackoverflow.com/questions/74915532/how-do-you-detect-directional-arrow-keypresses-in-javascript
