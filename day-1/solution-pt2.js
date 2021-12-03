// let depths = [] 

let increasesOutput = 0;
let sumOf3IncreasesOutput = 0;
for (let i = 0; i < depths.length; i++) {
  
  // get all the increases of sequential depths
  if (depths[i] < depths[i+1]) { 
   increasesOutput += 1 
  }
  
  // build a function thatreturns the sum of a sequential group of 3
  let sumof3depths = (i) => {
    return (depths[i] + depths[i+1]  + depths[i+2])
  }
  
  // get all the increase amongst sequential groups of 3
  if (sumof3depths(i) < sumof3depths(i+1)) { 
   sumOf3IncreasesOutput += 1 
  }
}


document.getElementById("increases").innerHTML = increasesOutput;
document.getElementById("averageIncreases").innerHTML = sumOf3IncreasesOutput;
