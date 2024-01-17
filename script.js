const svgOne = document.querySelector("#svg-one");
const svgTwo = document.querySelector("#svg-two");
const svgThree = document.querySelector("#svg-three");
const svgFour = document.querySelector("#svg-four");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
console.log(one);
//EventListeners
svgOne.addEventListener("click", ()=>{
    if(one.style.display === "none"){
        one.style.display = "block"
        svgOne.className = "fa-solid fa-circle-minus"
        
    }else{
        one.style.display = "none"
        svgOne.className = "fa-solid fa-circle-plus"
        svgOne.style.color= "purple"
    }
})
svgTwo.addEventListener("click", ()=>{
    if(two.style.display === "none"){
        two.style.display = "block"
        svgTwo.className = "fa-solid fa-circle-minus"
        
    }else{
        two.style.display = "none"
        svgTwo.className = "fa-solid fa-circle-plus"
        svgTwo.style.color= "purple"
    }
})

svgThree.addEventListener("click", ()=>{
    if(three.style.display === "none"){
        three.style.display = "block"
        svgThree.className = "fa-solid fa-circle-minus"
        
    }else{
        three.style.display = "none"
        svgThree.className = "fa-solid fa-circle-plus"
        svgThree.style.color= "purple"
    }
})
svgFour.addEventListener("click", ()=>{
    if(four.style.display === "none"){
        four.style.display = "block"
        svgFour.className = "fa-solid fa-circle-minus"
        
    }else{
        four.style.display = "none"
        svgFour.className = "fa-solid fa-circle-plus"
        svgFour.style.color= "purple"
    }
})