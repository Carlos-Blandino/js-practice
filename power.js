/**
 * Power Calculator
Given two integers a and b where b is not negative, then a raised to the power b is a multiplied by itself b times. We call a the base and b the exponent.

For example, 2 raised to the power 3 is 2 * 2 * 2 = 8. And 3 raised to the power 5 is 3 * 3 * 3 * 3 * 3 = 243.

Any number raised to the power 0 is 1.

Write a function called power() that takes two parameters, an integer as a base, and a non-negative integer as an exponent. The function returns the value of the base raised to the power of the exponent.

If the exponent is negative throw an Error with the message exponent should be >= 0.

power(10,2) should return 100
describe("Power", () => {
  it("anything raised to power 0 is 1", () => {
    expect(power(10, 0)).toEqual(1);
  });

  it("anything raised to power 1 is itself", () => {
    expect(power(10, 1)).toEqual(10);
  });

  it("should throw error for negative exponent", () => {
    expect(() => power(10, -2)).toThrow(/exponent should be >= 0/);
  });

  it("should raise to the given power", () => {
    expect(power(10, 4)).toEqual(10000);
  });

  it("should work with negative base", () => {
    expect(power(-10, 2)).toEqual(100);
  });
});

power(10,-2) throw Error exponent should be >= 0
 * Return base raised to the power exponent.
 
 */
function power(base, exponent) {
    if(exponent < 0)  throw("exponent should be >= 0")
    if(exponent === 1) return base;
    if (exponent <= 1){
        return 1;
    }
    return base * power( base, exponent - 1)
   }