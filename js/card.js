var ra=Math.random()
const chou=document.getElementById("chou")
const result=document.getElementById("result")
const cards=[
    {name:"我"},
    {name:"超"},
    {name:"爱"},
    {name:"你"}
]

chou.addEventListener("click",function(){
    chou.disabled = true;
    var ra=Math.floor(Math.random()*cards.length);
    const result2=cards[ra];
    result.innerHTML=`<h2>${result2.name}</h2>`
});