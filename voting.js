 const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
 ]
 const expectedresult = [];
 let place = stations[2];
 let size = stations[1];
 function chooseStations (stations) {
   for (const station of stations) {
     if (size >= 20) {
console.log(size);
console.log(place);
       if (place === 'school' || place === 'community centre') {
         expectedresult.push (stations[0]);
         return expectedresult;
                
       }
     }
   }
   console.log(chooseStations (stations));
 } 
