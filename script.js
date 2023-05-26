//$$$$$$--- hiding navbar (toggle) ---START$$$$$$//
let navLinks=document.getElementById("navLinks");

function showMenu(){
    navLinks.style.left="0";
}
function hideMenu(){
    navLinks.style.left="100%";
}
// hiding navbar (toggle) END___________________//
// for changing navbar color
function changebg(){
    let navbar=document.getElementById('navBar');
    let scrollvalue= window.scrollY;
    if(scrollvalue<150){
        navbar.classList.remove('bgcolorchange');
    }else{navbar.classList.add('bgcolorchange')}
}
window.addEventListener('scroll', changebg)


// for creating active class
// let navLink= document.querySelectorAll('.a-links' )
let navLink= document.querySelectorAll('header nav a' )
let section= document.querySelectorAll('.sec')

window.onscroll=() =>{
    section.forEach(sec =>{
        let top=window.scrollY;
        let offset= sec.offsetTop-100;
        let height= sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>offset &&top<offset +height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}



// $$$$$$$$$$$$$$$$$$$$$$$$__EVENT SECETION___$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const slide= document.querySelectorAll('.myslider'),
 dot= document.querySelectorAll('.dot');


 let counter =1;
 slidefun(counter);

 let timer=setInterval(autoslide,8000)
 function autoslide(){
    counter+=1;
    slidefun(counter)
 }
 function plusSlides(n){
    counter+=n;
    slidefun(counter);
    resetTimer();
 }
function currentslide(n){
    counter=n;
    slidefun(counter)
    resetTimer();
}
function resetTimer(){
    clearInterval(timer)
    timer= setInterval(autoslide,8000)
}




 function slidefun(n){
let i;
for(i=0; i<slide.length; i++){
    slide[i].style.display="none";
}
for(i=0; i<dot.length;i++){
    dot[i].classList.remove('active');
}
if(n>slide.length){
    counter=1
}
if(n<1){
    counter=slide.length;
}
slide[counter-1].style.display="block";
dot[counter-1].classList.add('active');
 }




// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$__Contact SECETION___$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// contact us animation script
const input= document.querySelectorAll(".input");

function focusFunc(){
    let parent =this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent =this.parentNode;
    if (this.value ==""){
        parent.classList.remove("focus");
    }
    
}
input.forEach((input) => {
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
})
// =============For sending mail ============
// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "adritarahmen16@gmail.com",
//         Password : "imasillygirl16",
//         To : 'asadullahimran19@gmail.com',
//         From : 'adritarahmen16@gmail.com',
//         Subject : "UIUEDF contact form enquiry",
//         Body : "Name: " + document.getElementById("name").value 
//         + "<br> Email: " + document.getElementById("email").value 
//         + "<br> Phone No: " + document.getElementById("phone").value 
//         + "<br> Message: " + document.getElementById("message").value 
//     }).then(
//       message => alert("Message Sent Successfully")
//     );
// }

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$__Contact SECETION___$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
