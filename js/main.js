
document.addEventListener("submit", (ev) => {
    ev.preventDefault()

    if (ev.target.nombre.value === "") {
        alert("Nombre incorrecta")
        return;
    }

    if (ev.target.apellidos.vacio === "") {
        alert("Apellido incorrecta")
        return;
    }

    if (!(ev.target.edad.value > 0 && ev.target.edad.value < 100)) {
        alert("Edad incorrecta")
        return;
    }

    if (ev.target.sexo.value !== "hombre" && ev.target.sexo.value !== "mujer") {
        alert("sexo incorrecto")
        return
    }

    if (!ev.target.socio.checked) {
        alert("¿Seguro q no te sientes socio?")
        return
    }

    if (ev.target.descripcion.value == "") {
        alert("¿Seguro q qieres dejar la descripcion vacía?")
        return
    }

    if (ev.target.telefono.value < 600000000 || ev.target.telefono.value >= 999999999) {
        alert("Numero erroneo de telefono")
        return
    }

    let email = ev.target.email.value

    email = email.trim()

    email = email.split('@')

    email.forEach((elemento, index) => {
        email[index] = elemento.split('.')
    });

    email = email.flat()

    console.log(email)

    if (email.size != 3) {
        alert("El email no tiene el formato correcto")
        return
    }



    alert("Has rellenado correctamente el formulario. Bienvenido al club!!")

    const persona = {
        "nombre": ev.target.nombre.value,
        "apellido": ev.target.apellidos.value,
        "edad": ev.target.edad.value,
        "sexo": ev.target.sexo.value,
        "socio": ev.target.checked,
        "descripcion": ev.target.descripcion.value,
        "email": ev.target.email.value,
        "telefono": ev.target.telefono
    }

    console.log(persona)

})