// console.log(window);

// let main_div_js = document.getElementById("main_div");
// console.log(main_div_js)

// let link = document.createElement('a'); // sukuria <a> elementa
// link.textContent = "Mozilla Developer Network"; // prideda teksta i <a> elementa
// link.href = 'https://developer.mozilla.org'; // priskiria linka <a> elementui
// main_div_js.appendChild(link); // prideda <a> elementa <div> kaip jo child elementas

// let section = document.createElement('section'); // sukuria <section>
// let paragraph = document.createElement('p'); // sukuria <p> 
// main_div_js.appendChild(section); // <section> tampa <div> child elementas
// section.appendChild(paragraph); // <p> tampa <section> child elementas
// paragraph.textContent = 'We hope you enjoy the ride'; // iterpiamas tekstas i <p>...</p>

// let p_masyvas = document.getElementsByTagName("p"); // susiranda visus <p> elementus ir sudeda juos i masyva
// console.log(p_masyvas.length) // paraso kiek elementu masyve
// for(let i=0; i<p_masyvas.length; i++){ //ciklas kuris pakeicia spalva kiekvieno <p> elemento masyve kol visi yra paskirtos spalvos
//   p_masyvas[i].style.color = "blue"; // mesa kuri tai padaro
// }

// let inputvalue = document.getElementById('myinput');
// let mybutton = document.querySelector('button');
// let printed_place = document.getElementById('printed_place');
// console.log(inputvalue)
// console.log(mybutton)
// console.log(printed_place)
// mybutton.addEventListener("click", addvalue);
// function addvalue(){
//   printed_place.innerText = inputvalue.value;
// }

let box_js = document.getElementById('print');
let button = document.querySelector('button');
let table = document.getElementById('table');

button.addEventListener("click", boxcreater);

function boxcreater(){

  let collumn_js = document.getElementById('collumn').value;
  let row_js = document.getElementById('row').value;

  table.setAttribute("border", "2");

  for(let i=0; i < row_js; i++){
    let table_row = document.createElement('div');
    table.appendChild(table_row);

    for(let j=0; j < collumn_js; i++){
      let table_column = document.createElement('div');
      table_column.innerText = "table";
      table_column.appendChild(table.row);
    }
  }
}




