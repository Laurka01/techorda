/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    var selectednums = [];
    
    for (const num of nums) {
        if (num % 2 === 0){
            let a = num * 2
            selectednums.push(a)
        }
        if (num % 2 != 0) {
            let b = num * 3
            selectednums.push(b)

        }
    }       
    return selectednums
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}