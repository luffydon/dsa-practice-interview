export const slidingWindowPattern = {
  id: 'sliding-window',
  title: 'Sliding Window',
  description: 'Efficient processing of contiguous subarrays or substrings',
  coreIdea: 'The Sliding Window pattern is used for problems involving contiguous subarrays or substrings. A "window" slides over the data, and its contents are processed. Instead of re-computing for every possible subarray (an O(n^2) approach), the window efficiently updates its state in O(1) time as it slides, leading to an overall O(n) solution. The window can be of a fixed or dynamic size.',
  whenToUse: [
    'Problem involves a contiguous subarray, substring, or sequence.',
    'Goal is to find a min/max/longest/shortest subarray satisfying a condition.',
    'Input is a linear data structure like an array, string, or linked list.',
    'A naive solution would be O(n^2).'
  ],
  problems: [
    {
      id: 'longest-substring-without-repeating',
      title: 'Longest Substring Without Repeating Characters',
      description: 'Given a string `s`, find the length of the longest substring that does not contain any repeating characters.',
      solution: 'Use a dynamic sliding window with `left` and `right` pointers and a `Set` to track characters in the current window. Expand the window by moving `right`. If a character `s[right]` is already in the set, shrink the window from the left (removing `s[left]` from the set and incrementing `left`) until the duplicate is removed. After each expansion, update the max length.',
      code: `var lengthOfLongestSubstring = function(s) {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};`,
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k) (k = unique chars)'
    },
    {
      id: 'minimum-window-substring',
      title: 'Minimum Window Substring',
      description: 'Given strings `s` and `t`, find the minimum window (substring) in `s` which contains all the characters of `t`.',
      solution: 'Use a dynamic sliding window and two frequency maps: one for the target `t` (`tCounts`) and one for the current window (`windowCounts`). Track how many required characters are satisfied (`have` vs `need`). Expand the window with `right`. Once `have === need`, the window is valid. Then, try to shrink it from the left while it remains valid, updating the minimum length found so far.',
      code: `var minWindow = function(s, t) {
    if (t.length > s.length) return "";
    const tCounts = {};
    for (const char of t) {
        tCounts[char] = (tCounts[char] || 0) + 1;
    }

    let left = 0, have = 0, need = Object.keys(tCounts).length;
    let res = [-1, Infinity], windowCounts = {};

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        if (tCounts[char] && windowCounts[char] === tCounts[char]) {
            have++;
        }

        while (have === need) {
            if ((right - left + 1) < res[1]) {
                res = [left, right - left + 1];
            }
            let leftChar = s[left];
            windowCounts[leftChar]--;
            if (tCounts[leftChar] && windowCounts[leftChar] < tCounts[leftChar]) {
                have--;
            }
            left++;
        }
    }
    return res[1] === Infinity ? "" : s.substring(res[0], res[0] + res[1]);
};`,
      timeComplexity: 'O(|s| + |t|)',
      spaceComplexity: 'O(|t|)'
    }
  ]
};