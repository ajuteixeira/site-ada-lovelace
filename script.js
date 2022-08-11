document.getElementById("sendButton").addEventListener("click", validateForm);

function validateForm() {
  if (document.getElementById("user-name").value != "" && document.getElementById("user-email").value != "") {
    alert("Prontinho! Seu email foi cadastrado com sucesso em nossa newsletter! :)");
  } else {
    alert("Por favor, preencha os campos corretamente!");
  }

}
