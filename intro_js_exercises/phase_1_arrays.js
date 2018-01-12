Array.prototype.uniq = function() {
  let result = [];
  this.forEach(el => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

Array.prototype.twoSum = function() {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i,j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function() {
  let result = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    result[i] = new Array(this.length);
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      result[j][i] = this[i][j];
      console.log(this[i][j]);
    }
  }
  return result;
};
