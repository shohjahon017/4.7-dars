//1-masala
// function colors(arg1, arg2, arg3) {
//   let res = [];
//   res.push(arg1);
//   res.push(arg2);
//   res.push(arg3);
//   return res;
// }

// console.log(colors("qizil", "sariq", "yashil"));

// //2-masala
// function numbers(arg1, arg2, arg3) {
//   let res = [arg1, arg2, arg3];
//   return res;
// }

// console.log(numbers(1, 2, 3));

// //3-masala
// function murojat(arr) {
//   console.log(arr[0]);
//   console.log(arr[arr.length - 1]);
// }
// murojat([1, 2, 3, 4]);

//4-masala
// function changeElement(arr, element) {
//   arr[1] = element;
//   return arr;
// }
// console.log(changeElement([1, 2, 3, 4], 15));

//5-masala
// function addElement(arr, element) {
//   arr.push(element);
//   return arr;
// }
// let arr = ["olma", "anor", "behi", "apelsin"];
// console.log(addElement(arr, 21));

//6-masala
// let arr = ["olma", "anor", "anjir", "behi"];
// function addElement(arr) {
//   arr.pop();
//   return arr;
// }
// console.log(addElement(arr));

//7-masala
// let arr = ["olma", "anor", "anjir", "behi"];
// function lengthelement(arr) {
//   let result = arr.length;
//   return result;
// }
// console.log(lengthelement(arr));

// 8-masala
// let arr = ["olma", "anor", "anjir", "behi"];
// function firstaddElement(arr) {
//   arr.unshift(100);
//   return arr;
// }
// console.log(firstaddElement(arr));

//9-masala
// let arr = ["olma", "anor", "anjir", "behi"];
// function removeElement(arr) {
//   arr.shift();
//   return arr;
// }
// console.log(removeElement(arr));

//10-masala
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7];
// function concatElement(arr) {
//   let res = arr1.concat(arr2);
//   return res;
// }
// console.log(concatElement(arr));

// //11-masala
// let arr = ["olma", "anor", "anjir", "behi"];
// function findElement(arr) {
//   let res = arr.includes("olma");
//   return res;
// }
// console.log(findElement(arr));

//12-masala
// let arr1 = ["olma", "Behi", "mandarin", "anor", "apelsin"];
// arr1.sort();
// console.log(arr1);
// function selectElement(arr) {
//   arr.sort();
//   return arr;
// }
// console.log(selectElement(arr));

//13-masala
// function findindexElement(arr) {
//   return arr.indexOf("qizil");
// }
// let arr = ["sariq", "yashil", "ko`k", "qizil"];

// console.log(findindexElement(arr));

//14-masala
// let arr = ["sariq", "yashil", "ko`k", "qizil"];
// function spliceElement(arr) {
//   arr.splice(0, 2);
//   return arr;
// }

// console.log(spliceElement(arr));

//15-masala
// function removeElement(arr) {
//   return arr;
// }
// console.log(removeElement(arr[(1, 2, 3, 4, 5)]));

//16-masala
// function addTwoElement(arr1, arr2) {
//   let res = arr1.concat(arr2);
//   return res;
// }
// let a = [1, 2, 3];
// let b = [6, 9, 11];
// console.log(addTwoElement(a, b));

//17-masala
// function changeFirstAndLastElement(arr) {
//   let first = arr[0];
//   let last = arr[arr.length - 1];
//   arr[0] = last;
//   arr[arr.length - 1] = first;
//   return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(changeFirstAndLastElement(arr));

//18-masala
// let arr = ["olma", "mandarin", "behi", "apelsin"];
// function removeAllElement(arr) {
//   while (i < arr) {
//     arr.pop;
//   }
//   return arr;
// }

// console.log(removeAllElement(arr));

//19-masala

//20-masala
// let arr = ["olma", "mandarin", "behi", "apelsin"];
// function repeatElement(arr) {
//   for (let i = 0; i <= arr.length; i += 2) {
//     console.log(i);
//   }
//   return arr;
// }
// console.log(repeatElement(arr));

//24-masala
// let arr = ["olma", "mandarin", "behi", "apelsin"];
// function reverseElement(arr) {
//   arr.reverse();
//   return arr;
// }
// console.log(reverseElement(arr));

//25-masala
// let arr = [-1, -2, 2, 3, 5, 6, 8];
// function filtrElement(arr) {
//   return arr > 0;
// }
// console.log(filtrElement(arr));

//33-masala
// let arr1 = [10, 5, 16, 8];
// let arr2 = [5, 9, 17];
// function concatElement(arr) {
//   let res = arr1.concat(arr2);
//   return res;
// }
// console.log(concatElement(arr));

//35-masala
// let arr = ["matiz", "damas", "cobalt", "spark"];
// function selectElement(arr) {
//   arr.sort();
//   return arr;
// }
// console.log(selectElement(arr));
// Massiv metodlariga oid masalalar

