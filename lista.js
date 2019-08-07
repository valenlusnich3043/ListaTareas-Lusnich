var lista = document.getElementById("lista"),
		textojs = document.getElementById("textojs"),
		botonjs = document.getElementById("botonjs");

var agregarTarea = function(){
	  tarea = textojs.value,
		tareanueva = document.createElement("li"),
		anclali = document.createElement("a"),
  	contenido = document.createTextNode(tarea);

		if (tarea === "") {
			textojs.setAttribute("placeholder");
		}

		anclali.appendChild(contenido);

		tareanueva.appendChild(anclali);

		lista.appendChild(tareanueva);

		textojs.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};

	var eliminartarea = function(){
		this.parentNode.removeChild(this);
	};

	botonjs.addEventListener("click", agregarTarea);

	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eliminartarea);
}
