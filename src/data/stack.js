export const stackPattern = {
  id: 'stack',
  title: 'Stack',
  description: 'Last-In, First-Out data structure for nested processing',
  coreIdea: 'A Stack is a Last-In, First-Out (LIFO) data structure. The last element added is the first one to be removed. This makes it perfect for problems involving processing items in reverse order, managing nested structures (like parentheses), or finding the "next greater/smaller element" using a monotonic stack.',
  whenToUse: [
    'Problem involves matching nested pairs (e.g., parentheses, HTML tags).',
    'Evaluating expressions in a specific order (e.g., Reverse Polish Notation).',
    'Finding the next greater or smaller element for each item in a sequence (Monotonic Stack).',
    'Simulating recursion iteratively to avoid stack overflow.'
  ],
  problems: [
    {
      id: 'valid-parentheses',
      title: 'Valid Parentheses',
      description: 'Given a string `s` containing just `( ) { } [ ]`, determine if it is valid.',
      solution: 'Iterate through the string. When an opening bracket is found, push it onto a stack. When a closing bracket is found, pop from the stack and check if the popped opening bracket is of the same type. If it\'s not, or if the stack was empty, the string is invalid. After the loop, the string is valid only if the stack is empty.',
      code: `var isValid = function(s) {
    const stack = [];
    const map = { "(": ")", "{": "}", "[": "]" };
    for (const char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            const lastOpen = stack.pop();
            if (map[lastOpen] !== char) return false;
        }
    }
    return stack.length === 0;
};`,
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    {
      id: 'daily-temperatures',
      title: 'Daily Temperatures',
      description: 'Given `temperatures`, return an array `answer` where `answer[i]` is the number of days you wait for a warmer temperature.',
      solution: 'Use a monotonic decreasing stack that stores indices. Iterate through the temperatures. For each temp, while the stack is not empty and the current temp is warmer than the temp at the stack\'s top index, pop from the stack. The difference between the current index and the popped index is the answer for the popped day. Then, push the current index onto the stack.',
      code: `var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = []; // Stores indices
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return answer;
};`,
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    }
  ]
};