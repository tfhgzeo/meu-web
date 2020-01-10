function currentUser() {
    try {
        let u = firebase.auth().currentUser;
        return u.email;
    } catch (e) {
        return e;
    }

}

function login() {
    console.log("function login(){...");
    try {

        let email = document.getElementById("user").value;
        let senha = document.getElementById("passwd").value;


        if (email.length == 0) {
            alert("digite um email");
            return false;
        }

        if (senha.length == 0) {
            alert("digite um uma senha");
            return false;
        }

        firebase.auth().signInWithEmailAndPassword(email, senha).then(function (user) {
            console.log("firebase.auth().signInWithEmailAndPassword(email, senha).then(function(user){...");
            window.location.href = "menu.html";

        }).catch(function (error) {
            console.log("firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(error) {...");
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/wrong-password') {
                console.log(errorMessage);
                alert("Senha incorreta");

            }else if (errorCode == "auth/user-not-found"){
                console.log(errorMessage);
                alert("Usuario nao cadastrado")

            } else{
                console.log(errorMessage)
                alert(errorCode)
            }
        });

    } catch (e) {
        console.log(e);
    }
}

function mudarSenha() {

    var email = document.getElementById('email').value;

    firebase.auth().sendPasswordResetEmail(email).then(function () {
        alert('Pedido de alteracao de senha enviado!');
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/invalid-email') {
            alert("email informado invalido");
        } else if (errorCode == 'auth/user-not-found') {
            alert("email nao encontrado");
        }
    });
}

function logout() {
    try {
        firebase.auth().signOut();
        showCurrentUser(); //update lbUserLoggedIn label
    } catch (e) {
        alert(e);
    }
}

function showCurrentUser() {
    console.log("function showCurrentUser(){...");
    document.getElementById("lbUserLoggedIn").innerHTML = currentUser();
}