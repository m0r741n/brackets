module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = Object.fromEntries(bracketsConfig.map((e) => e.toReversed()));

  str.split('').map((e) => {
    if (brackets[e] === undefined || stack.at(-1) !== brackets[e]) {
      return stack.push(e);
    }
    if (brackets[e] === stack.at(-1)) {
      return stack.pop();
    }
  });

  if(stack.length === 0) {
    return true;
  }
  return false;
}