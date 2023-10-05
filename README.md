# adv-math

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
- [License](#license)
- [Code of Conduct](#code-of-conduct)
- [Contributing](#contributing)
- [Learn More](#learn-more)
- [Developer Details](#developer-details)
- [Happy Coding](#happy-coding)


## Description

`adv-math` is a comprehensive JavaScript library that simplifies advanced mathematical calculations, covering a wide range of mathematical topics such as basic arithmetic, complex numbers, linear algebra, statistics, geometry, trigonometry, calculus, financial calculations, units and conversions, equation solvers, and math expression parsing. This library is designed to provide developers with powerful mathematical tools for various applications.


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

### Basic Math Operations

```javascript
const { BasicMath } = require('adv-math');

const sum = BasicMath.add(5, 3); // 8
const product = BasicMath.multiply(4, 6); // 24
```

### Complex Numbers

```javascript
const { ComplexNumber } = require('adv-math');

const num1 = new ComplexNumber(2, 3);
const num2 = new ComplexNumber(1, -1);

const result = ComplexNumber.add(num1, num2); // (3, 2)
```

### Linear Algebra

```javascript
const { Matrix, Vector } = require('adv-math');

const matrix = new Matrix([[1, 2], [3, 4]]);
const vector = new Vector([1, 2]);

const product = Matrix.multiply(matrix, vector); // [5, 11]
```

### Statistics

```javascript
const { Statistics } = require('adv-math');

const data = [2, 4, 6, 8, 10];
const mean = Statistics.mean(data); // 6
const variance = Statistics.variance(data); // 8
```

Please refer to the documentation for detailed usage instructions for each module.


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