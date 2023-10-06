const Units = require("../src/units-conversions/units");

describe("Units", () => {
  test("converts meters to feet", () => {
    expect(Units.convertLength(5, "meters", "feet")).toBeCloseTo(16.4042, 3);
  });

  test("converts feet to meters", () => {
    expect(Units.convertLength(10, "feet", "meters")).toBeCloseTo(3.048, 2);
  });

  test("converts Celsius to Fahrenheit", () => {
    expect(Units.convertTemperature(25, "Celsius", "Fahrenheit")).toBeCloseTo(
      77,
      1
    );
  });
  test("converts Celsius to Kelvin", () => {
    expect(Units.convertTemperature(25, "Celsius", "Kelvin")).toBeCloseTo(
      298.15,
      1
    );
  });
  test("converts Fahrenheit to Kelvin", () => {
    expect(Units.convertTemperature(68, "Fahrenheit", "Kelvin")).toBeCloseTo(
      293.15,
      1
    );
  });
  test("converts Fahrenheit to Celsius", () => {
    expect(Units.convertTemperature(68, "Fahrenheit", "Celsius")).toBeCloseTo(
      20,
      1
    );
  });
  test("converts Kelvin to Celsius", () => {
    expect(Units.convertTemperature(300, "Kelvin", "Celsius")).toBeCloseTo(
      26.85,
      1
    );
  });
  test("converts Kelvin to Fahrenheit", () => {
    expect(Units.convertTemperature(300, "Kelvin", "Fahrenheit")).toBeCloseTo(
      80.33,
      1
    );
  });

  test("converts kilograms to pounds", () => {
    expect(Units.convertWeight(5, "kilograms", "pounds")).toBeCloseTo(
      11.0231,
      3
    );
  });
  test("converts pounds to kilograms", () => {
    expect(Units.convertWeight(10, "pounds", "kilograms")).toBeCloseTo(
      4.5359,
      3
    );
  });

  // Add more test cases as needed
});
