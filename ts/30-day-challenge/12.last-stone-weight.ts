/*
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

 

Example 1:

Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
*/

function lastStoneWeight(stones: number[]): number {
  let lastWeight: number = 0;
  let objs: { [key: number]: number } = {};
  let firstMaxWeight: number;
  let secondMaxWeight: number;
  let smashWeight: number;

  for (let i = 0; i < stones.length; i++) {
    if (stones[i] in objs) {
      objs[stones[i]]++;
    } else {
      objs[stones[i]] = 1;
    }
  }

  while (Object.keys(objs).length > 1) {
    firstMaxWeight = -Infinity;
    for (let weight of Object.keys(objs)) {
      if (+weight > firstMaxWeight) {
        firstMaxWeight = +weight;
      }
    }
    objs[firstMaxWeight]--;
    if (objs[firstMaxWeight] === 0) {
      delete objs[firstMaxWeight];
    }

    secondMaxWeight = -Infinity;
    for (let weight of Object.keys(objs)) {
      if (+weight > secondMaxWeight) {
        secondMaxWeight = +weight;
      }
    }
    objs[secondMaxWeight]--;
    if (objs[secondMaxWeight] === 0) {
      delete objs[secondMaxWeight];
    }

    smashWeight = firstMaxWeight - secondMaxWeight;
    if (smashWeight > 0) {
      if (smashWeight in objs) {
        objs[smashWeight]++;
      } else {
        objs[smashWeight] = 1;
      }
    }
  }

  if (Object.keys(objs).length !== 0) {
    lastWeight = +Object.keys(objs)[0];
    if (objs[lastWeight] % 2 === 0) {
      lastWeight = 0;
    }
  }

  return lastWeight;
}

console.log(lastStoneWeight([9, 3, 2, 10])); // 0
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
