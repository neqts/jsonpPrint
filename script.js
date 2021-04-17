"use strict"




console.log(json)

const getNames = (obj) => Object.values(obj).map(el => el.name)

const purposesNames =getNames(json.purposes)
const vendorsNames = getNames(json.vendors)
const specialFeaturesNames =getNames(json.specialFeatures)
const specialPurposesNames = getNames(json.specialPurposes)
const stacksNames = getNames(json.stacks)


console.log(purposesNames,vendorsNames,specialFeaturesNames,specialPurposesNames,stacksNames)


var step;
for (step = 0; step < 972; step++) {
 console.log(json.vendors[step].policyUrl)  
 
}







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