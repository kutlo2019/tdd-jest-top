const stringFuncs = {

  capitalize: function (string) {
    let buffer = String.fromCharCode(string.charCodeAt(0) - 32);
    return buffer.concat(string.slice(1));
  },

  reverseString: function (string) {
    let buffer = ''
    let end = string.length - 1;
    for (let i = 0; i <= end; i++) {
      buffer = buffer.concat(string[end - i]);
    }
    return buffer;
  },

  calculator: {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    divide: function (a, b) {
      return a / b;
    },
    multiply: function (a, b) {
      return a * b;
    }
  },

  caesarCipher: function (string, shift) {
    let buffer = '';
    for (let i = 0; i < string.length; i++) {
      let shiftedChar = String.fromCharCode(string.charCodeAt(i) + shift); 
      buffer = buffer.concat(shiftedChar);
    }
    return buffer;
  },

  analyzeArray: function (arr) {
    let length = arr.length;
    const average = arr.reduce((prev, curr) => prev + curr) / length;
    let min = arr[0];
    for (let i = 0; i < length; i++) {
      if (min > arr[i]) min = arr[i]; 
    }
    let max = arr[0]
    for (let i = 0; i < length; i++) {
      if (max < arr[i]) max = arr[i];
    }

    return {
      average: average,
      min: min,
      max: max,
      length: length
    }
  },
}

module.exports = stringFuncs;