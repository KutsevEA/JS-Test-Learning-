function includes(array, value) {
  // Change code below this line
    let x = false;
  for (let i = 0; i < array.length; i += 1) {
      if (array[i] === value) {
          console.log(array[i]);
          x = (array[i] === value);
          return x
    }
    
  }
    return x;
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
