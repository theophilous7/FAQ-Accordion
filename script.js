const svgOne = document.querySelector("#svg-one");
const svgTwo = document.getElementsByClassName("svg-2");
const svgThree = document.getElementsByClassName("svg-3");
const svgFour = document.getElementsByClassName("svg-4");
const one = document.getElementById("one");
const two = document.getElementsByClassName("two");
const three = document.getElementsByClassName("three");
const four = document.getElementsByClassName("four");
console.log(one);
//EventListeners
svgOne.addEventListener("click", ()=>{

   const plus =  document.createElement("div");
   
 
    one.style.display === "none" ?
    one.style.display = "block":
    one.style.display = "none";
})