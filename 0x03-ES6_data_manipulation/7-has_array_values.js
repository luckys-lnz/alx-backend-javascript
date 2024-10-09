export default function hasValuesFromArray(set, array) {
    return array.every(value => set.has(value))
}

// export default function hasValuesFromArray (set, array){
//     for(let value of array){
//         if(!set.has(value)){
//             return false;
//         }
//     }
//     return true;
// }