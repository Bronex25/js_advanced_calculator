'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    operate(action, x) {
      this.result = action(x);

      return this;
    },

    reset() {
      this.result *= 0;

      return this;
    },

    add(x) {
      return calculator.result + x;
    },

    subtract(x) {
      return calculator.result - x;
    },

    divide(x) {
      return calculator.result / x;
    },

    multiply(x) {
      return calculator.result * x;
    },

    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
