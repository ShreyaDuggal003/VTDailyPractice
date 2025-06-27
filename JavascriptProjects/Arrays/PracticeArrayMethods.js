const arr = [2, 3, 4, 4, 5, 6, 1, 3, 5];

//SumOfElements
//Method1:
let sum = 0;
arr.forEach(element => {
    sum = sum + element;
});
console.log(sum)
//Method2:
let ans = arr.reduce((sum, current) => sum + current)
console.log(ans)


//MaximumElement
let max = arr.reduce((element, current) => Math.max(element, current))
console.log(max)


//ElementExists
//Method1:
let result1 = (num) => {
    if (arr.includes(num)) {
        return true
    }
    else {
        return false
    }
}
console.log(result1(6));
//Method2:
let result2 = (num) => {
    if (arr.indexOf(num) >= 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(result2(6));


//EvenNumbers
let numbers = arr.filter(element => element % 2 == 0)
console.log(numbers)

//DoubleEachElement
let arr2 = arr.map(func);
function func(value) {
    return value * 2;
}
console.log(arr2);


//RemovingDuplicates
let newArr = arr.filter((element, index) => arr.indexOf(element) === index)
console.log(newArr)

let set = new Set();
arr.forEach(num => {
    if (!set.has(num)) {
        set.add(num);
    }
})
console.log(set)


//ReverseArray
let newArr1 = arr.reverse();
console.log(newArr1);

let newArr2 = [];
let j = 0;
for (let i = arr.length - 1; i >= 0; i--) {
    newArr[j] = arr[i];
    j++;
}
console.log(newArr2);

//FindCommonElements
let arr3 = [11, 12, 3, 5, 8, 9, 6];
let elements = arr3.filter(num => arr.includes(num));
console.log(elements);


//MergingAndSortArray
let arr0 = [3, 2, 4, 1];
let arr1 = [8, 6, 5, 7];

let newArray = arr0.concat(arr1);
newArr.sort((a, b) => a - b)
console.log(newArray);