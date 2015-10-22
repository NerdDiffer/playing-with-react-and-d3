// n! ... interative version
module.exports.factorial = function(n) {
  var i = n;
  while (i > 1) {
    i -= 1;
    n *= i;
  }
  return n;
};

// 2^n
module.exports.exponential = function(n) {
  return Math.pow(2, n);
};

// n^3
module.exports.cubic = function(n) {
  return Math.pow(n, 3);
};

// n^2
module.exports.quadratic = function(n) {
  return Math.pow(n, 2);
};

// n * log(n)
module.exports.linearithmic = function(n) {
  return n * Math.log2(n);
};

// n
module.exports.linear = function(n) {
  return n;
};

// log(n)
module.exports.logarithmic = function(n) {
  return Math.log2(n);
};

// 1
module.exports.constant = function(n) {
  return 1;
};
