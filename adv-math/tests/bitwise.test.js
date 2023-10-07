const BitWise = require("../src/bitwise/bitwise");

describe("BitWiseMath", () => {
  test("count set bits", () => {
    expect(BitWise.countSetBits(8)).toBe(1);
  });

  test("check ith bit", () => {
    expect(BitWise.checkIthBit(8, 2)).toBe(0);
  });

  test("toogle ith bit", () => {
    expect(BitWise.toggleBitAtPosition(4, 1)).toBe(6);
  });

  test("check is power of 2", () => {
    expect(BitWise.isPowerOfTwo(4)).toBe(true);
  });

  test("check is power of 2", () => {
    expect(BitWise.isPowerOfTwo(6)).toBe(false);
  });
  test("find hamming distance", () => {
    expect(BitWise.hammingDistance(7, 4)).toBe(2);
  });
  test("find hamming distance", () => {
    expect(BitWise.hammingDistance(9, 14)).toBe(3);
  });
  test("check is power of 3", () => {
    expect(BitWise.isPowerofThree(6)).toBe(false);
  });

  test("check is power of 3", () => {
    expect(BitWise.isPowerofThree(9)).toBe(true);
  });
});
