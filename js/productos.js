'use strict';

/*
 PREISS, JULIAN
 */

let aProductos = [
	{
		nombre: 'Libro Soda Stereo - Colección especial',
        artista: 'Soda Stereo',
		imagen: 'imagenes/libro-soda-mobile.png',
		descripcion: 'Colección completa de partituras de la banda',
		precio: 2700,
		id: 1,
        modal: 'primero',
        categoria: 'destacado',
	},
	{
		nombre: 'Guitarra rock - 10 canciones esenciales',
        artista: 'varios',
		imagen: 'imagenes/libro-guitarra.jpg',
		descripcion: '10 tablaturas de guitarra de temas clásicos del rock nacional',
		precio: 1200,
		id: 2,
        modal: 'segundo',
        categoria: 'destacado',
	},
	{
		nombre: 'Indio Solari - 5 tutoriales de guitarra',
        artista: 'Indio Solari',
		imagen: 'imagenes/indio-solari.jpg',
		descripcion: 'Videolecciones de melodía y acompañamiento para guitarra',
		precio: 300,
		id: 3,
        modal: 'tercero',
        categoria: 'destacado',
	},
	{
		nombre: 'Spinetta exactas - Full album Score',
        artista: 'Spinetta',
		imagen: 'imagenes/disco-spinetta.jpg',
		descripcion: 'Full Score para banda del álbum Exactas por L.A. Spinetta',
		precio: 1700,
		id: 4,
        modal: 'cuarto',
        categoria: 'destacado',
	},
	{
		nombre: 'Fito Paez - A pedido',
        artista: 'Fito Paez',
		imagen: 'imagenes/fito.jpg',
		descripcion: 'Una transcrpción de canción de Fito Paez a elección (Escribir la canción solicitada en los comentarios al realizar la compra).',
		precio: 500,
		id: 5,
        modal: 'quinto',
        categoria: 'destacado',
	},
    {
		nombre: 'Alfonsina y el Mar - Arreglo de guitarra',
        artista: 'Mercedes Sosa',
		imagen: 'imagenes/alfonsina-2x.jpg',
		descripcion: 'Arreglo de guitarra de la canción Alfonsina y el mar en el arreglo de la versión interpretada por Mercedes Sosa',
		precio: 250,
		id: 6,
        modal: 'sexto',
        categoria: 'producto',
	},
    {
		nombre: 'Alta Suciedad(Andrés Calamaro) - Tablatura para guitarra',
        artista: 'Andres Calamaro',
		imagen: 'imagenes/andres-calamaro-2x.jpg',
		descripcion: 'Transcripción para guitarra de la canción Alta Suciedad con tablatura incluída',
		precio: 200,
		id: 7,
        modal: 'septimo',
        categoria: 'recomendado',
	},
    {
		nombre: 'Bandalos Chinos - 3 videolecciones',
        artista: 'Bandalos Chinos',
		imagen: 'imagenes/bandalos-chinos-2x.jpg',
		descripcion: 'Tres videolecciones en Batería, guitarra y bajo para las canciones Departamento, Super V y el Club de la Montaña',
		precio: 800,
		id: 8,
        modal: 'octavo',
        categoria: 'recomendadodos',
	},
    {
		nombre: 'Litto Nebbia - Viento dile a la lluvia',
        artista: 'Litto Nebbia',
		imagen: 'imagenes/litto-nebbia-2x.jpg',
		descripcion: 'Transcripción para guitarra de la canción Viento Dile a la Lluvia cen la versión de Litto Nebbia como solista',
		precio: 100,
		id: 9,
        modal: 'noveno',
        categoria: 'recomendado',
	},
    {
		nombre: 'Edmundo Rivero - 10 arreglos para guitarra',
        artista: 'Edmundo Rivero',
		imagen: 'imagenes/rivero-2x.jpg',
		descripcion: 'Transcripción para guitarra de 10 temas clásicos de Edmundo Rivero. Se incluyen también ejercicios de marcato y arpegios.',
		precio: 1700,
		id: 10,
        modal: 'decimo',
        categoria: 'recomendado',
	},
    {
		nombre: 'Cantatas de puentes amarillos',
        artista: 'Spinetta',
		imagen: 'imagenes/cantata-2x.jpg',
		descripcion: 'Lead Sheet de la canción Cantata de puentes amarillos de Luis Alberto Spinetta',
		precio: 1700,
		id: 11,
        modal: 'once',
        categoria: 'recomendadodos',
	},
    {
		nombre: 'Los dinosaurios - Charly García',
        artista: 'Charly Garcia',
		imagen: 'imagenes/dinosaurios-2x.jpg',
		descripcion: 'Transcripción de piano de la canción Los Dinosaurios',
		precio: 300,
		id: 12,
        modal: 'doce',
        categoria: 'recomendadodos',
	},
    {
		nombre: 'Sueter - Amanece en la ruta (Full Score)',
        artista: 'Sueter',
		imagen: 'imagenes/sueter-2x.jpg',
		descripcion: 'Full Score de la canción mas famosa del conjunto sueter',
		precio: 500,
		id: 13,
        modal: 'trece',
        categoria: 'productodos',
	},
    {
		nombre: 'Maria, maria versionado por Mercedes Sosa',
        artista: 'Mercedes Sosa',
		imagen: 'imagenes/cuadernomercedes-2x.jpg',
		descripcion: 'Partitura para guitarra, voz y piano de la canción Maria, Maria',
		precio: 350,
		id: 14,
        modal: 'catorce',
        categoria: 'producto',
	},
    {
		nombre: 'Clix modernos - Charly García (Full Score)',
        artista: 'Charly Garcia',
		imagen: 'imagenes/modernclix-2x.jpg',
		descripcion: 'Full score para banda del disco que revolucionó el sonido del Rock argentino',
		precio: 2000,
		id: 15,
        modal: 'quince',
        categoria: 'productodos',
	},
    {
		nombre: 'Tres agujas - transcripción de piano',
        artista: 'Fito Paez',
		imagen: 'imagenes/tresagujas-2x.jpg',
		descripcion: 'Transcripción para piano de la canción Tres Agujas interpretada por Fito y L.A Spinetta',
		precio: 270,
		id: 16,
        modal: 'dieciseis',
        categoria: 'producto',
	},
    {
		nombre: 'Mercedes Sosa - Videolecciones - Técnica de bombo leguero',
        artista: 'Fito Paez',
		imagen: 'imagenes/mercedes-2x.jpg',
		descripcion: '5 videos de principiante avanzado para aprender y/o mejorar en la técnica del bombo',
		precio: 2430,
		id: 17,
        modal: 'diecisiete',
        categoria: 'productodos',
	},
    {
		nombre: 'Spinetta - tablaturas del álbum Artaud',
        artista: 'Spinetta',
		imagen: 'imagenes/artaud-2x.jpg',
		descripcion: 'Todas las tablaturas del álbum Artaud de Luis Alberto Spinetta',
		precio: 1700,
		id: 18,
        modal: 'dieciocho',
        categoria: 'producto',
	},
    {
		nombre: 'Fito Paez - Circo Beat - Arreglos para piano solo',
        artista: 'Fito Paez',
		imagen: 'imagenes/circobeat-2x.jpg',
		descripcion: 'Arreglos para piano de las canciones de Circo Beat(Fito Paez)',
		precio: 2250,
		id: 19,
        modal: 'diecinueve',
        categoria: 'productodos',
	},
    {
		nombre: 'Colección Himnos del mundo - 100 himnos nacionales(25% OFF)',
        artista: 'Varios',
		imagen: 'imagenes/himnos.jpg',
		descripcion: 'Himnos nacionales de los cinco continentes arreglados para piano solo',
		precio: 8000,
		id: 20,
        modal: 'veinte',
        categoria: 'promocion',
	},
    {
		nombre: 'Masterclass Riffs de Patricio Rey para guitarra (70% OFF)',
        artista: 'Patricio Rey',
		imagen: 'imagenes/patriciorey.jpg',
		descripcion: 'Masterclass de 90 minutos de duración donde aprenderás a tocar los riffs más emblemáticos de Skay Belinson',
		precio: 500,
		id: 21,
        modal: 'veintiuno',
        categoria: 'promociondos',
	},
    {
		nombre: 'Lead Sheet Gato Barbieri Greatest Hits (20% OFF)',
        artista: 'Gato Barbieri',
		imagen: 'imagenes/barbieri.jpg',
		descripcion: 'Colección de 12 Lead Sheets del Gato Barbieri para saxo alto (Eb)',
		precio: 1000,
		id: 22,
        modal: 'veintidos',
        categoria: 'promocion',
	},
    {
		nombre: 'Método de Ukelele importado - Hal Leonard(40% OFF)',
        artista: 'Hal Leonard',
		imagen: 'imagenes/ukelele.jpg',
		descripcion: 'Método para aprender ukelele. A criterio de muchos, el mejor en el mercado.',
		precio: 900,
		id: 23,
        modal: 'veintitres',
        categoria: 'promociondos',
	},
    {
        nombre: 'Pack Charly Garcia',
        artista: 'Charly garcia',
        precio: 4000,
        id: 24,
        imagen: 'imagenes/charly.jpg',
    },
    {
        nombre: 'Pack Gustavo Cerati',
        artista: 'Gustavo Cerati',
        precio: 3100,
        id: 25,
        imagen: 'imagenes/cerati.jpg',
    },
    {
        nombre: 'Pack Spinetta',
        artista: 'Spinetta',
        precio: 6200,
        id: 26,
        imagen: 'imagenes/spinetta.jpg',
    },
    {
        nombre: 'Pack León Gieco',
        artista: 'Leon Gieco',
        precio: 1200,
        id: 27,
        imagen: 'imagenes/giecoartist.png',
    },
    {
        nombre: 'Pack Mercedes Sosa',
        artista: 'Mercedes Sosa',
        precio: 2500,
        id: 28,
        imagen: 'imagenes/sosa.png',
    },
    {
        nombre: 'Pack Miranda',
        artista: 'Miranda',
        precio: 1000,
        id: 29,
        imagen: 'imagenes/mirandaartist.png',
    },
    {
        nombre: 'Pack Fito Paez',
        artista: 'Fito Paez',
        precio: 4050,
        id: 30,
        imagen: 'imagenes/fitoartist.png',
    },
    {
        nombre: 'Pack Virus',
        artista: 'Virus',
        precio: 700,
        id: 31,
        imagen: 'imagenes/virus.jpg',
    },
];

