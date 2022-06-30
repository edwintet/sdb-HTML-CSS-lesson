let imgOne = document.getElementById("imageOne");
let imgTwo = document.getElementById("imageTwo");

const display = (one, two) => {
  fetch(`https://rickandmortyapi.com/api/character/${one},${two}`)
    .then((res) => res.json())
    .then((data) => {
      imgOne.src = data[0].image;
      imgOne.style.borderRadius = "2em";
      imgOne.style.border = "2px solid blue";
      imgOne.style.margin = "auto 50%";
      imgTwo.src = data[1].image;
      imgTwo.style.borderRadius = "2em";
      imgTwo.style.border = "2px solid blue";
      imgTwo.style.margin = "auto 50%";
    });
};

display(21, 233);

/* cardImg.firstElementChild.src = data.sprites.front_shiny; */

/* async function getPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await response.json();
    console.log(data);

    name.textContent = data.name;
    cardImg.firstElementChild.src = data.sprites.front_shiny;
    ability.textContent = data.abilities[1].ability.name;
    weight.textContent = data.weight;
  }
  getPokemon(); */
/* 
  let input = document.querySelector(".search-input").value;

  /*   fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err)); */
