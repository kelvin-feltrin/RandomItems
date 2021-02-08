function Randomize() {
    var items = document.querySelector('.form-control').value
    var res = document.querySelector('.res')
    var items_arr = []

    if (items !== '') {
        res.innerHTML = ''
    } else {
        Limpar()
    }

    items_arr.push(items.split('\n'))

    while (items_arr[0].length > 0) {
        const random = random_item(items_arr[0])
        res.innerHTML += `${random} <br>`
        items_arr[0].splice(items_arr[0].indexOf(random), 1)
    }
}

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function Limpar() {
    var items = document.querySelector('.form-control')
    var res = document.querySelector('.res')

    items.value = ''
    res.innerHTML = ''
}