let carrito = {
	cantidadDeProductos: 0,
	total: 0,
	productos: [],
	cantidad: [],
};

const d = document;

let muestradatos = d.querySelector('.minicarrito');

let muestrahorizontal = d.querySelector('#indexprimero');

let muestraverticalindex = d.querySelector('#indextercero');

let muestraverticalpromo = d.querySelector('#promo');

let seccionarticulos = d.querySelector('#seccionarticulos')

for (let producto of aProductos) {



    let divarticulo = d.createElement('div')	
    
    if (producto.categoria == 'destacado'){
    divarticulo.className = "col";
	muestrahorizontal.appendChild(divarticulo);
    }

    let anchor = d.createElement('a');
    anchor.href = producto.modal;
    anchor.setAttribute("role", "button");
    anchor.dataset.toggle = 'modal';
    anchor.dataset.target = '#' + producto.modal;

    if (producto.categoria == 'destacado'){
        divarticulo.appendChild(anchor);
        }

    if (producto.categoria == 'recomendado'){
    muestraverticalindex.firstElementChild.appendChild(anchor);
    }

    if (producto.categoria == 'recomendadodos'){
        muestraverticalindex.firstElementChild.nextElementSibling.appendChild(anchor);
    }

    if (producto.categoria == 'promocion'){
        muestraverticalpromo.firstElementChild.appendChild(anchor);
    }

    if (producto.categoria == 'promociondos'){
        muestraverticalpromo.firstElementChild.nextElementSibling.appendChild(anchor);
    }

    let figurem = d.createElement('figure');
    anchor.appendChild(figurem);

	let imagen = d.createElement('img');
	imagen.src = producto.imagen;
	imagen.alt = producto.nombre;
	figurem.appendChild(imagen);

    if (producto.categoria == 'recomendadodos' || producto.categoria == 'recomendado' || producto.categoria == 'producto' || producto.categoria == 'productodos' || producto.categoria == 'promocion' || producto.categoria == 'promociondos'){
        imagen.className = "img-fluid py-2";
    }

    let figcaptionm = d.createElement('figcaption');   
    figcaptionm.innerHTML = producto.nombre; 
    figurem.appendChild(figcaptionm);




		let div = d.createElement('div');
		div.className = 'modal fade';
        div.id = producto.modal;
        div.setAttribute("role", "dialog");
        div.setAttribute("aria-labelledby", producto.modal);
        div.setAttribute("aria-hidden", "true");
        div.setAttribute("tabindex", "-1");
		d.querySelector('.modales').appendChild(div);

        let divdos = d.createElement('div');
        divdos.className = "modal-dialog modal-dialog-centered"
        divdos.setAttribute("role", "document");
        div.appendChild(divdos)

        let divtres = d.createElement('div');
        divtres.className = "modal-content";
        divdos.appendChild(divtres);

        let divcuatro = d.createElement('div'); 
        divcuatro.className = "modal-header";
        divtres.appendChild(divcuatro);

        let h3 = d.createElement('h3');
        h3.innerHTML = producto.nombre;
        divcuatro.appendChild(h3);

        let buttonclose = d.createElement('button');
        buttonclose.type = 'button';
        buttonclose.className = 'close';
        buttonclose.dataset.dismiss = 'modal';
        buttonclose.setAttribute("aria-label", 'Close');
        divcuatro.appendChild(buttonclose);

        let spanclose = d.createElement('span');
        spanclose.setAttribute("aria-hidden", 'true');
        spanclose.innerHTML = "&times;";
        buttonclose.appendChild(spanclose);

        let divcuerpo = d.createElement('div'); 
        divcuerpo.className = "modal-body"
        divtres.appendChild(divcuerpo);
	
		let figure = d.createElement('figure');
		divcuerpo.appendChild(figure);	
	
		let img = d.createElement('img');
        img.src = producto.imagen;
        img.className = "img-fluid";
		figure.appendChild(img);
	
		let figcaption = d.createElement('figcaption');
		figcaption.innerHTML = producto.descripcion;
		figure.appendChild(figcaption);

        let precio = d.createElement('span');
        precio.innerHTML = "$" + producto.precio;
        divcuerpo.appendChild(precio);

        let divfooter = d.createElement('div'); 
        divfooter.className = "modal-footer"
        divtres.appendChild(divfooter);

        let buttonfootercomprar = d.createElement('button');
        buttonfootercomprar.type = 'button';
        buttonfootercomprar.className = "btn btn-primary comprar";
        buttonclose.dataset.dismiss = 'modal';
        buttonfootercomprar.innerHTML = "Agregar al carrito";
        buttonfootercomprar.dataset.dismiss = 'modal';
        divfooter.appendChild(buttonfootercomprar);

        let buttonfooterquitar = d.createElement('button');
        buttonfooterquitar.type = 'button';
        buttonfooterquitar.className = "btn btn-secondary";
        buttonfooterquitar.dataset.dismiss = 'modal';
        buttonfooterquitar.innerHTML = "Cerrar";
        divfooter.appendChild(buttonfooterquitar);


buttonfootercomprar.onclick = Comprar;


function Comprar() {

    let id = producto.id

    let verifindice = carrito.productos.indexOf(id);
    if(verifindice == -1) {
        carrito.productos.push(id);
        carrito.cantidad.push(1);
    } else {
        carrito.cantidad[verifindice]++;	
    }
    carrito.total = parseInt(carrito.total + producto.precio);
    carrito.cantidadDeProductos ++;	

}

if (producto.categoria == 'recomendado'){
    let anchorclone = anchor.cloneNode()
    seccionarticulos.firstElementChild.appendChild(anchorclone);

    let figureclone = figurem.cloneNode()
    anchorclone.appendChild(figureclone);

    let imagenclone = imagen.cloneNode()
    figureclone.appendChild(imagenclone);

    let figcaptionclone = figcaptionm.cloneNode()
    figcaptionclone.innerHTML = producto.nombre; 
    figureclone.appendChild(figcaptionclone);

}

if (producto.categoria == 'recomendadodos'){
    let anchorclone = anchor.cloneNode()
    seccionarticulos.firstElementChild.nextElementSibling.appendChild(anchorclone);

    let figureclone = figurem.cloneNode()
    anchorclone.appendChild(figureclone);

    let imagenclone = imagen.cloneNode()
    figureclone.appendChild(imagenclone);

    let figcaptionclone = figcaptionm.cloneNode()
    figcaptionclone.innerHTML = producto.nombre; 
    figureclone.appendChild(figcaptionclone);
}

if (producto.categoria == 'producto'){
    seccionarticulos.firstElementChild.appendChild(anchor);
}

if (producto.categoria == 'productodos'){
    seccionarticulos.firstElementChild.nextElementSibling.appendChild(anchor);
}

}

