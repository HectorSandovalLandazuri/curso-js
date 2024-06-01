const form=document.getElementById('form');
const userName = document.getElementById("name");
const password = document.getElementById("password");

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('form submitted');  
    console.log(userName.value);
    console.log(password.value);  
})