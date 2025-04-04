let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let left = document.getElementById('prev')


let count = list.length // 3
let active = 0

next.onclick = () => {
    let active0ld = document.querySelector('.active')
    active0ld.classList.remove ('active')

    active = active >= count -1 ? 0 : active + 1
    list [active].classList.add ('active')
}

prev.onclick = () => {
    let active0ld = document.querySelector('.active')
    active0ld.classList.remove('active')

    active = active <= 0 ? count -1 : active - 1
    list [active].classList.add ('active')
}