// Adiciona um ouvinte de evento para a tecla "Enter" nos campos de entrada
document.getElementById("valor").addEventListener("keyup", function(event) {
    // Verifica se a tecla pressionada é a tecla "Enter"
    if (event.key === "Enter") {
        // Chama a função clicar() quando a tecla "Enter" for pressionada
        clicar();
    }
});

document.getElementById("pedagio").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        clicar();
    }
});

document.getElementById("peso").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        clicar();
    }
});

// Função para calcular
function clicar() {
    var valor = parseFloat(document.getElementById('valor').value);
    var pedagio = parseFloat(document.getElementById('pedagio').value);
    var peso = parseFloat(document.getElementById('peso').value);
    
    var pcd = pedagio ? pedagio / peso : 0;
    var ajt1 = pcd * 1000;
    var res = valor - ajt1;
    var valsdesc = valor * peso;
    var vsdsa = res * peso;
    var ajt2 = vsdsa / 1000;
    var ajt3 = ajt2 * 0.7;
    var adianta = ajt3.toFixed(2);

    document.getElementById('res').value = res.toFixed(2);
    document.getElementById('adianta').value = adianta;
}
