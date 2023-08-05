const buttonSort = document.querySelector(".botao")

function numberSort(){

    const min = Math.ceil(document.querySelector(".first-input").value)
    const max = Math.floor(document.querySelector(".second-input").value)

    const result = Math.floor(Math.random() * (max - min + 1) + min)

    alert(result)

}

buttonSort.addEventListener("click", numberSort)

