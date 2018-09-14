

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

//Variables Productos
var b=["Producto1","Producto2","Producto3","Producto4","Producto5","Producto6","Producto7",];
var c=["PrecioP1","PrecioP2","PrecioP3","PrecioP4","PrecioP5","PrecioP6","PrecioP7",];
var d=["DisponibleP1","DisponibleP2","DisponibleP3","DisponibleP4","DisponibleP5","DisponibleP6","DisponibleP7",];
var a;
//Leer Datos
for (var i = 0 ; i = b.length; i++) {
	db.collection("ListaP").doc("Producto1")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        a = doc;
        getElementById(b[i]).innerHTML = a.Name;
		getElementById(c[i]).innerHTML = a.Price;
		getElementById(d[i]).innerHTML = a.Availability;

    });
}

	//Agregar Productos

function IngresarP(NProducto,Nombre,Precio,Disponibilidad) {
	

db.collection("ListaP").doc(NProducto).set({
    Name:Nombre,
    Price:Precio,
    Availability:Disponibilidad
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}

//Eliminar Productos

function EliminarP(Nombre) {
	
}