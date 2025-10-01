function submitbutton(){
const submit=document.querySelector('.bt');
const input = document.querySelector('.input')
const input2 =document.getElementById('input2')


const gmailval=/^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const passwrd= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
if(input.value===""){
    alert('Please enter the Email address.');
}
else if(input2.value===""){
    alert('Please enter the password .');
}
else if(!gmailval.test(input.value)){
    alert('Please enter the a vaild Email having @gmail.com .');
}
else if(!passwrd.test(input2.value)){
    alert('please enter a valid password');

}
else{
   submit=window.open('main.html')
}

}
function newpage(){
    const page=document.querySelector('free')
    page=window.open('signup.html')
}
