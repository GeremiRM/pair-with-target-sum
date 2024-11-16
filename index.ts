/**
 * Pair with Target Sum (easy)
Problem Statement

Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target. If no such pair exists return [-1, -1].
 */


const findPairIndex = (n: number[], target: number): number[] => {
    let leftMarker = 0; 
    let rightMarker = n.length - 1; 
    
    while (leftMarker < rightMarker) {
        const sum = n[leftMarker] + n[rightMarker]; 

        if(sum === target) {
            return [leftMarker, rightMarker]; 
        }

        if(sum > target) {
            rightMarker--;
        } else {
            leftMarker++; 
        }
    }



    return [-1, -1]
}

console.log(findPairIndex([1,2,3], 3))