let plus = (a, b) => {
  if (a == undefined || b == undefined) {
    return undefined;
  }
  if (a == null || b == null) {
    return null;
  }
  if (a == String || b == String) {
    return null;
  }
  return a + b;
};

let minus = (a, b) => {
  if (a == undefined || b == undefined) {
    return undefined;
  }
  if (a == null || b == null) {
    return null;
  }
  if (a == String || b == String) {
    return null;
  }
  return a - b;
};
let divide = (a, b) => {
  if (a == undefined || b == undefined) {
    return undefined;
  }
  if (a == null || b == null) {
    return null;
  }
  if (a == String || b == String) {
    return null;
  }
  return a / b;
};
let multi = (a, b) => {
  if (a == undefined || b == undefined) {
    return undefined;
  }
  if (a == null || b == null) {
    return null;
  }
  if (a == String || b == String) {
    return null;
  }
  return a * b;
};

module.exports = {
  plus: plus,
  minus: minus,
  divide: divide,
  multi: multi
};
