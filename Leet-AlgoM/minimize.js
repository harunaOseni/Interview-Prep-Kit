// shrinking number line

// We have an array of n integers, point, and an integer k. We can perform either of the following operations once for each point[i] in point

// Increment point[i] by k
// Decrement point[i] by k.
// We want to perform an operation on each point[i] such that the difference between the maximum and minimum values in the array after performing all operations is minimal.

// For example, if the array point = [0,1,2,3] and k=2, we can add k to the first three elements and subtract it from the last to get pointnew = [2,3,4,1]. The maximum element is 4 and the minimum is 1. Their absolute difference is 3. The permutations of operations on the example array follow :

// point = [4, 7, -7] k = 5
// output = 4

// point = [-3, 0, 1] k = 3
// output = -2

// point = [-100000, 100000] k = 100000
// output = 0

function minimize(point, k) {
    // add k to all positive element and subtract k from all negative element
    for (let i = 0; i < point.length; i++) {
        if (point[i] < 0) {
            point[i] += k;
        } else {
            point[i] -= k;
        }
    }

    // sort the array
    point.sort((a, b) => a - b);


    // calculate the absolute difference between the max and min element
    let max = Math.max(...point);
    let min = Math.min(...point);
    let diff = max - min;
    return Math.abs(diff);
}
