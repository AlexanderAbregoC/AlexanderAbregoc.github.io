function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}
function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}
function login() {
    // Aquí puedes agregar la lógica de autenticación
    // Por simplicidad, se omite aquí y se asume que el inicio de sesión es exitoso
    alert('Iniciando sesión...');
    window.location.href = 'index00.html'; // Redirige al usuario a la página principal
    return false; // Evita que se envíe el formulario
}
function register() {
    // Aquí puedes agregar la lógica de registro, por ejemplo, con una API o base de datos
    // Por simplicidad, se omite aquí
    alert('Registrando...');
    showLoginForm(); // Muestra el formulario de inicio de sesión después del registro
    return false; // Evita que se envíe el formulario
}



document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // You can add validation logic here before submitting the form
    // For example, checking if all required fields are filled
    
    // Simulate submission (replace with actual submission logic)
    alert('¡Pago realizado con éxito!');
  });
  



  function changeView() {
    var signup = document.getElementById("signIn");
    var signIn = document.getElementById("signUp");

    signup.classList.toggle("d-none");
    signIn.classList.toggle("d-none");
}

// signUp
function signUp() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var mobile = document.getElementById("mobile");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var gender = document.getElementById("gender");

    var form = new FormData();
    form.append("f", fname.value);
    form.append("l", lname.value);
    form.append("m", mobile.value);
    form.append("e", email.value);
    form.append("p", password.value);
    form.append("g", gender.value);

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.status == 200 & request.readyState == 4) {
            var response = request.responseText;

            // alert(response);
            if (response == "success") {
                document.getElementById("msg").innerHTML = "Registration SuccessFull";
                document.getElementById("msg").className = "alert alert-success";
                document.getElementById("msgDiv").className = "d-block";
            } else {
                document.getElementById("msg").innerHTML = response;
                document.getElementById("msgDiv").className = "d-block";
            }
        }
    };

    request.open("POST", "signupProcess/signupProcess.php", true);
    request.send(form);
}

// signIn
function signIn() {
    var email = document.getElementById("email2");
    var password = document.getElementById("password2");
    var rememberMe = document.getElementById("rememberMe");

    var form = new FormData();
    form.append("e", email.value);
    form.append("p", password.value);
    form.append("r", rememberMe.checked);

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.status == 200 & request.readyState == 4) {
            var response = request.responseText;

            // alert(response);

            if (response == "success") {
                window.location = "home/home.php";
            } else {
                document.getElementById("msg2").innerHTML = response;
                document.getElementById("msgDiv2").className = "d-block";
            }
        }
    }
    request.open("POST", "signupProcess/signinProcess.php", true);
    request.send(form);
}

// Forgot Password
var ForgotPasswordModal;

function forgotPassword() {
    var email = document.getElementById("email2");

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.status == 200 & request.readyState == 4) {
            var text = request.responseText;

            // alert(text);
            if (text == "Success") {
                alert("Verification code has sent successfully. Please check your Email.");
                var login = document.getElementById("signIn");
                var FPassword = document.getElementById("FPassword");

                login.classList.toggle("d-none");
                FPassword.classList.toggle("d-none");
            } else {
                document.getElementById("msg2").innerHTML = text;
                document.getElementById("msgDiv2").className = "d-block"
            }
        }
    }

    request.open("GET", "signupProcess/ForgotPassword.php?e=" + email.value, true);
    request.send();
}

// reset Password
function resetPassword() {
    var email = document.getElementById("email2");
    var NewPassword = document.getElementById("np");
    var REPassword = document.getElementById("rnp");
    var Verification = document.getElementById("VCode");

    var form = new FormData();
    form.append("e", email.value);
    form.append("n", NewPassword.value);
    form.append("r", REPassword.value);
    form.append("v", Verification.value);

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.status == 200 & request.readyState == 4) {
            var response = request.responseText;

            // alert(response);
            if (response == "Success") {
                var login = document.getElementById("signIn");
                var FPassword = document.getElementById("FPassword");

                FPassword.classList.toggle("d-none");
                login.classList.toggle("d-none");
                alert("Password updated successfully.")
            } else {
                document.getElementById("msg3").innerHTML = text;
                document.getElementById("msgDiv3").className = "d-block"
            }
        }
    }

    request.open("POST", "signupProcess/ResetPasswordProcess.php", true);
    request.send(form);
}



