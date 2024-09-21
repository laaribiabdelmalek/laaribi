let k=document.getElementById("k");
let h=document.getElementById("h");
let a=document.getElementById("a");
let b=document.getElementById("b");
let c=document.getElementById("c");
let m=document.getElementById("m");
let home=document.getElementById("home");
let html=document.getElementById("html");


k.onclick=function(){
    a.style.display="block"; 
    m.style.display="block";
    k.style.display="none"; 
}
h.onclick=function(){
    a.style.display="none";
    m.style.display="none";  
    k.style.display="block";
}
home.onclick=function(){
    html.relod();
}

