function calculate(num1, num2) {
    return num1 + num2
}
calculate(2, 3)

function calculate(num1, num2) {
    return num1 * num2
}
calculate(2, 3)
// ------------------------------------------------------------------------


// passing a function as a input to another function 

function add(num1, num2) {
    return num1 + num2
}
add(2, 3)

function mult(num1, num2) {
    return num1 + num2
}
mult(2, 3)

function calculator(num1, num2, operator) {
    return operator(num1, num2)
}
calculator(2, 3, add)
calculator(2, 3, mult)
// ----------------------------------------------------------------