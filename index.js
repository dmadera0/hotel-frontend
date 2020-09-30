console.log("hello")
document.addEventListener('DOMContentLoaded',() =>{
    
const ul = document.querySelector("ul")
    
console.log(ul)
    
ul.addEventListener('mouseenter', (event) => {
console.log(event)
})
    
})