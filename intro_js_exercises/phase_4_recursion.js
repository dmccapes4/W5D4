function range(start, end) {
  let result = [];

  if (start === end) {

    result.push(start);
    return result;
  }
  else {
    result.push(start);
    return result.concat(range(start+1, end));
  }
}


function sumRec(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + sumRec(arr.slice(1));
  }
}

function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  } else {
    return base * exponent1(base, exp - 1);
  }
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  } else {
    if (exp % 2 === 0) {
      return exponent2(base, exp / 2) * exponent2(base, exp / 2);
    } else {
      return base * exponent2(base, (exp - 1) / 2) * exponent2(base, (exp - 1) / 2);
    }
  }
}

function fibonacci(n) {
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1,1];
  }
  else {
    let lastArr = fibonacci(n-1);
    let i = lastArr.length - 1;
    return lastArr.concat([lastArr[i]+lastArr[i-1]]);
  }
}

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  if (arr.length === 1) {
    if (arr[0] === target) return 0;
  }
  else {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid, arr.length);
    if (arr[mid] === target) {
      return mid;
    }
    if (target < arr[mid]) {
      return bsearch(left, target);
    }
    else {
      return bsearch(right, target) + mid;
    }
  }
}

function merge(left, right) {
  let result = [];
  while(left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}

function mergesort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  return merge(mergesort(left), mergesort(right));
}
