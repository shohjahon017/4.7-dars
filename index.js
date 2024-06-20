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
let arr = ["matiz", "damas", "cobalt", "spark"];
function selectElement(arr) {
  arr.sort();
  return arr;
}
console.log(selectElement(arr));
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
