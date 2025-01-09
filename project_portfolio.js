const plus=document.querySelector(".plus");
const dete=document.querySelector(".Details");
const d=document.querySelectorAll(".sous_conteneur");
const none=document.querySelector(".none1");
const nones=document.querySelector(".none2");
const pro1=document.querySelector(".progression_html");
const pro2=document.querySelector(".progression_php");
const pro3=document.querySelector(".progression_jS");
const pro4=document.querySelector(".progression_c");
const pro5=document.querySelector(".progression_css");
const nav=document.querySelector(".nav");
const border1=document.querySelector(".border1");
const border2=document.querySelector(".border2");
const border3=document.querySelector(".border3");
const border4=document.querySelector(".border4");
const border5=document.querySelector(".border5");
function toggle(){
dete.classList.toggle("det");
}
d.forEach(ds=>{
ds.style.background=`rgb(15, 114, 145)`;
ds.addEventListener('mouseenter',()=>{
    let x=0;
const inter=setInterval(()=>{
if(x>100){
 clearInterval(inter);
}else{
x+=3;
ds.style.background=`linear-gradient(to top,#0090f1ef,rgba(12, 12, 12, 0.527) ${x}% )`;
}
},10)
})
ds.addEventListener('mouseleave',()=>{
    let x=100;
const inter=setInterval(()=>{
if(x<=0){
 clearInterval(inter);
}else{
x-=3;
ds.style.background=`linear-gradient(to top,#0090f1ef,rgba(12, 12, 12, 0.527) ${x}% )`;
}
},1)
})
})

function none1(){
nones.style.display="none"
none.style.display="flex"
}
function none2(){
none.style.display="none"
nones.style.display="flex" 
nones.style.animation="bluur 2s ease"
}
document.addEventListener('DOMContentLoaded',()=>{

const obser=new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
 pro1.style.animation="pro1 5s ease";
 pro2.style.animation="pro2 5s ease";
 pro3.style.animation="pro3 5s ease";
 pro4.style.animation="pro4 5s ease";
 pro5.style.animation="pro5 5s ease";
 border1.style.animation="anim1 3s ease";
 border2.style.animation="anim2 3s ease"; 
 border3.style.animation="anim3 3s ease";
 border4.style.animation="anim4 3s ease";
 border5.style.animation="anim5 3s ease";

}
})

})
obser.observe(pro1);
obser.observe(pro2);
obser.observe(pro3);
obser.observe(pro4);
obser.observe(pro5);
obser.observe(border1);
obser.observe(border2);
obser.observe(border3);
obser.observe(border4);
obser.observe(border5);

})

function nave(){
   if(window.scrollY>=50){
    nav.style.position="fixed"
   nav.style.top="0"
   nav.style.width="100%"
   nav.style.justifyContent="center"
   nav.style. textAlign="right";    
}else
{
nav.style.position="static"
nav.style.justifyContent="flex-end"
nav.style. textAlign="right";    
}
}

    window.addEventListener('scroll',nave)
