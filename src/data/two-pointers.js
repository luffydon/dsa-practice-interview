export const twoPointersPattern = {
  id: 'two-pointers',
  title: 'Two Pointers',
  description: 'Coordinated search using two indices to reduce time complexity',
  coreIdea: 'The Two Pointers pattern replaces nested loops with a single pass using two coordinated indices ("pointers"). Pointers can start from opposite ends of a sorted array and move towards each other, or one can be a "fast" pointer moving ahead of a "slow" pointer. This intelligently explores the search space and often reduces time complexity from quadratic to linear.',
  whenToUse: [
    'Input is a sorted array or a linked list.',
    'The problem asks to find a pair, triplet, or subarray with a certain property.',
    'An O(1) space solution is required, ruling out hash maps.',
    'Keywords include "pair with sum," "palindrome," "sub-array."'
  ],
  problems: [
    {
      id: 'valid-palindrome',
      title: 'Valid Palindrome',
      description: 'Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.',
      solution: 'Use two pointers, `left` at the start and `right` at the end. Move them towards each other. At each step, skip non-alphanumeric characters. Then, compare the lowercase characters at `left` and `right`. If they don\'t match, return false. If the loop completes, it\'s a palindrome.',
      code: `var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    const isAlphanumeric = (char) => /[a-zA-Z0-9]/.test(char);

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) left++;
        while (left < right && !isAlphanumeric(s[right])) right--;
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }
    return true;
};`,
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    {
      id: 'three-sum',
      title: '3Sum',
      description: 'Given an integer array `nums`, find all unique triplets `[nums[i], nums[j], nums[k]]` such that their sum is zero.',
      solution: 'First, sort the array. Then, iterate through the array, fixing one number `nums[i]`. For each `nums[i]`, use the two-pointer (opposite ends) technique on the rest of the array to find a pair that sums to `-nums[i]`. Careful handling of duplicates is required for both the main loop element and the two-pointer elements to ensure the uniqueness of the resulting triplets.',
      code: `var threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};`,
      timeComplexity: 'O(n^2)',
      spaceComplexity: 'O(1) or O(n) depending on sort'
    }
  ]
};