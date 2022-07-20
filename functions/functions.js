const functions = {
  getAge: (name, age) => {
    return `${name} is ${age} years old`;
  },
  add: (num1, num2) => {
    return num1 + num2;
  },
  isNull: () => {
    return null;
  },
  isUndefined: () => {
    return undefined;
  },
};
module.exports = functions;