let minicarrito = d.querySelector('.minicarrito');

function ModalCarrito() {

    
    minicarrito.firstElementChild.remove();

    let ul = d.createElement('ul');
    minicarrito.appendChild(ul);

    //Display de los productos por separado en el minicarrito con su respectiva cantidad y subtotal.
    carrito.productos.forEach(function(valor, indice) {

        for (let producto in aProductos) {
            if (carrito.productos[indice] == aProductos[producto]['id']) {

                let liItemContenedor = d.createElement('li');
                liItemContenedor.className = "pastillacarrito";
                ul.appendChild(liItemContenedor);

                let miniatura = d.createElement('img');
                miniatura.src = aProductos[producto]['imagen'];
                miniatura.className = 'miniatura';
                liItemContenedor.appendChild(miniatura);
                
                let nombreprod = d.createElement('span');
                nombreprod.innerHTML = aProductos[producto]['nombre'];
                liItemContenedor.appendChild(nombreprod);

                let valorproducto = carrito.cantidad[indice] * aProductos[producto]['precio'];

                let precioprod = d.createElement('span');
                precioprod.innerHTML = "Tenes " + carrito.cantidad[indice] + " unidades. El subtotal es " + valorproducto;
                precioprod.style.marginBottom = "7px";
                liItemContenedor.appendChild(precioprod);

                let buttonquitar = d.createElement('button')
                buttonquitar.className = 'btn btn-secondary quitar';
                buttonquitar.innerHTML = 'Quitar';
                buttonquitar.style.marginBottom = "15px";
                buttonquitar.dataset.id = aProductos[producto]['id'];
                liItemContenedor.appendChild(buttonquitar);

                buttonquitar.onclick = () => {

                    let id = aProductos[producto]['id'];
                               
                    let verifindice = carrito.productos.indexOf(id);
                    if(verifindice != -1 && carrito.cantidad[verifindice] != 1){
                        carrito.cantidad[verifindice]--;
                        carrito.total = parseInt(carrito.total - aProductos[producto]['precio']);
                        carrito.cantidadDeProductos --;	
                    }else if(verifindice != -1 && carrito.cantidad[verifindice] == 1) {
                            carrito.total = parseInt(carrito.total - aProductos[producto]['precio']);
                            carrito.cantidadDeProductos --;	
                            carrito.productos.splice(verifindice, 1);
                            carrito.cantidad.splice(verifindice, 1)
                        }
                
                	muestradatos.firstElementChild.firstElementChild.nextElementSibling.innerHTML = 'Hay ' + carrito.cantidadDeProductos + ' productos en el carrito';
		            muestradatos.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = 'El total a pagar es ' + carrito.total;
                    ul.remove();
                    let pmuestra = d.createElement('p');
                    pmuestra.innerHTML = 'No hay productos en el carrito';
                    minicarrito.appendChild(pmuestra);
                    ModalCarrito();
                
                }

            }
        }


    });

    let liItems = d.createElement('li');
    liItems.innerHTML = 'Hay ' + carrito.cantidadDeProductos + ' productos en el carrito';
    ul.appendChild(liItems);
    
    
    let liTotal = d.createElement('li');
    liTotal.innerHTML = 'El total a pagar es ' + carrito.total;
    ul.appendChild(liTotal);	

}
let minicarritobutton = d.querySelector('#minicarrito');
minicarritobutton.onclick = ModalCarrito;

