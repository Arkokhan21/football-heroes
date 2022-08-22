
function costPer(inputField) {
    const cost = document.getElementById(inputField)
    const costString = cost.value
    const costNumeric = parseInt(costString)
    return costNumeric
}

function plyExpenses() {
    const totalPlayer = getLi()

    const cost = costPer('playerCost')
    const perPlayerTotalCost = totalPlayer * cost

    const expenses = document.getElementById('expenses')
    const playerExpenses = expenses.innerText = perPlayerTotalCost
    return playerExpenses
}

document.getElementById('btn-calc').addEventListener('click', function () {
    plyExpenses()
})

document.getElementById('btn-calcTotal').addEventListener('click', function () {
    const playerExpenses = plyExpenses()

    const managerExpenses = costPer('managerCost')
    const coachExpenses = costPer('coachCost')
    const totalExpenses = playerExpenses + managerExpenses + coachExpenses

    const totalcost = document.getElementById('total-cost')
    totalcost.innerText = totalExpenses
})