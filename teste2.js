// Obter elementos do modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");

// Quando o usuário clicar no botão, abra o modal
btn.onclick = function() {
    modal.style.display = "block";    
}

// Quando o usuário clicar no "x", feche o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, feche-o
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Adiciona um evento de envio ao formulário
document.getElementById("form").onsubmit = function(event) {
    event.preventDefault(); // Impede o envio do formulário e o recarregamento da página
    var name = document.getElementById("name").value;
    var idade = document.getElementById("idade").value;
    var sexo = document.getElementById("sexo").value;
    var residencia = document.getElementById("residencia").value;
    console.log("Nome:", name);
    console.log("Idade:", idade);
    console.log("Sexo:", sexo);
    console.log("Residencia:", residencia); // Exibe o nome no console
    modal.style.display = "none"; // Fecha o modal
};