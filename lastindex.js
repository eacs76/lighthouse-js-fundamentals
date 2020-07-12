function lastIndexOf (array, value) {
  let i;
  for (i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1; 
}
