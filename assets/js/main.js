

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
    apiKey: "AIzaSyCXv4i0clNVzeKsF9dm2Fxjy4-7EY5zvpg",
    authDomain: "seccionm-8589b.firebaseapp.com",
    databaseURL: "https://seccionm-8589b.firebaseio.com",
    projectId: "seccionm-8589b",
    storageBucket: "seccionm-8589b.appspot.com",
    messagingSenderId: "946318383492"
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
            if (!(document.getElementById(B))) {
            var tr2 = document.createElement("tr");
            tr2.setAttribute("id",B);
          	var Table = document.getElementById('tabla');
            Table.appendChild(tr2);	
            }
            
            a = "td" +B+"a";
            b = "td" +B+"b";
            c = "td" +B+"c";
            d = "td" +B+"d";

         	if (!(document.getElementById(a))) {
         	var td1 = document.createElement("td");
            var p1 = document.createElement("p");
            p1.setAttribute("id",a);
           
            var td2 = document.createElement("td");
            var p2 = document.createElement("p");
            p2.setAttribute("id",b);
           

            var td3 = document.createElement("td");
            var p3 = document.createElement("p");
            p3.setAttribute("id",c)
          
            var td4 = document.createElement("td");
            var p4 = document.createElement("p");
            p4.setAttribute("id",d);
            

            
             td1.appendChild(p1);
             td2.appendChild(p2);
             td3.appendChild(p3);
             td4.appendChild(p4);

             document.getElementById(B).appendChild(td1);
            document.getElementById(B).appendChild(td2);
            document.getElementById(B).appendChild(td3);
            document.getElementById(B).appendChild(td4);
         	}
            


            
         	
         	document.getElementById(a).innerHTML = A.ID;
            document.getElementById(b).innerHTML = A.Name;
            document.getElementById(c).innerHTML = A.Price;
            document.getElementById(d).innerHTML = A.Availability;


      
       
           
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
