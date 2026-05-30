const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value;
    const confirmarSenha = document.getElementById("confirmarPassword").value;
    const telefone = document.getElementById("telefone").value.trim();
    const categoria = document.getElementById("interesse").value;

    if (
        nome === "" ||
        email === "" ||
        senha === "" ||
        confirmarSenha === "" ||
        telefone === ""
    ) {

        alert("Preencha todos os campos obrigatórios!");
        return;

    }

    if (!email.includes("@") || !email.includes(".")) {

        alert("Digite um e-mail válido!");
        return;

    }

    if (senha.length < 6) {

        alert("A senha deve possuir no mínimo 6 caracteres!");
        return;

    }

    if (senha !== confirmarSenha) {

        alert("As senhas não coincidem!");
        return;

    }

    const usuario = {

        nome: nome,
        email: email,
        senha: senha,
        telefone: telefone,
        categoria: categoria

    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Conta criada com sucesso!");

    window.location.href = "../CLIENTE/paginaInicialCliente.html";

});
