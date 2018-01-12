Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

Array.prototype.myReduce = function(callback, acc) {
  let temp;
  if (arguments.length === 1) {
    acc = this[0];
    temp = this.slice(1);
  } else {
    temp = this.slice(0);
  }
  temp.myEach(function(el) {
    acc = callback(acc, el);
  });

  return acc;
};
