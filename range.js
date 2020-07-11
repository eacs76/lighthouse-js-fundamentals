function range ( start, end, step ) {
  let arr = [ start,end, step ]
  if ( start === undefined || end === undefined || step === undefined || end < start || step <= 0 ) { arr = [ ]; return arr  }
  else if ( start === [] || end === [] || step === [] || end < start || step <= 0) { arr = [ ]; return arr  }
  
  for (let i = start; i <= end; i = i + step) {
    arr.push(i);

  }
  arr.splice(1,3);
  console.log(arr);
  return arr;
}


