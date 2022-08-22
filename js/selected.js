
function getPlayerName(name) {
    const playerName = document.getElementById(name).innerText
    const ol = document.getElementById('ol')
    const li = document.createElement('li')
    li.innerText = playerName
    ol.appendChild(li)
}

function btnDisabled(btn) {
    const button = document.getElementById(btn)
    button.setAttribute('disabled', true)
    button.style.backgroundColor = 'gray'
}

function getLi() {
    const list = document.getElementById("ol").getElementsByTagName("li")
    const result = list.length
    if (result > 5) {
        alert('Sorry! you cannot select more than five players')
        const ol = document.getElementById('ol')
        ol.removeChild(ol.lastChild)
        return;
    }
    return result
}

document.getElementById('btn-1').addEventListener('click', function () {
    getPlayerName('mbappe')
    btnDisabled('btn-1')
    getLi()
})

document.getElementById('btn-2').addEventListener('click', function () {
    getPlayerName('messi')
    btnDisabled('btn-2')
    getLi()
})

document.getElementById('btn-3').addEventListener('click', function () {
    getPlayerName('neymar')
    btnDisabled('btn-3')
    getLi()
})

document.getElementById('btn-4').addEventListener('click', function () {
    getPlayerName('ramos')
    btnDisabled('btn-4')
    getLi()
})

document.getElementById('btn-5').addEventListener('click', function () {
    getPlayerName('ronaldo')
    btnDisabled('btn-5')
    getLi()
})

document.getElementById('btn-6').addEventListener('click', function () {
    getPlayerName('ronato')
    btnDisabled('btn-6')
    getLi()
})