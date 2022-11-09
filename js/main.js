// const numbers= [1,5,6,4,6,7,8];


// const largestHeights = (values) => {
//     let highest = 0;
//     for (let i=0; i<numbers.lenght; i+=1) {
//         if (values[i] > highest) {
//             highest = values[i];
//         }
//     }
//     return highest;
// }

// console.log(largestHeights(numbers));




// const numbers = [1,3,7,9,2];
// // console.log(Math.max(...numbers));

// const largestNumber = (values) => {
//     let highest = 0 ;
//     for (let i=0 ; i<values.lenght; i++) {
//         if(values[i]>highest){
//             highest = values[i];
//         }
//     }
//     return highest;
// }
// console.log(largestNumber(numbers));


// function highest(){
//     let array = [1,5,17,9,28,3,5,28];
//     let largest= array[0];
//     for( let i=0; i<array.lenght; i++){
//     if(array[i]>largest){
//         largest= array[i];
//     }
// }
// document.write(`the largest number in the array is ${largest}`)
// }

// const numbers = [1,11,2,21,35];
// const max = Math.max(...numbers);
// console.log(max);


const numbers = [1,3,7,17,9,35,2,8,50];
const largestNumber = (values) => {
    let highest = 0;
    for(let i=0; i<values.length; i++){
        if(values[i]>highest){
            highest = values[i];
        }
        // if (values[i] == numbers[i]){
        //     count++;
        //     break;
        // }
        
    }
    return highest;
}
console.log(largestNumber(numbers));