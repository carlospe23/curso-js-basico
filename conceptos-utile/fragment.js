const lista = document.getElementById('lista')


const arrayElement = ['uno', 'dos', 'tres']

const fragment = document.createDocumentFragment()
// const fragment = new DocumentFragment()

arrayElement.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item

    fragment.appendChild(li)
})

lista.appendChild(fragment)