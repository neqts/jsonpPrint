"use strict"

console.log(json)
const getNames = (obj) => Object.values(obj).map(el => el.name)

const purposesNames = getNames(json.purposes)
const vendorsNames = getNames(json.vendors)
const specialFeaturesNames = getNames(json.specialFeatures)
const specialPurposesNames = getNames(json.specialPurposes)
const stacksNames = getNames(json.stacks)




let outputArr = []
window.onload = function main() {
  const add = document.createElement('div')
  add.setAttribute("id", "demo");
  const overall = document.createElement('div')
  Object.entries(json.vendors).forEach(vendor => {
    outputArr.push(vendor[1].policyUrl) 
  })


  const add2 = document.createElement('div')
  document.body.appendChild(add2)
  const h1 = document.createElement('h1')
  add2.appendChild(h1)

  h1.innerHTML="GDPR consent"
  h1.style.cssText=`
  display:flex;
  justify-content:center;
  `
  
  const p2 = document.createElement('p')
  add2.appendChild(p2)
  p2.innerHTML=vendorsNames
  add2.classList.add('names')
 
 


  overall.appendChild(add);
  document.body.style.overflow="hidden"
  document.body.style.justifyContent="center"
  document.body.appendChild(add);
  document.body.style.background = "url(https://www.hgsm.pl/wp-content/uploads/2017/03/Pattern-Blue-Dots-background-patterns-pattern-wallpapers-1920x1080.jpg)"
  var final = document.getElementById("demo");
  final.innerHTML = outputArr;



  
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
      width:90%;
      height: 90%;
      background: white;
      margin: 0 auto;
      font-size:7px;
    `;


    
  add2.style.cssText = `
  display: grid;
  justify-content: center;
  align-items: center;
  width:90%;
  height: 90%;
  background: white;
  margin: 0 auto;
  font-size:7px;
`;
 
}
