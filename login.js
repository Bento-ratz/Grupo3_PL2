let utilizadores = JSON.parse(localStorage.getItem("utilizadores"));

let alerta = '<div class="alert alert-danger txt_field alert-top" role="alert" id="alert" style="display: block;">' +
  'Username ou password incorretos' +
  '</div>'

function login() {
  event.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  let utilizador = utilizadores.find(u => u.username === username);

  if (!utilizador || utilizador.password !== password) {
    //alert('Nome de usuário ou senha inválidos');
    let pagina = document.getElementById('login');
    pagina.innerHTML += alerta;
    setTimeout(function () {
      let alertElement = document.getElementById('alert');
      alertElement.style.display = 'none';
    }, 3000);
    return;
  }

  localStorage.setItem("utilizadorLigado", JSON.stringify(utilizador));

  if (utilizador.role === "admin") {
    window.location.href = "#";
  } else {
    window.location.href = "Field1.html";
  }

}

document.getElementById("login").addEventListener("click", login);