// Problem 16.1: Number Swapper
// Write a function to swap two numbers in place (that is, without temporary variables)
function swap(x, y) {
    console.log('original pair: [' + x + ', ' + y + ']');

    // record the difference between original x and original y
    x = x - y;

    // set y equal to y plus the difference between the original x and original y
    y = y + x;

    // calculate x by undoing the operation we did above to the original y
    x = y - x;
    
    console.log('final pair: [' + x + ', ' + y + ']');
}
swap(10, 300);