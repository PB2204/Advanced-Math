class Units {
  // Method to convert length units (e.g., meters to feet)
  static convertLength(value, fromUnit, toUnit) {
    if (fromUnit === "meters" && toUnit === "feet") {
      return value * 3.28084;
    } else if (fromUnit === "feet" && toUnit === "meters") {
      return value * 0.3048;
    } else {
      throw new Error("Invalid length unit conversion.");
    }
  }

  // Method to convert temperature units (e.g., Celsius to Fahrenheit)
  static convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
      return (value * 9) / 5 + 32;
    } else if (fromUnit == "Celsius" && toUnit == "Kelvin") {
      return value + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
      return ((value - 32) * 5) / 9;
    } else if (fromUnit == "Fahrenheit" && toUnit == "Kelvin") {
      return ((value + 459.67) * 5) / 9;
    } else if (fromUnit == "Kelvin" && toUnit == "Celsius") {
      return value - 273.15;
    } else if (fromUnit == "Kelvin" && toUnit == "Fahrenheit") {
      return (value * 9) / 5 - 459.67;
    } else {
      throw new Error("Invalid temperature unit conversion.");
    }
  }

  // Method to convert weight units (e.g., kilograms to pounds)
  static convertWeight(value, fromUnit, toUnit) {
    if (fromUnit === "kilograms" && toUnit === "pounds") {
      return value * 2.204623;
    } else if (fromUnit === "pounds" && toUnit === "kilograms") {
      return value * 0.4535924;
    } else {
      throw new Error("Invalid weight unit conversion.");
    }
  }
   static convertVolume(value, fromUnit, toUnit) {
    if (fromUnit === "litres" && toUnit === "fluidOZ") {
      return value * 33.814;
    } else if (fromUnit === "fluidOZ" && toUnit === "litres") {
      return value * 0.0295735;
    } else {
      throw new Error("Invalid volume unit conversion.");
    }
  }
}

module.exports = Units;
