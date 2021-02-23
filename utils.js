/**
 * Return a ready to print total
 * @param {number[]} a - Array if numbers
 * @param {number[]} [b] - Optional Array of numbers
 * @returns {string} - The Total is $XXX
 */
const total = (a, b = []) => {
  if ((!Array.isArray(a), !Array.isArray(b))) {
    throw Error("Params should be Array");
  }
  const sum_a = a.reduce((s, v) => s + v, 0);
  const sum_b = b.reduce((s, v) => s + v, 0);
  return `The Total is $${sum_a + sum_b}.`;
};

exports.total = total;
