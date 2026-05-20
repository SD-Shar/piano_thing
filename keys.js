

// from w3Schools: (take inspiration ig)

const keys = document.querySelectorAll('.keys');


keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    const dataKey = key.getAttribute('data-key');

    const clickedKey = e.target.dataset.key;
    console.log(clickedKey);
    
  })

  document.addEventListener('keydown', (event) => {
  if (event.key == "a") {
    console.log("a");
    
  } else if (event.key == "w"){
    console.log("w");
    
  }
})

});




// ref: http://geeksforgeeks.org/javascript/build-a-piano-using-html-css-and-javascript/
// ref: https://stackoverflow.com/questions/74915532/how-do-you-detect-directional-arrow-keypresses-in-javascript