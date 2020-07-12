const carPassing = function (cars, speed){ 
  let record = {
    time: Date.now(),
    speed : speed
  }
  cars.push(record);
  return cars
} 

