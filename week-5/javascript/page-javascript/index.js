// function createParagraph() {
//     const para = document.createElement("p");
//     para.textContent = "You clicked the button!";
//     document.body.appendChild(para);
//   }
//   const buttons = document.querySelectorAll("button");
//   for (const button of buttons) {
//     button.addEventListener("click", createParagraph);
//   }
 const buttons =document.querySelectorAll("button")
  function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }
 /*loop through all the button and a clickEventListener to each one
 
 when any button button is pressed the create paragraph will be run*/

 
  for(const button of buttons) {
    button.addEventListener("click", createParagraph);
  }

