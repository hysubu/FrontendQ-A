// Question1 >>>>>>>>>>>>
// Which elements is commen in this two array 
// const input1 = {a:1,b:2,c:3,d:10,e:12}
// const input2 = {f:1,e:12,f:6,d:10}
// const output = {d:10,e:12}   

// let obj =  {}
// for(let i in input1){
//     console.log(input1[i])
//     if(input1[i] == input2[i]){
//         obj[i] = (input1[i])
//     }

// }
// console.log("Common element are",obj)

// console.log(input1[1])


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Question2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// Write a programme to find the second largest number of array 
// var  input1 = [2,3,56,7,88,87,87]
// let output = 87
// let arr = input1.sort((a,b)=>a-b)
// console.log(arr)
// let res = arr[arr.length-1]
// // console.log(arr.length)
// for(let i = arr.length-2;i>=0;i--){
//     if (res !== input1[i]){
//         res = input1[i]
//         break
//     }
// }
// console.log(res)


// let arr = [...new Set(input1)].sort((a,b)=>a-b)
// console.log("second Largest Number",arr[arr.length-2])
// // output : 87 




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// let input = "Hello Iam subrat Mohanty"
// let arr = input.split(' ')
// console.log(arr)
// let rev = ""
// for(let i = arr.length -1; i>=0 ; i--){
//     for (let j = arr[i].length-1; j>0 ; i--)
//         rev +=  j

// }
// console.log(rev)

// function findMaxSubarray(array) {
//     console.log(array)
//     // Initialize two variables: maxEndingHere and maxSoFar.
//     // maxEndingHere stores the maximum sum of the subarray ending at the current index.
//     // maxSoFar stores the maximum sum of the subarray seen so far.
//     let maxEndingHere = 0,
//       maxSoFar = -Infinity;

//     // Iterate through the array.
//     for (let i = 0; i < array.length; i++) {
//       // Update maxEndingHere.
//       maxEndingHere = Math.max(maxEndingHere + array[i], array[i]);

//       // Update maxSoFar.
//       if (maxSoFar < maxEndingHere) {
//         maxSoFar = maxEndingHere;
//       }
//     }

//     // Return the maximum subarray.
//     return maxSoFar;
//   }

//   // Example.
//   const array = [1, 2, -3, 4, -1, 2, 1, -5, 4];
//   const maxSubarray = findMaxSubarray(array);
//   console.log(maxSubarray); // 6

// function binarySearch(array, target) {
//     // Initialize the left and right pointers.
//     let left = 0,
//       right = array.length - 1;

//     // Iterate while the left pointer is less than or equal to the right pointer.
//     while (left <= right) {
//       // Calculate the middle index.
//       let mid = Math.floor((left + right) / 2);

//       // If the target is equal to the element at the middle index, return the index.
//       if (array[mid] === target) {
//         return mid;
//       } else if (array[mid] < target) {
//         // Set the left pointer to the middle index + 1.
//         left = mid + 1;
//       } else {
//         // Set the right pointer to the middle index - 1.
//         right = mid - 1;
//       }
//     }

//     // Return -1 if the target is not found.
//     return -1;
//   }

//   // Example.
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const target = 5;
//   const index = binarySearch(array, target);
//   console.log(index); // 4


// const N = 5;
// const S = 12;
// const A = [1, 2, 3, 7, 5];
// function subarraySum(A, N, S) {
//     let start = 0;
//     let end = 0;
//     let currentSum = 0;
//     while (end <= N) {




//       if (currentSum === S){
//         console.log("curr",currentSum)
//         return [start + 1, end];




//       } else if (currentSum < S) {
//         console.log("endelseif", end)
//         currentSum += A[end];
//         console.log("currrrr",currentSum)
//         end++;

//  } else {
//         console.log("currele",currentSum)
//         currentSum -= A[start];
//         start++;
//       }
//     }
//     return [-1];
//   }
// //   const N = 5;
// //   const S = 12;
// //   const A = [1, 2, 3, 7, 5];
//   const result = subarraySum(A, N, S);
//   console.log(result);


// function bubbleSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++){
//         console.log("iiiii",arr[i], i)
//       for (let j = 0; j < n - i - 1; j++){
//         console.log("j",arr[j],j
//         )
//         // console.log("j+1",arr[j+1], j)
//         if (arr[j] > arr[j+1]) {
//           // Swap elements
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;

//         }
//       }
//     }
//     return arr;
//   }

//   const numbers = [7, 2, 5, 1, 9];
//   const sortedArray = bubbleSort(numbers);
//   console.log(sortedArray);



