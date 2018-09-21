

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Items.
			$('.item').each(function() {

				var $this = $(this),
					$header = $this.find('header'),
					$a = $header.find('a'),
					$img = $header.find('img');

				// Set background.
					$a.css('background-image', 'url(' + $img.attr('src') + ')');

				// Remove original image.
					$img.remove();

			});

	});

})(jQuery);

   // Initialize Firebase


const db = firebase.firestore ();
 
//Variables Productos
var b=["Producto1","Producto2","Producto3","Producto4","Producto5","Producto6","Producto7",];
var c=["PrecioP1","PrecioP2","PrecioP3","PrecioP4","PrecioP5","PrecioP6","PrecioP7",];
var d=["DisponibleP1","DisponibleP2","DisponibleP3","DisponibleP4","DisponibleP5","DisponibleP6","DisponibleP7",];
var a;
var docRef;

//Leer Datos y Visualizar Productos



	//Agregar Productos

function IngresarP() {

var Producto = document.getElementById("IDA").value;
var Nombre = document.getElementById("NombreA").value;
var Precio= document.getElementById("PrecioA").value;
var Disponibilidad = document.getElementById("DisponibilidadA").value;

docRef = db.collection("Lista").doc(Producto);
docRef.get().then(function(doc){
	if (doc.exists) {
		console.log("El producto ingresado ya se encuentra registrado");
	}else{
		
		db.collection("Lista").doc(Producto).set({
    ID:Producto,
    Name:Nombre,
    Price:Precio,
    Availability:Disponibilidad
    
 
  })
	.then(function () {
		console.log("Producto registrado con exito");
	})
	.catch(function(error){
		console.error("Error al registrar el producto. Codigo de error: ",error);
	});
	}
	}).catch(function(error){
		console.log("Error en la consulta. Codigo de error: ",error);
	});


 }

  //Modificar Producto

function ModificarP() {

var Producto = document.getElementById("IDM").value;
var Nombre = document.getElementById("NombreM").value;
var Precio= document.getElementById("PrecioM").value;
var Disponibilidad = document.getElementById("DisponibilidadM").value;

docRef = db.collection("Lista").doc(Producto);
docRef.get().then(function(doc){
	if (doc.exists) {
			db.collection("Lista").doc(Producto).set({
    ID:Producto,
    Name:Nombre,
    Price:Precio,
    Availability:Disponibilidad
    
 
  })
	.then(function () {
		console.log("Producto modificado con exito");
	})
	.catch(function(error){
		console.error("Error al registrar el producto. Codigo de error: ",error);
	});
	}else{
		
	console.log("El producto ingresado no se encuentra registrado");
	}
	}).catch(function(error){
		console.log("Error en la consulta. Codigo de error: ",error);
	});


		
}

//Eliminar Productos
function EliminarP() {
	var Producto = document.getElementById('IDP').value;
	db.collection("Lista").doc(Producto).delete().then(function(){
		console.log("EL producto ha sido eliminado");
	}).catch(function(error){
		console.error("Error al elminar producto. Codigo de error: ",error);
	});
}


	db.collection("Lista").where("ID", "==", "1")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc);
             // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var A = doc.data();
            
            
            
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
           
    });
function Visibles() {
	document.getElementById('Visible').setAttribute("class","card border-secondary mb-3 fixed-top visible");

}
function Login() {
	var Usuario = document.getElementById('Usuario').value;
	var Contraseña = document.getElementById('Contraseña').value;;
	if ((Usuario == "Charcuteria") && (Contraseña == "4123Char")) {
		location.href = "https://camsolutions.github.io/SCliente1/Interfaz.html"
	}
	else{ alert("Usuario y/o Contraseña Incorrecta");
}
}
