function total(a, b = []) {
  if ((!Array.isArray(a), !Array.isArray(b))) {
    throw Error("Params should be Array");
  }

  if (a.some(val => typeof val !== 'number') || b.some(val => typeof val !== 'number')) {
    throw Error("Arrays can contains only numbers");
  }

  const sum_a = a.reduce((s, v) => s + v, 0);
  const sum_b = b.reduce((s, v) => s + v, 0);
  
  return `The Total is $${sum_a + sum_b}.`;
}

exports.total = total;
