

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

  var config = {
    apiKey: "AIzaSyCWiXpt0W0hBZwa8K8WNvp5pzYyPdJpqkg",
    authDomain: "documentacion-f199d.firebaseapp.com",
    databaseURL: "https://documentacion-f199d.firebaseio.com",
    projectId: "documentacion-f199d",
    storageBucket: "documentacion-f199d.appspot.com",
    messagingSenderId: "615873173007"
  };
  firebase.initializeApp(config);


const db = firebase.firestore ();
 
//Variables Productos
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
		alert("El producto ingresado ya se encuentra registrado");
	}else{
		if (Producto !== "" && Nombre !== "" && Precio !== "" && Disponibilidad !== "") {
		db.collection("Lista").doc(Producto).set({
    ID:Producto,
    Name:Nombre,
    Price:Precio,
    Availability:Disponibilidad
    
 
  })
	.then(function () {
		console.log("Producto registrado con exito");
		alert("Producto registrado con exito");
	})
	.catch(function(error){
		console.error("Error al registrar el producto. Codigo de error: ",error);
		alert("Error al registrar el producto. Codigo de error: ",error);

	});
	
		}else{
			alert("Por favor ingrese todos los datos");
		}
	
	}

	}).catch(function(error){
		console.log("Error en la consulta. Codigo de error: ",error);
		alert("Error en la consulta. Codigo de error: ",error);

	});



 }

  //Modificar Producto

function ModificarP() {

var Producto = document.getElementById("IDM").value;
var Nombre = document.getElementById("NombreM").value;
var Precio= document.getElementById("PrecioM").value;
var Disponibilidad = document.getElementById("DisponibilidadM").value;
if (Producto == "") {
		alert("Ingrese el ID del Producto a Modificar");
	}
docRef = db.collection("Lista").doc(Producto);

	
docRef.get().then(function(doc){
	//Validando Campos Modificados
 var A = doc.data();
    if (Nombre == "") {
		Nombre = A.Name;
	}

	if (Precio == "") {
		Precio = A.Price;
	}

	if (Disponibilidad == "") {
		Disponibilidad = A.Availability;

	}
	
	//Modificando Datos


	if (doc.exists) {
	db.collection("Lista").doc(Producto).set({
    ID:Producto,
    Name:Nombre,
    Price:Precio,
    Availability:Disponibilidad
    
 
  })
	.then(function () {
		console.log("Producto modificado con exito");
		alert("Producto modificado con exito");
	})
	.catch(function(error){
		console.error("Error al registrar el producto. Codigo de error: ",error);
		alert("Error al registrar el producto. Codigo de error: ",error);

	});
	}else{
		
	console.log("El producto ingresado no se encuentra registrado");
	alert("El producto ingresado no se encuentra registrado");
	}
	}).catch(function(error){
		console.log("Error en la consulta. Codigo de error: ",error);
		alert("Error en la consulta. Codigo de error: ",error)
	});

		
}

//Eliminar Productos
function EliminarP() {
	var Producto = document.getElementById('IDP').value;
	a = Producto+"a";
    b = Producto+"b";
    c = Producto+"c";
    d = Producto+"d";

     e = Producto+"e";
     f = Producto+"f";
     g = Producto+"g";
     h = Producto+"h";

	document.getElementById(e).removeChild(a);
	document.getElementById(f).removeChild(b);
	document.getElementById(g).removeChild(c);
	document.getElementById(h).removeChild(d);

	db.collection("Lista").doc(Producto).delete().then(function(){
		console.log("EL producto ha sido eliminado con exito");
		alert("EL producto ha sido eliminado con exito");

	}).catch(function(error){
		console.error("Error al elminar producto. Codigo de error: ",error);
		alert("Error al elminar producto. Codigo de error: ",error);

	});
}

var C;
var D;
var a;
var b;
var c;
var d;
	db.collection("Lista")
    .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
             // doc.data() is never undefined for query doc snapshots.


      	
            

            console.log(doc.id, " => ", doc.data());
            var A = doc.data();
            var B = doc.id;
            
           
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
