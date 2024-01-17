const svgOne = document.querySelector("#svg-one");
const svgTwo = document.querySelector("#svg-two");
const svgThree = document.querySelector("#svg-three");
const svgFour = document.querySelector("#svg-four");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const accordion = document.querySelector(".my-accordion");
let height = 450
console.log(one);
/*
svgOne.addEventListener("click", ()=>{
 
    if(one.style.display === "none"){
        one.style.display = "block"
        svgOne.className = "fa-solid fa-circle-minus"
        accordion.style.height = `${height+100}px` 
        if (two.style.display==="block"){
            accordion.style.height = `${height + 250}px`
         }
         if (three.style.display==="block"){
            accordion.style.height = `${height + 400}px`
         }
    }else{
        one.style.display = "none"
        svgOne.className = "fa-solid fa-circle-plus"
        svgOne.style.color= "purple"
        accordion.style.height = `450px`
    }
})
svgTwo.addEventListener("click", ()=>{
    if(two.style.display === "none"){
        two.style.display = "block"
        svgTwo.className = "fa-solid fa-circle-minus"
        accordion.style.height = `${height + 100}px`
        if (one.style.display==="block"){
            accordion.style.height = `${height + 230}px`
         }
         if (three.style.display==="block"){
            accordion.style.height = `${height + 400}px`
         }
    }else{
        two.style.display = "none"
        svgTwo.className = "fa-solid fa-circle-plus"
        svgTwo.style.color= "purple"
        accordion.style.height = `${height + 100}px`
    }
})

svgThree.addEventListener("click", ()=>{
    if(three.style.display === "none"){
        three.style.display = "block"
        svgThree.className = "fa-solid fa-circle-minus"
        accordion.style.height = `${height + 150}px`
        if(four.style.display ==="block" 
           && two.style.display  ==="block"
           && one.style.display === "block"
        ){
            accordion.style.height = `${height + 400}px`
        }
        if( two.style.display  ==="block"
        || one.style.display === "block" ||
        four.style.display === "block" ){
            accordion.style.height = `${height + 200}px`
        }
        
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
            accordion.style.height = `${height + 150}px`
            accordion.style.background = "orange"
            if(three.style.display = "block" 
            && two.style.display  ==="block"
            && one.style.display === "block"
         ){
             accordion.style.height = `${height + 500}px`
         }
              
      
        
    }else{
        four.style.display = "none"
        svgFour.className = "fa-solid fa-circle-plus"
        svgFour.style.color= "purple"
        accordion.style.height = `450px`
    }
}) 
*/

const svgs = [svgOne, svgTwo, svgThree, svgFour];
const accordionItems = [one, two, three, four];
svgs.forEach((svg, index) => {
    svg.addEventListener("click", () => {
        const accordionItem = accordionItems[index];
        const isOpen = accordionItem.style.display === "block";

        accordionItem.style.display = isOpen ? "none" : "block";
        svg.className = isOpen ? "fa-solid fa-circle-plus" : "fa-solid fa-circle-minus";
        svg.style.color = isOpen ? "purple" : "";

        updateAccordionHeight();
    });
});

function updateAccordionHeight() {
    const totalHeight = accordionItems.reduce((acc, item) => {
        return item.style.display === "block" ? acc + 150 : acc;
    }, height);

    accordion.style.height = `${totalHeight}px`;
}



