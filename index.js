const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries
function batteries(){
  let totalBatteries = batteryBatches.reduce((total,el)=>total+el,0);
}
