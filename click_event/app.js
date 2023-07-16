const btnAumentar = document.querySelector('.btn-info')
const btnDisminuir = document.querySelector('.btn-danger')
const count = document.getElementById('count')

let contador = 0

btnAumentar.addEventListener('click', ()=> {
    contador++
    count.textContent = contador
})

btnDisminuir.addEventListener('click', () => {
    contador--
    count.textContent = contador
})