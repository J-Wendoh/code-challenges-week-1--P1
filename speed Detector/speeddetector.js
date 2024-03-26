const speed= prompt("What is the Driver's speed recod?")//prompts user for input
//SP stands for the Driver's Speed as recorded
function calculateDemeritsPoints(speed) {
    let speedLimit = 70;//This is the maximum speed set not to be exceeded
    let kmPerDemerit = 5;//for every 5km exceeded from speed limit the driver earns on demerit point
    let demeritsPoints = (speed - speedLimit) / kmPerDemerit;//calculates the demerits points by dividing exceeded by 5   
    
    
    if (speed <= speedLimit) {
    return "Ok";
    }
    else
     { //The limit demerit points before the driver's license is suspended is 12
        if (demeritsPoints>= 12) {
        return "License Suspended";
        } else {
        return `Driver's Demerit Points - ${demeritsPoints}`
        }
    }
}
calculateDemeritsPoints(speed)