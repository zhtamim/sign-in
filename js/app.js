let pass_s_h = document.querySelector('#pass_s_h');
let password = document.querySelector('#password ');

pass_s_h.addEventListener('click',()=>{
    if(password.type =='password'){
        password.type ='text'
        pass_s_h.innerHTML = '<i class="fa-solid fa-eye"></i>'
    }else{
        password.type ='password'
        pass_s_h.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'

    }
})