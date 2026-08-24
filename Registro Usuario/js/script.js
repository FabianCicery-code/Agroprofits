

        const formulario = document.getElementById("registroForm");

        formulario.addEventListener("submit", function(event) {

            event.preventDefault();

            const password =
                document.getElementById("password").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {

                alert("Las contraseñas no coinciden.")

                return
            }

            alert("¡Registro exitoso! Bienvenido a AgroProfits.");

            formulario.reset();

        });
