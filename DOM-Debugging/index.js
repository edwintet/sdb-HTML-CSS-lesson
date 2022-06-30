const header = document.getElementsByTagName("h1")[0];
header.addEventListener("click", (evt) => console.log({ evt }));

const submitButton = document.getElementById("submit-item");

submitButton.addEventListener("click", (evt) => {
  console.log({ evt });
  const input = document.getElementById("new-item");
  const groceryList = document.getElementById("grocery-items");
  const newItem = document.createElement("li");
  newItem.textContent = input.value;
  groceryList.appendChild(newItem);
});
