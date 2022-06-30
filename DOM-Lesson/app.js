/* function askForStuff() {
  prompt();
}

console.log(askForStuff()); */

/* 
Data representation of the objects that comprise the structure and content of a document on the web.

 Basic Struture:
  - Document
    -HTML
      - Head
         - Meta tags
         - Link tags
         Title tag
      - Body
         - Nav
         - Header
         - Div's
         - H1's, img's, aside's and so on...
         - And any of their attributes   
       
*/

// Creating our first element

// 1. Use createElement method on a document object and specify the element you want to create. Assing it to variable for future modifications.

let h1 = document.createElement("h1");

h1.innerText = "Creating my first DOM element...";
h1.style.color = "blue";
h1.style.textAlign = "center";

document.body.appendChild(h1);

let h2 = document.createElement("h2");
h2.innerText = "New h2 Element";
h2.className = "main-element";
document.body.appendChild(h2);

// .getElementsByTagName
/* 
   HTMLCollection
    - Array-like object
    - Allows access to index, properties, and methods to help navigate and modify.  
    - Does NOT allow to modify a group of elements all at once
*/
let liBathroom = document.getElementsByTagName("li")[0];
liBathroom.style.color = "red";
let li = document.getElementsByTagName("li");

for (i of li) {
  i.style.color = "darkblue";
  i.style.textAlign = "center";
}

// .querySlector()
/* 
   Grabs first instance of an element or null if not found
 */

let toDoList = document.querySelector("#listTitle");
toDoList.style.textAlign = "center";

// .querySelectorAll()
/* 
   NodeList returning static list of document's elements
*/

let nodeListLi = document.querySelectorAll("li");

let newListItem = document.createElement("li");
let ulToDo = document.getElementById("ulToDo");
newListItem.innerText = "Dynamic vs Static";
/* ulToDo.appendChild(newListItem); */

let link = document.getElementsByClassName("link")[0];
link.href = "https://replit.com";

// Creating paragrap element and appending it to the list id div tag

let pTag = document.createElement("p");
let list = document.getElementById("list");

pTag.textContent = "This is my toDo List";
list.appendChild(pTag);

//Event Listeners
/* 
   Event listener allows us to execute a function when a particular event occurs.
     - .addEventListener() takes an event and callback function
     - event - what happens
     - callback function - action tied to the event
*/

let button = document.getElementById("submit");

button.addEventListener("click", (event) => {
  console.log({ event }); // Grab and store user input
  let input = document.getElementById("listInput");
  // Acces parent element to the list items themselves
  // lives inside ulToDo variable

  // Create new list item element
  let newToDoItem = document.createElement("li");
  // Append input content into our list item element
  newToDoItem.textContent = input.value;
  // Append new child element to the parent element
  ulToDo.appendChild(newToDoItem);
});

// module.export
// const require() imports

// Morning Challenge

/* 
 Create a function that takes an object and first and foremost:
   - Checks if the object exists. If it doesn't, you want to return, "no object found"
   - If the object exists create a dvi that will hold an h2 with name of the show that it's bringing in.
   - Create a div with an h4 of the season name
   - Inside the div, create another div that will hold an episode number as a paragraph and an episode name as a paragraph.
   - This div will be created for each instance of an object
*/

let netflix = {
  id: 9,
  likes: 932,
  name: "The Good Place",
  seasonInf: {
    season1: {
      numberOfEpisodes: 5,
      episodeInfo: [
        { episode: 1, episodeName: "Pilot" },
        { episode: 2, episodeName: "Flying" },
        { episode: 3, episodeName: "Tahani Al-Jamil" },
        { episode: 4, episodeName: "Jason Mendoza" },
        { episode: 5, episodeName: "Category 55 Emergency" },
      ],
    },
    season2: {
      numberOfEpisodes: 6,
      episodeInfo: [
        { episode: 1, episodeName: "Everything" },
        { episode: 2, episodeName: "Dance Dance Resolution" },
        { episode: 3, episodeName: "Team Cockroach" },
        { episode: 4, episodeName: "Existential crisis" },
        { episode: 5, episodeName: "Emergency" },
        { episode: 6, episodeName: "The Trolley Problem" },
      ],
    },
    season3: {
      numberOfEpisodes: 6,
      episodeInfo: [
        { episode: 1, episodeName: "Everything" },
        { episode: 2, episodeName: "Dance Dance Resolution" },
        { episode: 3, episodeName: "Team Cockroach" },
        { episode: 4, episodeName: "Existential crisis" },
        { episode: 5, episodeName: "Emergency" },
        { episode: 6, episodeName: "The Trolley Problem" },
      ],
    },
  },
};

function displayDOM(object) {
  if (!object) {
    return "No object found";
  } else {
    let mainDiv = document.createElement("div");
    mainDiv.className = "main-div";
    document.body.appendChild(mainDiv);
    let showName = document.createElement("h2");
    showName.textContent = object.name;
    mainDiv.appendChild(showName);

    for (i in object.seasonInf) {
      let seasonContainer = document.createElement("div");
      let seasonName = document.createElement("h4");
      seasonContainer.className = "container";
      seasonName.textContent = i;
      seasonName.id = "pageEnd";
      seasonContainer.appendChild(seasonName);
      mainDiv.appendChild(seasonContainer);
      for (j of object.seasonInf[i].episodeInfo) {
        let episodeContainer = document.createElement("p");
        episodeContainer.textContent = `${j.episode} - ${j.episodeName}`;
        seasonContainer.appendChild(episodeContainer);
      }
    }
  }
}
displayDOM(netflix);

let form = document.getElementsByClassName("form")[0];

/* form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
}) */

// Morning warmup

/* 
   Build a search bar with a search button that will allow acces to the values of the user input.
   Build a function that will take that user input and sanitize it all to lower case. Then, it will return a boolean if any of the input includes the word "cat". If cat is found, have it display "Meow" in giant letters to your page

   !Spicey

   Create an unordered list with 5 list items. Give them whatever value you want. Then use the netflix object to reassing the values in the unordered list with the values of the episode names of whichever season you want.

*/