// 1-masala
// function addElement(arr, element) {
//   arr.push(element);
//   return arr;
// }
// let arr = ["olma", "mandarin", "behi", "apelsin"];
// console.log(addElement(arr, "nok"));

// //2-masala
// function removeElement(arr) {
//   arr.pop();
//   return arr;
// }
// let arr = ["olma", "mandarin", "behi", "apelsin"];
// console.log(removeElement(arr));

//3-masala
// function removeFirstElement(arr) {
//   arr.shift();
//   return arr;
// }
// let arr = ["olma", "mandarin", "behi", "apelsin"];
// console.log(removeFirstElement(arr));

//4-masala
// function addFirstElement(arr) {
//   arr.unshift("tarvuz");
//   return arr;
// }
// let arr = ["olma", "mandarin", "behi", "apelsin"];
// console.log(addFirstElement(arr));

//5-masala
// function findElement(arr) {
//   let res = arr.includes("olma");
//   return res;
// }
// let arr = ["olma", "mandarin", "behi", "apelsin"];

// console.log(findElement(arr));

//6-masala
// function findindexElement(arr) {
//   return arr.indexOf("olma");
// }
// let arr = ["olma", "mandarin", "behi", "apelsin"];

// console.log(findindexElement(arr));

//7-masala
// function findlastindexElement(arr) {
//   return arr.lastIndexOf("olma");
// }
// let arr = ["olma", "mandarin", "behi", "olma", "apelsin"];

// console.log(findlastindexElement(arr));

//8-masala
// let arr = ["olma", "mandarin", "behi", "olma", "apelsin"];
// function spliceElement(arr) {
//   arr.splice(0, 2, "tarvuz");
//   return arr;
// }

// console.log(spliceElement(arr));

//9-masala
// function addElement(arr, element) {
//   arr.push(element);
//   return arr;
// }
// let arr = ["matiz", "damas", "cobalt", "spark"];
// console.log(addElement(arr, "gentra"));

//10-masala
// function removeElement(arr) {
//   arr.pop();
//   return arr;
// }
// let arr = ["matiz", "damas", "cobalt", "spark"];
// console.log(removeElement(arr));

//11-masala
// function removeFirstElement(arr) {
//   arr.shift();
//   return arr;
// }
// let arr = ["matiz", "damas", "cobalt", "spark"];
// console.log(removeFirstElement(arr));

//12-masala
// function addFirstElement(arr) {
//   arr.unshift("tico");
//   return arr;
// }
// let arr = ["matiz", "damas", "cobalt", "spark"];
// console.log(addFirstElement(arr));

//13-masala
// function findElement(arr) {
//   let res = arr.includes("cobalt");
//   return res;
// }
// let arr = ["matiz", "damas", "cobalt", "spark"];

// console.log(findElement(arr));

//14-masala
// function findindexElement(arr) {
//   return arr.indexOf("damas");
// }
// let arr = ["matiz", "damas", "cobalt", "spark"];

// console.log(findindexElement(arr));

//15-masala
// function findlastindexElement(arr) {
//   return arr.lastIndexOf("matiz");
// }
// let arr = ["matiz", "damas", "cobalt", "spark", "matiz"];

// console.log(findlastindexElement(arr));

//16-masala
// let arr = ["matiz", "damas", "cobalt", "spark"];
// function spliceElement(arr) {
//   arr.splice(0, 3, "gentra", "nexia", "captiva");
//   return arr;
// }

// console.log(spliceElement(arr));

// 8-dars
//Asosiy metodlarga oid masalar

//1-masala

// let arr = [1, 2, 3, 5, 6, 9];
// function lengthElement(arr) {
//   return arr.length;
// }
// console.log(lengthElement(arr));

//2-masala
// let arr = [1, 2, 3, 5, 6, 9];
// function toStringElement(arr) {
//   let res = arr.toString();
//   return res;
// }
// console.log(toStringElement(arr));

//3-masala
// let arr = [1, 2, 3, 5, 6, 9];
// function joinElement(arr) {
//   let res = arr.join(", ");
//   return res;
// }
// console.log(joinElement(arr));

//4-masala
// let arr = [1, 2, 3, 4, 8, 9, 10];
// function addElement(arr, element) {
//   arr.push(element);
//   return arr;
// }
// console.log(addElement(arr, 12));

//5-masala
// let arr = [5, 3, 9, 15, 6, 77, 55];
// function removeElement(arr) {
//   arr.pop();
//   return arr;
// }
// console.log(removeElement(arr));

//6-masala
// let arr = [44, 52, 6, 5, 88, 9];
// function removefirstElement(arr) {
//   arr.shift();
//   return arr;
// }

// console.log(removefirstElement(arr));

//7-masala
// let arr = [2, 5, 6, 8, 3, 4, 7];
// function addFirstElement(arr, element) {
//   arr.unshift(element);
//   return arr;
// }
// console.log(addFirstElement(arr, 1));

//8-masala

