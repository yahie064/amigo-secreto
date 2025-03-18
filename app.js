let amigos = []; 
let amigosSorteados = []; 

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();
    
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";  
    actualizarListaAmigos();  
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";  

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, añada algunos amigos.");
        return;
    }

    if (amigosSorteados.length === amigos.length) {
        asignarTextoElemento('#resultado', 'Todos los nombres fueron sorteados');
        return;
    }

    let amigoSorteado;
    
    do {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (amigosSorteados.includes(amigoSorteado));  

    amigosSorteados.push(amigoSorteado);  

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;  
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
