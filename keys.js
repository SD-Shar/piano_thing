

// from w3Schools: (take inspiration ig)

const keys = document.querySelectorAll('.keys');

keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    const clickedKey = event.target.dataset.list;
      console.log(key);
  })

  
});



// ref: http://geeksforgeeks.org/javascript/build-a-piano-using-html-css-and-javascript/