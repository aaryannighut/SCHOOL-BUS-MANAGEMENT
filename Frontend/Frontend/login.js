document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add your login logic here
    alert('Login successful!');
});

const loginbtn=document.getElementById('loginbtn')
const loginform=document.getElementById('loginform')
const regbtn=document.getElementById('regbtn')
const registerForm=document.getElementById('registerForm')

registerForm.addEventListener('click',function(){
    loginbtn.style.display="none";
    registerForm.style.display="block";
})

loginbtn.addEventListener('click',function(){
    loginbtn.style.display="block";
    registerForm.style.display="none";
})