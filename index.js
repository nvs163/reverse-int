function reverseInt(num) {
  return +(String(num).split("").reverse().join(""));
};

reverseInt(123);