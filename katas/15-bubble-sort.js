function bubbleSort(arr, calls = 0) {
    const nums = JSON.parse( JSON.stringify(arr) );

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            const firstNum = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = firstNum;
        }
    }

    calls++;

    if (calls === nums.length - 1) {
        return nums;
    }
    
    return bubbleSort(nums, calls);
}

module.exports = bubbleSort;
