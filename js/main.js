let productos = [];
let total = 0;

function add(producto, precio) {
    console.log(producto, precio);
    productos.push(producto);
    total = total + precio;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pagar() {
 //window.alert(productos.join(", \n"));
 document.getElementById("resCompra1").innerHTML = `Su carrito:`
 document.getElementById("resCompra2").innerHTML = `${productos}`
 document.getElementById("resCompra3").innerHTML = `Total: $${total}`
 $('#mostrarCompra').prepend(( `<button type="button" class="btn btn-primary">Pagar</button>`));
 $ ("button").show();
}

$(`.button-add1`).on('click', function (a) {
    a.preventDefault();
    producto= "Fender Stratocaster";
   $('#alertaCompra1').prepend(( `<h5 style="display: none">Añadiste ${producto} al carrito!</h5>`));
   $ ("h5").show();
});
$(`.button-add2`).on('click', function (a) {
    a.preventDefault();
    producto= "Fender Telecster";
   $('#alertaCompra2').prepend(( `<h5 style="display: none">Añadiste ${producto} al carrito!</h5>`));
   $ ("h5").show();
});
$(`.button-add3`).on('click', function (a) {
    a.preventDefault();
    producto= "Gibson Les Paul";
   $('#alertaCompra3').prepend(( `<h5 style="display: none">Añadiste ${producto} al carrito!</h5>`));
   $ ("h5").show();
});
 
$(`.button-add4`).on('click', function (a) {
    a.preventDefault();
    producto= "Ephiphone Sg";
   $('#alertaCompra4').prepend(( `<h5 style="display: none">Añadiste ${producto} al carrito!</h5>`));
   $ ("h5").show();
});
$(`.button-add5`).on('click', function (a) {
    a.preventDefault();
    producto= "Fender Starcaster";
   $('#alertaCompra5').prepend(( `<h5 style="display: none">Añadiste ${producto} al carrito!</h5>`));
   $ ("h5").show();
});
$(`.button-add6`).on('click', function (a) {
    a.preventDefault();
    producto= "Gretsch";
   $('#alertaCompra6').prepend(( `<h5 style="display: none">Añadiste ${producto} al carrito!</h5>`));
   $ ("h5").show();
});

// Eventos del formulario
let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    var contenido = "<p class='text-white bg-success p-3'>Formulario Enviado</p>";
    document.getElementById("resultado").innerHTML = contenido;    

}


