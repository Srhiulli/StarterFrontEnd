

const toOpenModalButton = document.querySelector('#openModal')
const modalLogin = document.querySelector('.invisible')


toOpenModalButton.onclick = function () {
    console.log('on click ok')
    modalLogin.classList.remove('invisible')
    console.log(modalLogin)

}

document.addEventListener('keydown', function (event) {
    const isEscKey = event.key === 'Escape'

    console.log('ESC ok')

    if (isEscKey) {
        modalLogin.classList.add('invisible')
    }

})

