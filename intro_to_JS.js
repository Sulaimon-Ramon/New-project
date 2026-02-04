

const ul = document.querySelector("ul");
const li = document.createElement("li");


ul.append(li);


const lastListItem = document.querySelector(".list-items");
lastListItem.innerText = "Van Helsing";

li.setAttribute("class", "list-items");


