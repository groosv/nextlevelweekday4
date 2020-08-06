// Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// Quando clicar no botao

// Executar uma acao
function cloneField() {
    // duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Boolean: true or false

    // pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar

    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
