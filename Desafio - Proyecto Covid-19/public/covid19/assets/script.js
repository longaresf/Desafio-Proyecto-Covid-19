$('#iniciar-sesion').click(() => {
    $("#modalIniciarSesion").modal('show');
});

$('#btn-aceptar').click( async () => {
    const correo = document.getElementById('js-input-email').value;
    const contraseña = document.getElementById('js-input-password').value;

    if((correo==='') || (contraseña==='')) {
        alert('Debe llenar todos los campos del formulario');
    }
    else if ((contraseña != 'secret')){
        alert('Contraseña incorrecta');
    }
    else
    {
    const JWT = await postData(correo,contraseña);

    toggleNavBar();

    $(".modal").modal('hide');
    }
});

$('#cerrar-sesion').click(() => {
    $('#iniciar-sesion').toggle();
    $('#situacion-chile').toggle();
    $('#cerrar-sesion').toggle();

    localStorage.clear();
    window.location.href = '/covid19/index.html';
});


const toggleNavBar = () => {
    $('#iniciar-sesion').toggle();
    $('#situacion-chile').toggle();
    $('#cerrar-sesion').toggle();
};

//--------------------------------------------

const postData = async (email,password) => {
    try {
        const response = await fetch('http://localhost:3000/api/login',
        {
            method:'POST',
            body: JSON.stringify({email:email,password:password})
        })
        const { token } = await response.json();
        localStorage.setItem('jwt-token',token);
        return token;
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
}


const init = (( async = () => {
    const token = localStorage.getItem('jwt-token');

    if(token){
        toggleNavBar();
    }
}))();