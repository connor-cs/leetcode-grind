// 1. Two Sum

//brute force solution
const twoSum = function (nums, target) {
    for (let i=0; i<nums.length; i++){
        for (let j=0; j<nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [nums[i], nums[j]]
            }
        }
    }
    return null
}

//hashmap solution

const Twosum = function (nums, target)  {
    const map={}
    for (let i=0; i<nums.length; i++) {
        map[nums[i]] ? 
    }
}

//14. Longest Common Prefix

const longestCommonPrefix = function (strs) {
    if (!strs.length) return ''
    for (let i=0; i<=strs[0].length; i++) {
        for (let j=1; j<strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return strs[0].slice(0, i)
            }
        }
    }
    return strs[0]
}

// better version user .every()

const longestCommon = function (strs) {
    if (!strs.length) return ''
    for (let i=0; i<=strs[0].length; i++) {
        if (!strs.every(str =>str[i] ===[0][i])) {
            return strs[0].slice(0,i)
        }
    }
    return strs[0]
}