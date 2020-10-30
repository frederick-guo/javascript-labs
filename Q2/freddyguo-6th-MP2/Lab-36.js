class Item{

    constructor(barcode, itemName, price, inventory, taxRate){
        this.barcode = barcode
        this.itemName = itemName
        this.price = price
        this.inventory = inventory
        this.taxRate = taxRate
    }
    getTaxOnItem(){
        return this.taxRate * this.price;
    }

}


function searchForItemByBarcode (items, barcode){
    for(let i = 0; i < items.length; i++){
        if(items[i].barcode === barcode){
            return items[i];
        }
    }
    return '';
}

function printItems(items){
    for(let i = 0; i < items.length; i++){
        console.log(items[i].itemName + " " + items[i].price + " " + items[i].getTaxOnItem())
        if(items[i].inventory < 5){
            console.log('Low Inventory: Only ' + items[i].inventory + 'left')
        }
        console.log('\n')
    }
}



items = [];

let item = new Item("78645", "Bread", 3.99, 55, 0.0825)
items.push(item)
    
item = new Item("79644", "Campbell's Vegetable Soup 8 oz", 2.49, 3, 0.0825)
items.push(item)
    
item = new Item("79645", "Amy's Vegetable Soup 8 oz", 2.37, 2, 0.0825)
items.push(item)

item = new Item("79688", "Amy's Vegetable Soup 12 oz", 3.49, 12, 0.0825)
items.push(item)

console.log('\nList of Items: \n');

printItems(items);


let itemsToBuy = ["78645", "79645"];


let totalCost = 0.0;
let totalTax = 0.0;


for(let i = 0; i < itemsToBuy.length; i++){
    let itemWithBarcode = searchForItemByBarcode(items, itemsToBuy[i])
    if(itemWithBarcode === null){
        console.log("null")
    }
    else{
        totalCost += itemWithBarcode.price;

    totalTax += itemWithBarcode.getTaxOnItem();
    }
}

let finalBill = totalCost + totalTax

console.log('Total Cost: ' + totalCost)

console.log('Total Tax: ' + totalTax)

console.log('Final Bill: ' + finalBill)

console.log('\nThank you for shopping at The Best Store')