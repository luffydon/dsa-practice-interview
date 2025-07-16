export const arraysHashingPattern = {
  id: 'arrays-hashing',
  title: 'Arrays & Hashing',
  description: 'Strategic interplay between arrays and hash maps for optimal search performance',
  coreIdea: 'The "Arrays & Hashing" pattern revolves around the strategic interplay between arrays (ordered, but slow to search) and hash maps (unordered, but instant to search). The pattern\'s solution is to make a space-time tradeoff: use the extra memory of a hash map to store the array\'s elements, transforming a slow O(n) search into a near-instant O(1) hash table lookup.',
  whenToUse: [
    'The input involves an array or a string.',
    'The core task requires checking for the existence, frequency, or uniqueness of elements.',
    'A naive solution would involve nested loops, resulting in O(n^2) time complexity.',
    'Keywords include "duplicate," "unique," "frequency," "count," "find a pair," or "anagram."'
  ],
  template: `function arrayAndHashingPattern(arr) {
    const seen = new Map();

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        const someValueToFind = /* calculation */;

        if (seen.has(someValueToFind)) {
            // Found what we're looking for.
            return;
        }
        seen.set(currentElement, i);
    }
    return;
}`,
  problems: [
    {
      id: 'contains-duplicate',
      title: 'Contains Duplicate',
      description: 'Given an integer array `nums`, determine if any value appears at least twice.',
      solution: 'The most optimal solution leverages a hash set for its constant-time average complexity for lookups. Iterate through the array once. For each element, check if it already exists in the set. If it does, a duplicate is found. If not, add it to the set. This trades O(n) space for O(n) time.',
      code: `var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};`,
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    {
      id: 'valid-anagram',
      title: 'Valid Anagram',
      description: 'Given two strings, `s` and `t`, determine if `t` is an anagram of `s`.',
      solution: 'An O(n) solution uses a hash map to count character frequencies. First, check if strings have the same length. Then, iterate through `s`, incrementing character counts in a map. Finally, iterate through `t`, decrementing counts. If a character\'s count goes below zero or doesn\'t exist, they are not anagrams.',
      code: `var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    return true;
};`,
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1) (or O(k) for k unique chars)'
    },
    {
      id: 'two-sum',
      title: 'Two Sum',
      description: 'Given an array `nums` and a `target`, find indices of two numbers that add up to the `target`.',
      solution: 'The optimal solution uses a hash map in a single pass. For each element `num`, calculate its required `complement` (target - num). Check if the `complement` exists in the map. If yes, return its stored index and the current index. If no, add the current `num` and its index to the map for future lookups.',
      code: `var twoSum = function(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
};`,
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    {
      id: 'group-anagrams',
      title: 'Group Anagrams',
      description: 'Given an array of strings `strs`, group the anagrams together.',
      solution: 'Use a hash map where the key is a canonical representation of an anagram. A simple canonical key is the sorted version of the string (e.g., "eat", "tea", "ate" all sort to "aet"). Iterate through the strings, generate the key for each, and add the original string to the list of values for that key in the map. The map\'s values will be the final groups.',
      code: `var groupAnagrams = function(strs) {
    const anagramGroups = new Map();
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!anagramGroups.has(key)) {
            anagramGroups.set(key, []);
        }
        anagramGroups.get(key).push(str);
    }
    return Array.from(anagramGroups.values());
};`,
      timeComplexity: 'O(m * n log n)',
      spaceComplexity: 'O(m * n)'
    }
  ]
};