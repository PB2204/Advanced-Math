const advMath = require('../src/index');

describe('adv-math', () => {
  test('exports BasicMath module', () => {
    expect(advMath.BasicMath).toBeDefined();
    expect(typeof advMath.BasicMath.add).toBe('function');
    // Add more tests for BasicMath methods as needed
  });

  test('exports ComplexNumber module', () => {
    expect(advMath.ComplexNumber).toBeDefined();
    expect(typeof advMath.ComplexNumber.add).toBe('undefined');
    // Add more tests for ComplexNumber methods as needed
  });

  // Repeat similar tests for other exported modules

  test('exports Constants module', () => {
    expect(advMath.Constants).toBeDefined();
    expect(advMath.Constants.PI).toBe(Math.PI);
    expect(advMath.Constants.E).toBe(Math.E);
    // Add more tests for Constants properties as needed
  });
});