//   number = numbers.sort((a,b)=> a-b)
//   console.log(number)



//  Map And FIlter Difference >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let array = [120,30, 40, 3]
// const ne = array.map((item)=>{
//   return item + 2
// })
// console.log(ne); // [ 122, 32, 42, 5 ]

// // 
// const newforeav= array.forEach((item)=>{
//   return item + 3
// })
// console.log(newforeav)  // undefine 


// // console.log(typeof undefined)
// // console.log(typeof null)

// var a = null ;
// console.log(a)
// let res = []
// let array = [[12,34], [23,33], [1,2,3,4,5], [4,5,6,7,8]]
// for (let i in array){
//   console.log(array[i]);
//   if (Array.isArray(array[i])){
//     for(let j in array[i]){
//       res.push(array[i][j])
//     }
//   }
// }
// console.log(res)

// console.log(array.flat(2))

// let a = 12
// a = 122 
// console.log(a)


// const a = 100
// a = 200
// console.log(a) // erroe 


// {
//   const a = 100
// }
// console.log(a); //a is not ddeclae 


// function abc() {
//   for(var i = 0 ; i < 3 ; i++){

//     setTimeout(function log()
//     {
//       console.log(i)
//     },i * 1000)
//   }
// }
// abc()

// out put 0 1 2 

// function greet(arg){
//   work ="testing "
//   console.log(`helli iam ${arg} and i am a ${this.work}`) // work is testing here  
// }
// const person = {
//   work :"developer",
//   name :"subrat mohanty"
// }
// greet(person.name) // here we using normal function  
// // if we want to change the this value ysing call() method 
// greet.call(person,person.name)
// // 1st argument is :  person object 
// // 2nd argument is : pass  greet () function arguments 


// function greet(arg){
//   work ="testing "
//   console.log(`helli iam ${arg} and i am a ${this.work}`) // work is testing here  
// }
// const person = {
//   work :"developer",
//   name :"subrat mohanty"
// }
// // greet(person.name) // here we using normal function  
// // if we want to change the this value ysing apply() method 
// greet.apply(person,[person.name])
// // 1st argument is :  person object 
// // 2nd argument is : pass  greet () function arguments  as an array format 



// function greet(arg){
//   work ="testing "
//   console.log(`helli iam ${arg} and i am a ${this.work}`) // work is testing here  
// }
// const person = {
//   work :"developer",
//   name :"subrat mohanty"
// }
// // greet(person.name) // here we using normal function  
// // if we want to change the this value ysing apply() method 
// const newbindfun = greet.bind(person)
// // 1st argument is :  person object 
// // it cant take second arguments  
// // its create a new function 
// newbindfun(person.name)  
// // here we pass 2nd  argument  the new function 


//  Duplicate Elements  Remove 
// let ary = [10, 20 , 30 ,40 ,22,22,12,12]
// let newary = []
// for (let i in ary){
//   // This Condition Check the element is notavailable in newarry
//   if(newary.indexOf(ary[i]) === -1 ){   
//     newary.push(ary[i])
//   }
// }
// console.log(newary)


// const newarry =  Array.from(new Set(ary))
// console.log(newarry)



// let ary = [1,0,4,2,4,5,3]
// for(let i = 0 ; i < ary.length - 1 ; i++ ){
//   console.log(ary[i])
//   for(let j = 0 ; j < ary.length - i - 1 ; j++ ){
//     if(ary[j] > ary[j+1]){
//       let temp = ary[j]
//       ary[j] = ary[j+1]
//       ary[j+1] = temp
//     }
//   }
// }
// console.log(ary)


// let ary = [1, 3, 5, 6 ,6 ,2,13, 13]
// let max = ary[0]
// let oo = []
// let b = []
// for(let i in ary){
//   console.log(max, ary[i])
//   if(ary[i] > max){
//     b.push(ary[i])
//     max=ary[i];
//   }else{
//     oo.push(ary[i])
//   }
// }
// console.log(max)
// console.log(oo)
// console.log(b)



// let max = array[0]

// for(let i in array) {
//   if (array[i] > max) {
//     max= array[i]


//   }
// }
// console.log(max);

// let ma = Math.max(...array)
// console.log(ma)




// let arr = [2, 4, 3, 5, 67, 23, 11]
// let len = arr.length
// for(let i = 0 ; i < len ; i++){
//   for(let j = 0; j < len - 1 - i ; j++){
//     if(arr[j] > arr[j+1]){
//       let temp = arr[j]
//       arr[j] = arr[j+1]
//       arr[j+1]=temp
//     }

