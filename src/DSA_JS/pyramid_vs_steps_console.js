function pyramid(n) {
    for (let i = 1; i <= n; i++) {
      let str = '#'.repeat(2 * i - 1); // String of '#' characters for the current level
      let empty = ' '.repeat(n - i); // String of spaces for left padding
      let value = empty + str + empty; // Concatenate the left padding, '#' characters, and right padding
      console.log(value);
    }
  }
  
  // Test the function with an example
  pyramid(5);
  


  function steps(n) {
    for (let i = 1; i <= n; i++) {
      let step = '#'.repeat(i);
      let spaces = ' '.repeat(n - i); // Add leading spaces to align the staircase to the right
      console.log(step + spaces);
    }
  }