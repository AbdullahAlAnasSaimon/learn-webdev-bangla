// common function for show/hide nested dropdown
function takeElementsById(elementId){
  let milestone = document.getElementById(elementId);
  if (milestone.style.display === "block") {
    milestone.style.display = "none";
  } else {
    milestone.style.display = "block";
  }
}

function milestoneOne() {
  takeElementsById("nested-dropdown1");
}

function milestoneTwo() {
  takeElementsById("nested-dropdown2");
}

function milestoneThree() {
  takeElementsById("nested-dropdown3");
}

function milestoneFour() {
  takeElementsById("nested-dropdown4");
}

function milestoneFive() {
  takeElementsById("nested-dropdown5");
}

function milestoneSix() {
  takeElementsById("nested-dropdown6");
}
const className = document.getElementsByClassName('dropdown-list');
for(const nam of className){
  nam.addEventListener('load', function(){
    console.log('clicked');
  })
}