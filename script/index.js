//DOM manipulation

const container = document.querySelector(".container");
let card = document.createElement("div");
card.setAttribute("class", "total");
container.appendChild(card);

//Fetch API
async function fetchPeople() {
  const starWarsApi = "https://swapi.dev/api/people";
  const resultApi = await fetch(starWarsApi);
  const data = await resultApi.json();

 
  // destructuring

  const { results } = data;

  results.forEach((data, i) => {
    card.innerHTML += `
           <div style="border: 1px solid black; margin-top: 10px; width: fit-content;   text-align: center ; " >
           
           <div> 
           <img src="./images/image1.jpeg" class = "Imgdiv" style="height: 500px; " >
       <div id="name${i}">
           <button>${data.name}</button>
       </div>
       <div id="dropdown${i}" style="visibility:hidden">
           <p>Name: ${data.name}</p>
           <p>Gender: ${data.gender}</p>
           <p>Height: ${data.height}</p>
       </div>


       </div>
           
           </div>
           `;
  });
  clickFunction();
}

function clickFunction() {
  for (let i = 0; i < 10; i++) {
    document.getElementById(`name${i}`).addEventListener("click", (e) => {
      const targetDiv = document.getElementById(`dropdown${i}`);
      if (
        targetDiv.style.visibility === "hidden" ||
        targetDiv.style.visibility === ""
      ) {
        targetDiv.style.visibility = "visible";
      } else {
        targetDiv.style.visibility = "hidden";
      }
    });
  }
}

fetchPeople();
