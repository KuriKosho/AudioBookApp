function largestRectangleArea(heights) {
  let stack = [-1];
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 1 && heights[stack[stack.length - 1]] >= heights[i]) {
      let height = heights[stack.pop()];
      let width = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  while (stack.length > 1) {
    let height = heights[stack.pop()];
    let width = heights.length - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, height * width);
  }
  return maxArea;
}

function maximalRectangle(matrix,n,m) {
  if (matrix.length === 0) return 0;
  let maxArea = 0;
  let dp = Array.from({ length: matrix[0].length }, () => 0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      dp[j] = matrix[i][j] === '1' ? dp[j] + 1 : 0;
    }
    maxArea = Math.max(maxArea, largestRectangleArea(dp));
  }
  return maxArea;
}

// Test case
const matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0']
];
console.log("Diện tích lớn nhất có thể làm vườn là:", maximalRectangle(matrix,4,5));