let llevarapago = d.querySelector('.llevarapago');

llevarapago.onclick = ModalPago;

function ModalPago() {

    let selectorpago = d.querySelector('.payment');

    selectorpago.firstElementChild.remove();

    let div = d.createElement('div');
    selectorpago.appendChild(div);

	let ul = d.createElement('ul');
    ul.className = "list-group";
	div.appendChild(ul);

	let liItems = d.createElement('li');
	liItems.innerHTML = 'Hay ' + carrito.cantidadDeProductos + ' productos en el carrito';
    liItems.className = "list-group-item";
	ul.appendChild(liItems);

	let liTotal = d.createElement('li');
	liTotal.innerHTML = 'El total a pagar es ' + carrito.total;
    liTotal.className = "list-group-item";
	ul.appendChild(liTotal);


	if (carrito.total != 0) {

	let form = d.createElement('form');
	div.appendChild(form);

	let fieldsetpersonales = d.createElement('fieldset');
	form.appendChild(fieldsetpersonales);

	let legendpersonales = d.createElement('legend');
	legendpersonales.innerHTML = "Información personal";
	fieldsetpersonales.appendChild(legendpersonales);

	let labelNombre = d.createElement('label');
	labelNombre.for = "nombre";
	labelNombre.innerHTML = 'Nombre';
	fieldsetpersonales.appendChild(labelNombre);

	let inputNombre = d.createElement('input');
	inputNombre.type = 'text';
	inputNombre.id = 'nombre';
	inputNombre.required = true;
	fieldsetpersonales.appendChild(inputNombre);

	let labelTelefono = d.createElement('label');
	labelTelefono.for = "celular";
	labelTelefono.innerHTML = 'Celular';
	fieldsetpersonales.appendChild(labelTelefono);

	let inputCel = d.createElement('input');
	inputCel.type = 'number';
	inputCel.id = 'celular';
	inputCel.required = true;
	fieldsetpersonales.appendChild(inputCel);	
	

	let labelEmail = d.createElement('label');
	labelEmail.for = "email";
	labelEmail.innerHTML = 'Email';
	fieldsetpersonales.appendChild(labelEmail);

	let inputEmail = d.createElement('input');
	inputEmail.type = 'email';
	inputEmail.id = 'email';
	fieldsetpersonales.appendChild(inputEmail);

	let fieldsetentrega = d.createElement('fieldset');
	form.appendChild(fieldsetentrega);

	let legendentrega = d.createElement('legend');
	legendentrega.innerHTML = "Datos de entrega"
	fieldsetentrega.appendChild(legendentrega);

	let labelCiudad = d.createElement('label');
	labelCiudad.for = "ciudad";
	labelCiudad.innerHTML = 'Ciudad de entrega';
	fieldsetentrega.appendChild(labelCiudad);

	let inputCiudad = d.createElement('input');
	inputCiudad.type = 'text';
	inputCiudad.id = 'ciudad';
	inputCiudad.required = true;
	fieldsetentrega.appendChild(inputCiudad);
	
	let labelDireccion = d.createElement('label');
	labelDireccion.for = "direccion";
	labelDireccion.innerHTML = 'Direccion';
	fieldsetentrega.appendChild(labelDireccion);

	let inputDireccion = d.createElement('input');
	inputDireccion.type = 'text';
	inputDireccion.id = 'direccion';
	inputDireccion.required = true;
	fieldsetentrega.appendChild(inputDireccion);

	let labelFecha = d.createElement('label');
	labelFecha.for = "fecha";
	labelFecha.innerHTML = 'Fecha de entrega';
	fieldsetentrega.appendChild(labelFecha);

	let inputFecha = d.createElement('input');
	inputFecha.type = 'date';
	inputFecha.id = 'fecha';
	inputFecha.required = true;
	fieldsetentrega.appendChild(inputFecha);

	let fieldsetpago = d.createElement('fieldset');
	form.appendChild(fieldsetpago);

	let legendpago = d.createElement('legend');
	legendpago.innerHTML = "Datos de pago"
	fieldsetpago.appendChild(legendpago);

	let labelPago = d.createElement('label');
	labelPago.innerHTML = 'Método de pago'
	fieldsetpago.appendChild(labelPago);

	let divpagouno = d.createElement('div');
	fieldsetpago.appendChild(divpagouno);

	let inputPago = d.createElement('input');
	inputPago.type = 'radio';
	inputPago.name = 'pagos';
	inputPago.value = 'debito';
	inputPago.required = true;
	inputPago.id = 'debito';
	divpagouno.appendChild(inputPago);

	let inputPagoLabel = d.createElement('label');
	inputPagoLabel.for = 'debito';
	inputPagoLabel.innerHTML = 'Débito';
	inputPagoLabel.className = 'inlineb';
	divpagouno.appendChild(inputPagoLabel);

	let divpagodos = d.createElement('div');
	fieldsetpago.appendChild(divpagodos);

	let inputPagodos = d.createElement('input');
	inputPagodos.type = 'radio';
	inputPagodos.name = 'pagos';
	inputPagodos.value = 'efectivo';
	inputPagodos.id = 'efectivo';
	divpagodos.appendChild(inputPagodos);

	let inputPagodosLabel = d.createElement('label');
	inputPagodosLabel.for = 'efectivo';
	inputPagodosLabel.innerHTML = 'Efectivo';
	inputPagodosLabel.className = 'inlineb';
	divpagodos.appendChild(inputPagodosLabel);


	let labelTarjeta = d.createElement('label');
	labelTarjeta.for = "tarjeta";
	labelTarjeta.innerHTML = 'Nro de tarjeta';
	labelTarjeta.style.display = 'none';
	fieldsetpago.appendChild(labelTarjeta);

	let inputTarjeta = d.createElement('input');
	inputTarjeta.type = 'number';
	inputTarjeta.id = "tarjeta";
	inputTarjeta.style.display = 'none';
	fieldsetpago.appendChild(inputTarjeta);

	let inputEnviar = d.createElement('input');
	inputEnviar.type = 'submit';
	inputEnviar.value = 'Pagar';
	inputEnviar.className = 'btn btn-primary';
	form.appendChild(inputEnviar);


	inputPago.onclick = function(){
		inputTarjeta.style.display = 'block';
		labelTarjeta.style.display = 'block';
		inputTarjeta.required = true;		
	}

	inputPagodos.onclick = function(){
		labelTarjeta.style.display = 'none';
		inputTarjeta.style.display = 'none';
		inputTarjeta.required = false;	
	}

	inputEnviar.onclick = function() {
		if (inputNombre.value.length == 0) {
			inputNombre.style.border = "1px solid red";
		}
		if (inputCel.value.length == 0) {
			inputCel.style.border = "1px solid red";
		}
		if (inputCiudad.value.length == 0) {
			inputCiudad.style.border = "1px solid red";
		}
		if (inputDireccion.value.length == 0) {
			inputDireccion.style.border = "1px solid red";
		}
		if (inputFecha.value.length == 0) {
			inputFecha.style.border = "1px solid red";
		}
		if(inputPago.checked == false && inputPagodos.checked == false) {
			legendpago.style.color = "red";
		}

		if(inputPago.checked && inputTarjeta.value.length == 0){
			inputTarjeta.style.border = "1px solid red";
		}
		
	}
}

}
function Comprar(objetoartista) {
    let id = objetoartista.id
    let verifindice = carrito.productos.indexOf(id);
    if(verifindice == -1) {
        carrito.productos.push(id);
        carrito.cantidad.push(1);
    } else {
        carrito.cantidad[verifindice]++;	
    }
    carrito.total = parseInt(carrito.total + objetoartista.precio);
    carrito.cantidadDeProductos ++;	
}

