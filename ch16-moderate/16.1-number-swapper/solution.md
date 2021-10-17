# Problem 16.1: Number Swapper
Write a function to swap two numbers in place (that is, without temporary variables).

## Setup
We're given two variables (we're gonna assume integers, but really this should work for any numerical data within reason), that we need to swap the values of in-place. For instance, if I had two variables, `x = 1` and `y = 2`, by the end of the function, `x` would have to equal `2` and `y` equal to `1`. Pretty straightforward.

## Methodology
This problem is unfortunately gonna employ the use of arithmetic. Let's say, for an example, we have `x = 5` and `y = 10`. What are some ways we can make `x = 10`, using only the information we have from the two variables?

If we immediately set `x = y`, we lose the information stored in `x` forever, so that's a no go. But what we can do is record the difference between `x` and `y` and calculate the final values of the two from there. So let's have `x` store the difference between `x` and `y` for now.

```x = x - y // x = -5```

Since `x` now stores the difference between the two original values, we can set `y` to whatever `y` is plus the difference, and we'll end up with the original `x`.

```y = y + x // y = 5```

Now we simply reverse the operation to find the original value of y, and set it equal to x.

```x = y - x // x = 10```

And volia. We have swapped the variables, by recording the difference between them and calculating their initial values.