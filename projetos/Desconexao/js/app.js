var codigosInformados = [];

function adicionar() {
    var codigo = document.getElementById("cod").value;
    if (codigo == "") {
        alert("Informe o codigo!")
    } else if (codigosInformados.indexOf(codigo) > -1) {
        alert("Codigo " + codigo + " já foi informado.");
    } else {
        codigosInformados.push(codigo);
        document.getElementById("txtCodigos").innerHTML = codigosInformados;
        document.getElementById("cod").value = "";
        document.getElementById("cod").focus();

        /*
        // METODO DE IMPRESSAO PELA TAG P
        // Buscar elemento pai
        var elemento_pai = document.body;
        // Criar elemento
        var paragrado = document.createElement('p');
        paragrado.className = "container text-white";
        // Criando o nó de texto de outra forma
        paragrado.textContent = codigosInformados; // .pop() zimprime o ultimo
        // Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
        elemento_pai.appendChild(paragrado);
        */
    }
}