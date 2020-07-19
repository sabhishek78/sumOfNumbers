// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a,b){
  let sum=0;
  let start,end;
  if(a<b){
    start=a;
    end=b;
  }
  else {
    start=b;
    end=a;
  }
    for(let i=start;i<=end;i++){
      sum+=i;
    }
    return sum;
  }
console.log(getSum(1, 0) === 1);   // 1 + 0 = 1
console.log(getSum(1, 2) === 3);   // 1 + 2 = 3
console.log(getSum(0, 1) === 1);   // 0 + 1 = 1
console.log(getSum(1, 1) === 1);   // 1 Since both are same
