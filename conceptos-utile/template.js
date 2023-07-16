const lista = document.getElementById('lista')
const template = document.getElementById('template-li').content
const fragment = new DocumentFragment()

const arrayLista = ['item 1', 'item 2', 'item 3']


arrayLista.forEach( item => {
    template.querySelector('.list span').textContent = item

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})

lista.appendChild(fragment)