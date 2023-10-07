class Bitwise {
  static hammingDistance(firstNumber, secondNumber) {
    let xor = firstNumber ^ secondNumber;
    let distance = 0;
    while (xor > 0) {
      distance += xor & 1;
      xor >>= 1;
    }
    return distance;
  }

  static countSetBits(n) {
    let setBitCount = 0;
    while (n) {
      n = n & (n - 1);
      setBitCount++;
    }
    return setBitCount;
  }

  static checkIthBit(number, position) {
    if (number & (1 << position)) {
      return 1;
    }
    return 0;
  }

  static toggleBitAtPosition(number, position) {
    number = number ^ (1 << position);
    return number;
  }

  static isPowerOfTwo(number) {
    if (typeof number !== "number") {
      return "enter a valid number";
    }
    return (number & (number - 1)) === 0;
  }
 
}

module.exports = Bitwise;
