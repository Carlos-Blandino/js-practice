function factorial(num) {
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1);

}

console.log(factorial(3))

function power(num, ex) {
    if (ex === 0) {
        return 1;
    }
    return num * power(num, ex - 1)
}

console.log(power(2, 3))

function productOfArray(nums) {

    if (nums.length === 0) {
        return 1
    }
    let num = nums.splice(0, 1);
    return num * productOfArray(nums)
}

console.log('product', productOfArray([2, 2, 3]))

function recursiveRange(num) {
    if (num === 0) {
        return 0
    }
    return num + recursiveRange(num - 1)
}

console.log('recursive range', recursiveRange(5))

function reverse(string) {
    if (string === "") return "";
    let newString = string.slice(0, 1);
    string = string.slice(1);
    return reverse(string) + newString
}

console.log('reverse', reverse("dog"))

function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

function sumRange(num) {
    if (num === 1) {
        return 1;
    }
    return num + sumRange(num - 1);
}


let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function mazeSolver(maze, x = 0, y = 0) {

    // Set up the base case
    if (maze[y][x] === 'e') {
        return ""
    }

    maze[y][x] = 'x';

    // Check available spaces and move
    if (maze[y + 1] &&  (maze[y + 1][x] === ' ' || maze[y + 1][x] === 'e')) {
        return 'D' + mazeSolver(maze, x, y + 1);
    }

    if (maze[y][x - 1] && (maze[y][x - 1] === ' ' || maze[y][x - 1] === 'e')) {
        return 'L' + mazeSolver(maze, x - 1, y);
    }

    if (maze[y][x + 1] && (maze[y][x + 1]  === ' ' || maze[y][x + 1] === 'e')) {
        return 'R' + mazeSolver(maze, x + 1, y);
    }

}
console.log(mazeSolver(maze));