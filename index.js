const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce(batteries(total,el),0);

function batteries(total,el){
  return total+el;
}
