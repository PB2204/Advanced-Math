# Advanced Math (adv-math)

Advanced Mathematical Operations Library for JavaScript

- [Description](#description)
- [Installation](#installation)
  - [NPM](#npm-installation)
  - [Yarn](#yarn-installation)
- [Motive](#motive)
- [Practical Usage](#practical-usage)
- [Example Usage](#example-usage)
  - [BasicMath](#basicmath)
  - [ComplexNumber](#complexnumber)
  - [Matrix](#matrix)
  - [Vector](#vector)
  - [Statistics](#statistics)
  - [Geometry](#geometry)
  - [Trigonometry](#trigonometry)
  - [Calculus](#calculus)
  - [Financial](#financial)
  - [Units](#units)
  - [Equations](#equations)
  - [Parser](#parser)
  - [Random](#random)
  - [Expression Evaluator](#expression-evaluator)
- [License](#license)
- [Code of Conduct](#code-of-conduct)
- [Contributing](#contributing)
- [Learn More](#learn-more)
- [Developer Details](#developer-details)
- [Happy Coding](#happy-coding)


## Description

`adv-math` is a comprehensive JavaScript library that simplifies advanced mathematical calculations, covering a wide range of mathematical topics such as basic arithmetic, complex numbers, linear algebra, statistics, geometry, trigonometry, calculus, financial calculations, units and conversions, equation solvers, and math expression parsing. This library is designed to provide developers with powerful mathematical tools for various applications.

**New Feature:**
- Added `Expression Evaluator` for evaluating complex mathematical expressions. See [Expression Evaluator](#expression-evaluator) below for details.


## Installation

### NPM Installation

You can install `adv-math` using NPM:

```bash
npm install adv-math
```

### Yarn Installation

Alternatively, you can install it using Yarn:

```bash
yarn add adv-math
```


## Motive

The primary motive of this project is to simplify complex mathematical operations for developers, researchers, and students. It aims to provide a user-friendly, efficient, and well-documented library for performing advanced mathematical calculations in JavaScript.


## Practical Usage

`adv-math` can be used in a wide range of practical scenarios, including but not limited to:

- Scientific research and analysis
- Engineering and physics simulations
- Financial modeling and analysis
- Game development for physics and mathematics-based simulations
- Educational applications for teaching and learning mathematics
- Data analysis and statistics
- Geometric calculations for graphics and CAD applications
- Solving equations and parsing mathematical expressions


## Example Usage

Here's an overview of how to use some of the key modules in Advanced Math:
### BasicMath

```javascript
const { BasicMath } = require('adv-math');

const sum = BasicMath.add(5, 3); // 8
const product = BasicMath.multiply(4, 6); // 24
```

### ComplexNumber

```javascript
const { ComplexNumber } = require('adv-math');

const num1 = new ComplexNumber(2, 3);
const num2 = new ComplexNumber(1, -1);

const result = ComplexNumber.add(num1, num2); // (3, 2)
```

### Matrix

```javascript
const { Matrix } = require('adv-math');

const matrix1 = new Matrix([[1, 2], [3, 4]]);
const matrix2 = new Matrix([[5, 6], [7, 8]]);

const product = matrix1.multiply(matrix2); // [[19, 22], [43, 50]]
```

### Vector

```javascript
const { Vector } = require('adv-math');

const vector1 = new Vector([1, 2, 3]);
const vector2 = new Vector([4, 5, 6]);

const dotProduct = Vector.dot(vector1, vector2); // 32
```

### Statistics

```javascript
const { Statistics } = require('adv-math');

const data = [2, 4, 6, 8, 10];
const mean = Statistics.mean(data); // 6
const variance = Statistics.variance(data); // 8
```

### Geometry

```javascript
const { Geometry } = require('adv-math');

const area = Geometry.calculateArea(5); // Calculate the area of a circle with radius 5
const perimeter = Geometry.calculatePerimeter(7); // Calculate the perimeter of a rectangle with width 7
```

### Trigonometry

```javascript
const { Trigonometry } = require('adv-math');

const sine = Trigonometry.sin(30); // Calculate the sine of 30 degrees
const cosine = Trigonometry.cos(45); // Calculate the cosine of 45 degrees
```

### Calculus

```javascript
const { Calculus } = require('adv-math');

const derivative = Calculus.derivative('2 * x^2 + 3 * x', 'x'); // Calculate the derivative of the function
const integral = Calculus.integral('4 * x^3 + 2 * x', 'x'); // Calculate the integral of the function
```

### Financial

```javascript
const { Financial } = require('adv-math');

const futureValue = Financial.futureValue(1000, 0.05, 5); // Calculate the future value of an investment
const presentValue = Financial.presentValue(1500, 0.08, 3); // Calculate the present value of a sum of money
```

### Units

```javascript
const { Units } = require('adv-math');

const metersToFeet = Units.convert(5, 'meters', 'feet'); // Convert 5 meters to feet
const poundsToKilograms = Units.convert(150, 'pounds', 'kilograms'); // Convert 150 pounds to kilograms
```

### Equations

```javascript
const { Equations } = require('adv-math');

const root = Equations.solveQuadratic(1, -3, 2); // Solve the quadratic equation x^2 - 3x + 2 = 0
```

### Parser

```javascript
const { Parser } = require('adv-math');

const expression = '2 + 3 * (4 - 1)';
const result = Parser.parseExpression(expression); // Parse and evaluate the expression
```

### Random

```javascript
const { Random } = require('adv-math');

const randomInteger = Random.randomInt(1, 10); // Generate a random integer between 1 and 10
const randomFloat = Random.randomFloat(0, 1); // Generate a random floating-point number between 0 and 1
```

### Expression Evaluator

```javascript
const { ExpressionEvaluator } = require('adv-math');

const expression = '2 + 3 * (4 - 1)';
const result = ExpressionEvaluator.evaluateExpression(expression); // Evaluate the mathematical expression
console.log('Result:', result); // Output: 11
```
## License

This project is licensed under the [MIT License](LICENSE).


## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the standards and expectations for participating in this community.


## Contributing

We welcome contributions! Please check our [Contributing Guidelines](CONTRIBUTING.md) for details on how to contribute to this project.


## Learn More

For detailed documentation and usage examples, visit our [documentation](docs/).


## Developer Details

- **Author:** [Pabitra Banerjee](https://pabitrabanerjee.me)
- **Email:** [Pabitra Banerjee](mailto:rockstarpabitra2204@gmail.com)
- **GitHub:** [PB2204](https://github.com/PB2204)


## Happy Coding 🚀

We hope you find `adv-math` useful for your mathematical projects and applications. Happy coding!
