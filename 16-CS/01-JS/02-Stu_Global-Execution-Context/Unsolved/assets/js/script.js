// 1) Where is carNoise stored?
// 1) carNoise is stored in the global execution context

const carNoise = 'Honk';
// 2) Where is goFast stored?
// 2) is stored in the global execution context

const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // 
  
  // 5) Where is makeNoise stored?
  //
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // 
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// 
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
