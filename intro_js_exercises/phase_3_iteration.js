Array.prototype.bubbleSort = function() {
  let result = this.slice(0);
  let sorted = false;
  while(sorted === false) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (result[i] > result[j]) {
          result[j] = [result[i], result[i] = result[j]][0];
          sorted = false;
        }
      }
    }
  }
  return result;
};

String.prototype.substrings = function() {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length+1; j++) {
      result.push(this.slice(i,j));
    }
  }
  return result;
};
