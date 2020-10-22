const readline = require('readline-sync');

function printItemsAndCosts(items, costs){
    for(let i = 0; i < items.length; i++){
        console.log(`${items[i]} ${costs[i]}`)
    }
}

function getTotalCost(costs){
    let sum = 0
    for(let i = 0; i < costs.length; i++){
        sum += costs[i]
    }
    return sum;
}

function printTotalCost(costs){
    let totalCost = getTotalCost(costs)

    console.log(`\nTotal Cost: $${totalCost}\n`)
}

let items = []
let costs = []
console.log('\n')

while (true){
    let item = readline.question("Enter an item name: ")
    if(item === ''){
        break;
    }

    let itemCost = Number(readline.question("Enter the cost of the item: "))
    if(itemCost === ''){
        break;
    }

    console.log('\n')
    items.push(item)
    costs.push(itemCost)
}

printItemsAndCosts(items,costs);

printTotalCost(costs);
