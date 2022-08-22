
document.getElementById('btn-calc').addEventListener('click', function () {
    const totalPlayer = getLi()
    const playerCost = document.getElementById('playerCost')
    const costString = playerCost.value
    const cost = parseInt(costString)

    const perPlayerCost = totalPlayer * cost

    const playerExpenses = document.getElementById('expenses')
    playerExpenses.innerText = perPlayerCost
})