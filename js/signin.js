function logar(){

const usuario = document.querySelector(".usuario").value;

const senha = document.querySelector(".senha").value;

if(usuario.length <1 || senha.length <1){
    
    alert = ('inline')

    setTimeout(() => {

        preencha.style.display = ('none')
    
        }, 1000);

    return false;
}

if(usuario == "Rafa" && senha == "Ursinho123"){

    alert = ('SUCESSO')

    setTimeout(() => {

    location.href = "http://127.0.0.1:5500/assets/html/home.html";

    }, 500);

    return false;

} else{

    alert= ('inline')

    setTimeout(() => {

        location.href = "http://127.0.0.1:5500/error/erro.html";
    
        }, 500);

};


};


