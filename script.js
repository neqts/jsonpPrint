"use strict"


var theVendors = [];
let theName = [];
const show =[]
let mainObj ={}

let showObj =function(){
for(let prop in mainObj){
  console.log(prop)
  console.log(mainObj[prop])
  }
}

fetch("data.json")
.then(function(resp){
  console.log(resp)

    return resp.json();
 

})



.then(function(data){
   
    theVendors = data.vendors
    theName=data.name
    mainObj=data
  
    showObj()
    // let number = 972
    // let step;
    // for (step = 0; step < number; step++) {
    //   const show = Vendors[step]
    //   console.log(show)
    // }
   


   
})


const test = theVendors.map(function(x){
  console.log(x)
})


// const x = theVendors.map()





window.onload = function main() {
    const add = document.createElement('div')
    const overall = document.createElement('div')
  
    overall.style.cssText = `
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(5px);
    `;
    add.style.cssText = `
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 400px;
      background: white;
    `;
    add.textContent = "GDPR consent"
   
    overall.appendChild(add);
    document.body.style.overflow="hidden"
    document.body.appendChild(overall);
    document.body.style.background = "url(https://www.hgsm.pl/wp-content/uploads/2017/03/Pattern-Blue-Dots-background-patterns-pattern-wallpapers-1920x1080.jpg)"
  }