let charlygarcia = d.querySelector('#modalunopacks');
let objetocharly = aProductos[23] 
let compracharly = d.querySelector('.compracharly');
compracharly.onclick = function() {
    Comprar(objetocharly);
}

let gustavocerati = d.querySelector('#modaldospacks');
let objetocerati = aProductos[24] 
let compracerati = d.querySelector('.compracerati');
compracerati.onclick = function() {
    Comprar(objetocerati);
}

let spinetta = d.querySelector('#modaltrespacks');
let objetospinetta = aProductos[25] 
let compraspinetta = d.querySelector('.compraspinetta');
compraspinetta.onclick = function() {
    Comprar(objetospinetta);
}

let gieco = d.querySelector('#modaltrespacks');
let objetogieco = aProductos[26] 
let compragieco = d.querySelector('.compragieco');
compragieco.onclick = function() {
    Comprar(objetogieco);
}

let sosa = d.querySelector('#modaltrespacks');
let objetososa = aProductos[27] 
let comprasosa = d.querySelector('.comprasosa');
comprasosa.onclick = function() {
    Comprar(objetososa);
}

let miranda = d.querySelector('#modaltrespacks');
let objetomiranda = aProductos[28] 
let compramiranda = d.querySelector('.compramiranda');
compramiranda.onclick = function() {
    Comprar(objetomiranda);
}

let fito = d.querySelector('#modaltrespacks');
let objetofito = aProductos[29] 
let comprafito = d.querySelector('.comprafito');
comprafito.onclick = function() {
    Comprar(objetofito);
}

let virus = d.querySelector('#modaltrespacks');
let objetovirus = aProductos[30] 
let compravirus = d.querySelector('.compravirus');
compravirus.onclick = function() {
    Comprar(objetovirus);
}