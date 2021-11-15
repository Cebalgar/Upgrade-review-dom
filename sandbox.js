//1.1 Basandote en el array siguiente, crea una lista ul > li /dinámicamente en el html que imprima cada uno de los paises.

const paises = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const listaNode= document.createElement("ul");
document.body.appendChild(listaNode);


paises.forEach(item=>{
    listaNode.innerHTML += `<li>${item}</li>`;
})


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let parent= document.querySelector("body");
let child = document.querySelector(".fn-remove-me");
parent.removeChild(child);

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

//const divAtributo= document.body.getAttribute("printHere");
const divAtributo= document.querySelector('[data-function = "printHere"]');
const listaUl = document.createElement("ul");
divAtributo.appendChild(listaUl);


cars.forEach(car=>{
     listaUl.innerHTML += `<li>${car}</li>`;
})

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


let newDiv1= document.createElement("div");
document.body.appendChild(newDiv1);
newDiv1.setAttribute("class", "segundo");



const imag = countries.map(country=>`
<div class="btn">
<h4>${country.title}</h4>
<img src="${country.imgUrl}">

</div>`) .join("");

newDiv1.innerHTML=imag;



//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.


const divImagen5 = document.querySelectorAll(".btn")[4];
divImagen5.setAttribute("id","div5");
const botonFoto5 = document.createElement("button");
botonFoto5.innerHTML="Eliminar"
divImagen5.appendChild(botonFoto5);
botonFoto5.setAttribute("id", "Foto5")

function borrarUltimo(){

	const elem5 =document.getElementById("div5");
	elem5.remove();

}


	document.getElementById("Foto5").addEventListener("click",borrarUltimo)




//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

const divImagen1 = document.querySelectorAll(".btn")[0];
divImagen1.setAttribute("id","div1");
const botonFoto1 = document.createElement("button");
botonFoto1.innerHTML="Eliminar"
divImagen1.appendChild(botonFoto1);
botonFoto1.setAttribute("id", "Foto1")

function borrarPrimero(){

	const elem1=document.getElementById("div1");
	
	elem1.remove();

}


	document.getElementById("Foto1").addEventListener("click",borrarPrimero)


const divImagen2 = document.querySelectorAll(".btn")[1];
divImagen2.setAttribute("id","div2");
const botonFoto2 = document.createElement("button");
botonFoto2.innerHTML="Eliminar"
divImagen2.appendChild(botonFoto2);
botonFoto2.setAttribute("id", "Foto2")

function borrarSegundo(){

	const elem2 =document.getElementById("div2");
	elem2.remove();

}

document.getElementById("Foto2").addEventListener("click",borrarSegundo)




const divImagen3 = document.querySelectorAll(".btn")[2];
divImagen3.setAttribute("id","div3");
const botonFoto3 = document.createElement("button");
botonFoto3.innerHTML="Eliminar"
divImagen3.appendChild(botonFoto3);
botonFoto3.setAttribute("id","Foto3")

function borrarTercero(){

	const elem3 =document.getElementById("div3");
	elem3.remove();

}

document.getElementById("Foto3").addEventListener("click",borrarTercero)


const divImagen4 = document.querySelectorAll(".btn")[3];
divImagen4.setAttribute("id","div4");
const botonFoto4 = document.createElement("button");
botonFoto4.innerHTML="Eliminar"
divImagen4.appendChild(botonFoto4);
botonFoto4.setAttribute("id","Foto4")


function borrarCuarto(){

	const elem4 =document.getElementById("div4");
	elem4.remove();

}

	document.getElementById("Foto4").addEventListener("click",borrarCuarto)
