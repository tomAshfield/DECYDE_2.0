//List for the user to put their ideas in
let ideas = [];
let finalIdeas = [];
let finalIdea = [];
let fIdea;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Takes in nothing; adds whatever they inputted into the text box
function addIdeas() {
  let temp = ideas.map((idea) => `<li>${idea}</li>`).join("\n");
  document.querySelector(".ideaList").innerHTML = temp;
}

//Call function in order to display it on the website
addIdeas();

//Setting variables to event actions
let input = document.querySelector("input");
let FinalResult = document.querySelector(".finalResult");

//Wating for the submit button to be clicked to then add the idea to the array list and website list
function addIdea() {
  ideas.push(input.value);
  input.value = "";
  addIdeas();
}

//Checking if the enter key was pressed inside the input box
document.addEventListener("keyup", function (event) {
  if (input.value != "") {
    if (event.code === "Enter") {
      addIdea();
    }
  } else {
    alert("Can't enter nothing!!!");
  }
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var FinalIdeaHeader = document.getElementById("finalIdeaHeader");
var FinalIdeaDiv = document.getElementById("fDescision");
var EnterIdeasDiv = document.getElementById("eIdeas");
var ReadyButton = document.getElementById("final");

document.querySelector('.goBack').addEventListener('click', GoBack);

function GoBack() {
  EnterIdeasDiv.style.display = "block";
  FinalIdeaDiv.style.display = "none";
  ReadyButton.style.display = "block";
}

function FinalIdeas() {
  FinalResult.textContent = fIdea + "!";
}

function nextStep() {
  if (ideas.length != 0) {
    shuffle(ideas);
    EnterIdeasDiv.style.display = "none";
    FinalIdeaDiv.style.display = "block";
    ReadyButton.style.display = "none";
    userPrompt();
    FinalIdeaHeader.style.display = "block";
    FinalIdeas();
  } else {
    alert(
      "Make sure to enter your ideas first before going to the next step!!!"
    );
  }
}

//Shuffle the ideas when the user is ready to move on
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  finalIdeas = array;
}

function userPrompt() {
  let index;
  do{
  index = prompt("Enter a number between 1-" + finalIdeas.length, "");
  while(index == null || parseInt(index) <= 0 || isNaN(index)){
    index = prompt("Please enter a number between 1-" + finalIdeas.length, "");
  }
  fIdea = finalIdeas[parseInt(index - 1)];
  } while(index > finalIdeas.length);
}