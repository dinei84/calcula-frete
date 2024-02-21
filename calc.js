document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("valor").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
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

    document.getElementById("botao").addEventListener("click", function() {
        clicar();
    });

    document.getElementById("clean").addEventListener("click", function() {
        limparCampos();
    });
});

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
    var ajt4 = ajt3 * (1 - 0.018);
    var adianta = ajt4.toFixed(2);

    document.getElementById('res').value = res.toFixed(2);
    document.getElementById('adianta').value = adianta;
}

function limparCampos() {
    document.getElementById('valor').value = "";
    document.getElementById('pedagio').value = "";
    document.getElementById('peso').value = "";
    document.getElementById('res').value = "";
    document.getElementById('adianta').value = "";
}