//   }
// }
// console.log(arr)


// let d = arr.find((num => num > 3))
// console.log(d)


// let n = 6;

// for(let i = 0 ; i < n ; i++){
//   let row = ""
//   for(let j  = 0  ; j < (n-i); j++){
//     row += ""
//   }
//   for(let k = 0  ; k < (n-i) ; k++){
//     row +=" *"

//   }
//   console.log(row)
// }









// for(let i = 0  ;  i < n ; i++){
//   let row = " "
//   for (let j =  0 ; j< i ; j++){
//     row += "* "
//   }
//   console.log(row)
// }





//  a  character vowel or consonent 
// function vowel_or_consonent(char){
//   const lower  = char.toLowerCase() 
//   console.log(lower)
//   let vawel = ["a", "e" , "i" , "o" , "u"]
//   if (vawel.includes(lower)){
//     console.log(char,"is vawel")
//   }
//   else{
//     console.log("consonent")
//   }
// }
// vowel_or_consonent("C")





// function alphabet_or_not(char){
//   if(char.toLowerCase()){
//     console.log(/^[a-z]$/i.test(char))
//   }
  
// }
// alphabet_or_not("e")


// function aschii_value(char){
//   console.log(char.charCodeAt())
// }
// aschii_value("w")



// function check_uppercase_lowercase_special_char(char){
//   if (/[a-z]/.test(char)){
//     console.log("lowercase")
//   }else if (/[A-Z]/.test(char)){
//     console.log("uppercase")
//   }else if(typeof(parseInt(char)) === "number") {
//     console.log("number")
//   }else{
//     console.log("specialcharcter")
//   }
// }
// check_uppercase_lowercase_special_char("s")




// function even_or_odd(char){
//   if(char % 2 == 0){
//     console.log("even number")
//   }else{
//     console.log("odd number")
//   }
// }

// even_or_odd(9)







// function number_positiv_or_negative(char){
//   if (char >= 0){
//     console.log("positiove")
//   }else if(char <= 0 ){
//     console.log("negative")
//   }

// }
// number_positiv_or_negative("-12")



// function greatest_number(a , b){
//   if(a>b){
//     console.log("gretest", b)
//   }
//   else if (a<b){
//     console.log("greates", b)
//   }
// }

// greatest_number(13, 34)


// function greatest_number(a, b){
//   console.log(Math.max(a, b))
// }
// greatest_number(12, 4)



// function number_of_digit(num){
//   console.log(num.toString().length)
// }
// number_of_digit(123333)



// function sum_of_digit(num){
//   let total = 0
//   let str = num.toString()
//   for(let i = 0 ; i < str.length ; i++){
//     total += parseInt(str[i])
//   }
//   console.log(total)
// }

// sum_of_digit(123444)




// function sum_of_naturalnumber(N){
//   let total = 0
//   for(let i = 1 ; i <= N ; i++){
//     total += i
//   }
//   console.log(total)
// }
// sum_of_naturalnumber(2)




// function reverse_number(num){
//   var dd = 0
//   while (1 < num){
//     var d = num % 10
//     dd = dd * 10 + d 
//     num = Math.floor(num / 10)
//   } 
//   console.log(dd)
// }

// reverse_number(231)




// function factorial(num){
//   var fac = 1 
//   for (let i = 1 ; i <= num; i++ ){
//     fac *=i  

//   }
//   console.log(fac);
// }

// factorial(5)





// function primenumber(num){
//   var count = 0 
//   for (let i = 1 ; i < num ; i++){
//     if(num % i == 0 ){
//       count +=1
//     }
//   }
//   if(count <= 2){
//     console.log("prime number")
//   }
// else{
//   console.log('not prime')
// }
// }
// primenumber(17)




// function palindrom_number(word){
//   var len = word.length
//   var rever = ""
//   for (let i in word) {
//     rever = rever+word[len-i-1]
//   }
//   if(rever.toLowerCase() === word.toLowerCase()){
//     console.log("palindrom number")
//   }
// }
// palindrom_number("REVER")


// const b = "1243"
// sum = 0
// for (const c of b){
//   console.log(c);
//   sum +=Math.pow(parseInt(c), b.length)
// }
// if (b === sum){
//   print("c")
// }
// console.log(sum)


function  armstrong_number(num){
  let str = num.toString();
  let len = str.length
  let sum = 0

  for(let i of str){
    sum += Math.pow(parseInt(i) , len)
  }
  if (num === sum){
    console.log("armstrong")
  }else{
    console.log("Not Armstrong")
  }
}

armstrong_number(1234)






function perfect_number(){
  
}