// let arr1 = [25, 3, 6, 5, 6, 9];
// let arr2 = [25, 4, 56, 8, 63, 45];
// function unifyTwoelement(arr1, arr2) {
//   let res = arr1.concat(arr2);
//   return res;
// }
// console.log(unifyTwoelement(arr1, arr2));

//9-masala
// let arr = [2, 6, 8, 9, 4, 0];
// function spliceElement(arr) {
//   arr.splice(1, 3, 5, 10);
//   return arr;
// }
// console.log(spliceElement(arr));

//10-masala
// let arr = [5, 6, 8, 99, 4, 7];
// function sliceElement(arr) {
//   let res = arr.slice(1, 4);
//   return res;
// }
// console.log(sliceElement(arr));

//11-masala
// let arr = ["matiz", "gentra", "cobalt"];
// function lengthElement(arr) {
//   let res = arr.length;
//   return res;
// }
// console.log(lengthElement(arr));

//12-masala
// let arr = [1, 5, 3, 6, 5];
// function toStringElement(arr) {
//   let res = arr.toString();
//   return res;
// }
// console.log(toStringElement(arr));

//13-masala
// let arr = [1, 5, 36, 8, 9];
// function joinElement(arr) {
//   let res = arr.join("");
//   return res;
// }
// console.log(joinElement(arr));

//14-masala
// let arr = [1, 2, 3, 4, 8,15 , 14];
// function addElement(arr, element1, element2) {
//   arr.push(element1, element2);
//   return arr;
// }
// console.log(addElement(arr, 12, 14));

//15-masala
// let arr = [15, 14, 6, 8, 9, 4];
// function removeElement(arr) {
//   arr.pop();
//   return arr;
// }
// console.log(removeElement(arr));

//16-masala
// let arr = [15, 54, 68, 9, 84];
// function removefirstElement(arr) {
//   arr.shift();
//   return arr;
// }
// console.log(removefirstElement(arr));

//17-masala
// let arr = [14, 5, 65, 48, 75, 95, 72];
// function addFirstElement(arr, element) {
//   arr.unshift(element);
//   return arr;
// }
// console.log(addFirstElement(arr, 156));

//18-masala
// let arr1 = [15, 15, 659, 25, 14];
// let arr2 = [52, 41, 59];
// let arr3 = [25, 15, 76, 85];
// function mergeElement(arr1, arr2, arr3) {
//   let res = arr1.concat(arr2, arr3)
//   return res;
// }
// console.log(mergeElement(arr1, arr2, arr3));

//19-masala
// let arr = [85, 9, 58, 25, 95, 45];
// function spliceElement(arr) {
//   arr.splice(1, 1);
//   return arr;
// }
// console.log(spliceElement(arr));

//20-masala
// let arr = [14, 545, 6, 58, 5218, 5];
// function sliceElement(arr) {
//   let res = arr.slice(2, arr.length);
//   return res;
// }
// console.log(sliceElement(arr));

//Search metodlariga oid masalalar.

//1-masala
// let arr = [12, 13, 14, 15, 18, 20];
// function findElement(arr) {
//   let res = arr.includes(12);
//   return res;
// }
// console.log(findElement(arr));

//2-masala
// let arr = [1, 2, 5, 6, 8, 9];
// function findIndexElement(arr) {
//   let res = arr.indexOf(2);

//   return res;
// }
// console.log(findIndexElement(arr));

//3-masala
// let arr = [1, 2, 3, 5, 6, 7, 8, 5];
// function findLastIndexElement(arr) {
//   let res = arr.lastIndexOf(5);
//   return res;
// }
// console.log(findLastIndexElement(arr));

//4-masala
// let arr = [3, 2, 10, 5, 4, 6, 7, 20];

// let result = arr.find(function (value, index, ar) {
//   return value > 5;
// });

// console.log(result);

//5-masala
// let arr = [3, 2, 10, 20, 14, 1, 9, 21];
// let result = arr.findIndex(function (value, index) {
//   return index > 5;
// });
// console.log(result);

//6-masala

// let arr = ["Gentra", "Malibu", "BMW"];
// function findElement(arr) {
//   let res = arr.includes("Gentra");
//   return res;
// }
// console.log(findElement(arr));

//7-masala
// let arr = [1, 3, 4, 11, 10, 8, 9];
// function findIndexElement(arr) {
//   let res = arr.indexOf(10);
//   return res;
// }
// console.log(findIndexElement(arr));

//8-masala
// let arr = [1, 4, 59, 15, 75, 32];
// function findLastIndexElement(arr) {
//   let res = arr.lastIndexOf(15);
//   return res;
// }
// console.log(findLastIndexElement(arr));

//9-masala
// let arr = [3, 2, 10, 155, 4, 641, 71, 20];
// let result = arr.find(function (value, index, ar) {
//   return value > 100;
// });
// console.log(result);

//10-masala
// let arr = [14, 15, 6, 51, 13];
// let result = arr.find(function (value, index, ar) {
//   return index < 50;
// });
// console.log(result);
