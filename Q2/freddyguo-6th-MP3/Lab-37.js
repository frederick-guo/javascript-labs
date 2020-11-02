class DriversRecord{

    constructor(license, name, licensePlate){
        this.license = license
        this.name = name
        this.licensePlate = licensePlate
    }

}


let drivers = [];

let driver = new DriversRecord("677892456", "Fred Baker", "AB7864")
drivers.push(driver)

driver = new DriversRecord("446391466", "Johnny Appleseed", "JT7234")
drivers.push(driver)

driver = new DriversRecord("697861537", "Luke Skywalker", "PU9165")
drivers.push(driver)

driver = new DriversRecord("273598933", "Indiana Jones", "RW2859")
drivers.push(driver)


const readline = require('readline-sync');

let licenseToFind = readline.question("\nWhat's the license of the driver you want to find? ")

let theDriver = ''

let found = false

let driverRecord = drivers[0]

for(let i = 0; i < drivers.length; i++){
    if(licenseToFind === drivers[i].license){
        theDriver = drivers[i].name
        found = true
        driverRecord = drivers[i]
    }
}

console.log('\n')
if(found){
    console.log(driverRecord.license + ' ' + driverRecord.name + ' ' + driverRecord.licensePlate + '\n')
}
else{
    console.log('License not found\n')
}
