# Problem 16.3: Intersection
Given two straight line segments (represented as a start point and end point) compute their point of intersection, if any.

## Setup
We're given two line segments in the form of a set of two pairs of points, denoting the ends of each segment. Let's say for simplicity's sake that these are going to be `A1` and `A2` and `B1` and `B2`. Each point has a pair of `x` and `y` coordinates.

## Methodology
The meat of this problem is cases. There are a number of cases that either meet or do not meet the criteria for "intersection:

Intersects:
- Ends are the same point
- Lines are the same
- Intersection at some point along both lines

Does not intersect:
- Lines are parallel and not the same line
- Lines do not intersect between bounds of either segment

So, the things we are checking can be summed up as thus.
1. Do the lines have the same slope? If so, do they have the same y-intercept? If not, return null, if so, does a point of one line segment fall within the range of the other? If so, return the intersection, if not, return null.
2. Where do the lines intersect? Does that point inside the bounds of either line segment? If no, return null. If yes, return the point.
