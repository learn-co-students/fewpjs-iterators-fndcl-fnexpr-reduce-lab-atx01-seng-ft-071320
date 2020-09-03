const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = batteryBatches.reduce(combineBattery, 0)


function combineBattery(batteryBatch, init) {
    let total = init
    return total += batteryBatch
}