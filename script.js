let baseUrl="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json"
let currList
let inputVal
let dropSel=document.querySelectorAll(".totalDropDown select")
let inp=document.querySelector("#input")
// console.log(inp.value) used to getinput value
let msg=document.querySelector('#msg')
let dSel
let fromDrop
let toDrop
let conRate
let btn=document.querySelector('#btn')
console.log(btn)
inp.addEventListener("keyup",(e)=>{
    inputVal=e.target.value
    console.log(inputVal)
})


for(select of dropSel){
    for(c in countryList){
        let newop=document.createElement("option")
        newop.innerText=c
        newop.value=c
        select.append(newop)
           }
        select.addEventListener("change",(e)=>{
            changeFlagIcon(e.target)
        })
}

function changeFlagIcon(e){
    dSel=(e.value.toLowerCase())
    console.log(countryList[e.value])
    let newImg=`https://flagsapi.com/${countryList[e.value]}/flat/64.png`;
    let img= e.parentElement.querySelector("img")
    img.src=newImg
     
}

btn.addEventListener("click",(e)=>{
    e.preventDefault(); // used to disable default form submit 
     fromDrop=(document.querySelector('#from').value).toLowerCase();
     toDrop=(document.querySelector('#to').value).toLowerCase();
    getCurr();
    
    
})
async function getCurr() {
   let list=(await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromDrop}.json`));
   currList=await list.json()
    console.log(currList)
    conRate=currList[fromDrop][toDrop];
    console.log(conRate)
    let amt=inputVal *conRate
    msg.innerText = `${inputVal} ${fromDrop} = ${amt} ${toDrop}`
    
   
}

