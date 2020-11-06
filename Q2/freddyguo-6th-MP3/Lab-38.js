class DriversRecord{

    constructor(license, name, licensePlate, points){
        this.license = license
        this.name = name
        this.licensePlate = licensePlate
        this.points = points
    }

}


let drivers = [];

let driver = new DriversRecord("677892456", "Fred Baker", "AB7864", 5)
drivers.push(driver)

driver = new DriversRecord("446391466", "Johnny Appleseed", "JT7234", 1)
drivers.push(driver)

driver = new DriversRecord("697861537", "Luke Skywalker", "PU9165", 10)
drivers.push(driver)

driver = new DriversRecord("273598933", "Indiana Jones", "RW2859", 12)
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
    console.log(driverRecord.license + ' ' + driverRecord.name + ' ' + driverRecord.licensePlate + ' Points: ' + driverRecord.points + '\n')
    if(driverRecord.points > 10){
        console.log('Your license has been suspended.\n')
    }
}
else{
    console.log('License not found\n')
}
