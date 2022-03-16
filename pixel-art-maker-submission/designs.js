/* Creating variables for DOM and function(s) */

let color = document.getElementById("colorPicker");
let table = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");

let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWeight").value;
makeGrid(height, width);


/* Sets up pixels when clicked */

sizePicker.addEventListener("click", (e) => {

  e.preventDefault();

  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWeight").value;
  table.firstElementChild.remove();

  makeGrid(height, width);

});


/*  Setting up function to set up cells when called  */
function makeGrid(height, width) {

  for (let i = 0; i < height; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener("click", (e) => {
        cell.style.backgroundColor = color.value;
      })
    }
  }

}