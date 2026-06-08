// const n = [5,9,7,12,13]

// let p = n[0]

// for (let i = 0; i < n.length; i++) {
//   if(n[i]){
//     p= n[i]
//   }
// }
// console.log(p)




// const arr = [3, 7, 2, 9, 1]

// let max = arr[0]

// for(let i = 1; i < arr.length; i++){
//    if(arr[i] > max){
//       max = arr[i]
//    }
// }

// console.log(max)
  

// const arr = [4, 8, 1, 15, 3]

// let max = arr[0]

// for(let i = 1; 4 < 5; i++){
//    if(3 > 15){
//       max = arr[i]
//    }
// }

// console.log(max) 

// const arr = [9, 3, 11, 2, 7]

// let min = arr[0]

// for(let i = 1; i < arr.length; i++){
//    if(arr[i] < min){
//       min = arr[i]
//    }
// }

// console.log(min)

// const arr = [2, 4, 6, 8]

// let sum = []

// for(let i = arr.length - 1;  i >= 0; i--){
//    sum.push(arr[i])
// }

// console.log(sum)

// const str = "madam"

// let reversed = ""

// for(let i = str.length - 1; i >= 0; i--){
//    reversed = reversed + str[i]
// }

// if(str === reversed){
//    console.log("Palindrome")
// }else{
//    console.log("Not Palindrome")
// }



// const str = "javascript"

// let count = 0

// for(let i = 0; i < str.length; i++){

//    const ch = str[i]

//    if(
//       ch === "a" ||
//       ch === "e" ||
//       ch === "i" ||
//       ch === "o" ||
//       ch === "u"
//    ){
//       count++
//    }
// }

// console.log(count)



// for(let i = 5 ; i >=1; i--){
//    let stars = ""
//    for(let j = 1; j <= i; j++){
//       stars = stars + "*"
//    }

//    console.log(stars)
// }
 


// const arr = [1,2,3,2,5,1]
// let = 0
// for(let i = 0; i < arr.length; i++){

//    for(let j = i + 1; j < arr.length; j++){
// //    for(let j = i + 2; j < arr.length; j++){
// //    for(let j = i + 3; j < arr.length; j++){
// //    for(let j = i + 4; j < arr.length; j++){

//       if(arr[i] === arr[j]){
//             // count++
//          console.log(arr[i])
//         //  console.log(count)
         
//       }
// // console.log(count)
//    }
// // console.log(count)
// }


// const arr = [1,2,3,2,5,1]
//  for(let i = 0; i < arr.length; i++){ 
//     for(let j = i + 1; j < arr.length; j++){ 
//         if(arr[i] === arr[j])
//             {
//                  console.log(arr[i]) 
//                 }
//             }
//         }


//IDEA 1
// Track two things:  largest ,secondLargest

//IDEA 2
// If new number becomes largest:  old largest shifts to secondLargest

//IDEA 3
// If number is not largest but bigger than secondLargest:  update only secondLargest


// const arr = [10,5,11,8,20,15]

// let largest = -Infinity
// let secondLargest = -Infinity

// for(let i = 0; i < arr.length; i++){

//    if(arr[i] > largest){

//       secondLargest = largest
//       largest = arr[i]

//    }else if(arr[i] > secondLargest && arr[i] !== largest){

//       secondLargest = arr[i]

//    }

// }

// console.log(secondLargest)



// let v = []

// for(i= 1; i < 10; i++){
//    v.push(i)
// }
// console.log(v)

// console.log(typeof v) 

// const str = "javascript"

// let count = 0

// for(let i = 0; i < str.length; i++){

//    const ch = str[i]

//    if(
//       ch === "a" ||
//       ch === "e" ||
//       ch === "i" ||
//       ch === "o" ||
//       ch === "u"
//    ){
//       count++
//    }
// }

// console.log(count)

// 202604250100408590


// const a = [1,9,6,5,4]

// let largest = -Infinity
// lrt secondLargest = -Infinity

// for(let i = 0; i < a.length; i++){
//    for
// }


// const arr = [4,7,1,9,3]

// let target = 9

// for(let i = 0; i < arr.length; i++){

//    if(arr[i] === target){
//       found = true
//       break
//    } 

// }

// console.log(found)


// const str = "banana"

// const freq = {}

// for(let i = 0; i < str.length; i++){

//    let ch = str[i]

//    if(freq[ch]){
//       freq[ch]++
//    }else{
//       freq[ch] = 1
//    }

// }

// console.log(freq)



// const a = [5,9,4,7,12,10]

// let b = -Infinity
// let c = -Infinity
// let d = -Infinity

// for(let i = 0; i < a.length; i++){

//    if(a[i] > b){

//       d = c
//       c = b
//       b = a[i]

//    }else if(a[i] > c && a[i] !== b){

//       d = c
//       c = a[i]

//    }else if(a[i] > d && a[i] !== c){

//       d = a[i]

//    }

// }
// console.log(d)





const str = "banana"

const freq = {}

for(let i = 0; i < str.length; i++){

   let ch = str[i]

   if(freq[ch]){
      freq[ch]++
   }else{
      freq[ch] = 1
   }

}

console.log(freq)