export const binarySearchPattern = {
  id: 'binary-search',
  title: 'Binary Search',
  description: 'Divide and conquer algorithm for logarithmic search',
  coreIdea: 'Binary Search is a "divide and conquer" algorithm for finding an element in a sorted array. It repeatedly halves the search space by comparing the target value to the middle element. This logarithmic approach is vastly faster than a linear scan, reducing search time from O(n) to O(log n). It can also be used on the "answer space" if a problem has a monotonic property.',
  whenToUse: [
    'The input data is sorted (or can be treated as sorted).',
    'The problem asks to find a specific element or its insertion position.',
    'Finding a min/max value that satisfies a monotonic condition ("Binary Search on the Answer").',
    'A time complexity of O(log n) or O(n log n) is required.'
  ],
  problems: [
    {
      id: 'search-rotated-sorted-array',
      title: 'Search in Rotated Sorted Array',
      description: 'Given a rotated sorted array `nums` and a `target`, return the index of the `target` if it exists, otherwise -1.',
      solution: 'Use a modified binary search. In each step, determine which half of the current window (`left` to `mid` or `mid` to `right`) is sorted. Then, check if the target falls within the range of the sorted half. If it does, search in that half. If not, search in the other, unsorted half. This process continues to narrow down the search space logarithmically.',
      code: `var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) { // Left half is sorted
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // Right half is sorted
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};`,
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)'
    },
    {
      id: 'koko-eating-bananas',
      title: 'Koko Eating Bananas',
      description: 'Find the minimum eating speed `k` to eat all banana piles within `h` hours.',
      solution: 'This is a "binary search on the answer" problem. The search space for the answer `k` is from 1 to the size of the largest pile. We binary search this space. For a given `mid` speed, we check if it\'s possible to finish in `h` hours. If yes, it\'s a potential answer, so we try a smaller speed (search left). If no, the speed is too slow, so we need a larger speed (search right).',
      code: `var minEatingSpeed = function(piles, h) {
    let left = 1, right = Math.max(...piles);
    let result = right;

    const canFinish = (k) => {
        let hours = 0;
        for (const pile of piles) hours += Math.ceil(pile / k);
        return hours <= h;
    };

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (canFinish(mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return result;
};`,
      timeComplexity: 'O(n log m)',
      spaceComplexity: 'O(1)'
    }
  ]
};