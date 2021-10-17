// Problem 16.3: Intersection
//
// Given two straight line segments (represented as a start point and end point) compute their point of intersection, if any.

// Line Segment A starts at (0, 0) and ends at (10, 10)
const A = {
    start: {
        x: 0,
        y: 0,
    },
    end: {
        x: 10,
        y: 10,
    },
}

// Line Segment B starts at (10, 0) and ends at (0, 10)
const B = {
    start: {
        x: 10,
        y: 0,
    },
    end: {
        x: 0,
        y: 10,
    },
};

function findIntersection(A, B) {
    // if the lines have the same slope, check if they collide
    if (getSlope(A) === getSlope(B)) {
        // get y-intercepts
        if (getYIntercept(A) != getYIntercept(B)) {
            return null;
        }

        // if they are in range return true

        // if not return false

    }

    // otherwise, get the intersection of the lines
    else {
        // find point-of-intersection

        // does that point fall within range?
    }
}

function getSlope(line) {
    const end = line.end;
    const start = line.start;
    const rise = end.y - start.y;
    const run = end.x - start.x;
    if (run === 0) return INFINITY;
    return (rise / run);
}

function getYIntercept(line) {

}


findIntersection(A, B);