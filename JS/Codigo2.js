// creacion de usuario

let usuario, clave, saldo;

usuario = prompt("Cree su usuario");
clave = prompt("Cree su clave");

//Ingreso de usuario

let usuarioCreado, claveCreada
alert("Recuerde que solo tiene 3 intentos para ingresar su usuario y clave")
usuarioCreado = prompt("Ingrese su usuario");
claveCreada = prompt("Ingrese su clave");

//Contador intentos fallidos
//Comprobar que el usuario y la clave sean correctos
if (usuario == usuarioCreado && clave == claveCreada){
        let saldo = 2000000;
        alert(`Su saldo es ${saldo}`);
        
}else{
    alert("le quedan 2 intentos")
    usuarioCreado = prompt("Ingrese su usuario");
    claveCreada = prompt("Ingrese su clave");
    
    if (usuario == usuarioCreado && clave == claveCreada){
        let saldo = 2000000;
        alert(`Su saldo es ${saldo}`);
    }else{
        alert("le queda 1 intento")
        usuarioCreado = prompt("Ingrese su usuario");
        claveCreada = prompt("Ingrese su clave");
        
        if (usuario == usuarioCreado && clave == claveCreada){
            let saldo = 2000000;
            alert(`Su saldo es ${saldo}`);
        }else{
            alert("Cuenta bloqueada")
        }
    }
  

}
