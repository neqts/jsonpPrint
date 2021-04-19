"use strict"

console.log(json)
/*declaration constants*/
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

  const add2 = document.createElement('div')
  Object.values(json.vendors).forEach(vendor => {
    const span = document.createElement('span');
    var checkbox = document.createElement('input');
              
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    checkbox.style.height="3px"
    checkbox.style.margin="0px"
    
    add2.appendChild(span)
    add2.appendChild(checkbox)
   
    span.style.cssText=`
    font-size:3px;`
    span.innerHTML = `${vendor.name}, <a href="${vendor.policyUrl}" >${vendor.policyUrl}</a>
    ${checkbox}`;

    
    add2.appendChild(span);
    
    
  });
  // elements = document.getElementsByTagName(input)
 document.body.appendChild(add2)
//  console.log(elements)






  


 
 
/*overal styling */

  overall.appendChild(add);

  document.body.style.overflow="hidden"
   document.body.style.backdropFilter="blur(7px)";
   document.body.style.margin="0px"
   document.body.style.padding="21px"
  document.body.style.justifyContent="center"
  document.body.appendChild(add);
  document.body.style.paddingBottom="1000px";
  document.body.style.background = "url(https://www.hgsm.pl/wp-content/uploads/2017/03/Pattern-Blue-Dots-background-patterns-pattern-wallpapers-1920x1080.jpg)"
  var final = document.getElementById("demo");
  final.innerHTML = outputArr;


/*Buttons */
      
  const add3 = document.createElement('div')
  add3.classList.add('butons')
  document.body.appendChild(add3)
  const accept = document.createElement('button')
  add3.appendChild(accept)
  accept.classList.add('btn1')
  const reject = document.createElement('button')
  add3.appendChild(reject)
  reject.classList.add('btn2')
  accept.innerHTML="ACCEPT"
  reject.innerHTML="REJECT"
  accept.addEventListener("click",show)
  reject.addEventListener("click",hide)
   document.querySelector('.butons')
   


  function show() {
   add2.style.display="none"
   add3.style.display="none;"
   final.style.display="none"
   document.querySelector('.butons').style.display="none"
   document.body.style.backdropFilter="none"
   mySave()

    
  }
  
  function hide() {
    add2.style.display="none"
    add3.style.display="none;"
    final.style.display="none"
    document.querySelector('.butons').style.display="none"
    document.body.style.width="100%"
    document.body.style.height="100vh"
 
     
   }
 

   function mySave() {
    var myContent = "Accepted"
    localStorage.setItem("myContent", myContent);
  }

  
  /* styling */

  add.style.cssText = `
      display: flex;
      justify-content: center;
      align-items: center;
      width:90%;
      height: 90%;
      background: white;
      margin: 0px auto;
      font-size:2px;
    `;


    
  add2.style.cssText = `

  justify-content: center;
  align-items: center;
  width:90%;
  height: 90%;
  background: white;
  margin: 0 auto;
  font-size:3px;
`;
add3.style.cssText = `
display: flex;
padding-top:10px;
padding-bottom:10px;
justify-content: center;
align-items: center;
width:90%;
height: 90%;
background: white;
margin: 0 auto;
font-size:3px;
`;
}