# Heapsort
This sorting algorithm makes use of an implicit heap data structure to sort its elements. This method requires quite some initial setup, but is fairly straightforward afterwards.

Links to relevant Wikipedia articles:

https://en.wikipedia.org/wiki/Heapsort

https://en.wikipedia.org/wiki/Binary_heap

## What is a heap anyway?
A heap - in this case a binary heap - is a way to connect values in such a way that they're connected through a "parent-child relationship". In a binary heap that means every node, except for the first one, has one parent and that every parent, expect for the last "children" (elements) in the heap have exactly two children.

Or rather, that would be a binary tree. A binary heap is a binary tree with the added restriction of no parent having children with a greater value than itself. In this way the "root" of the binary tree will always be the largest value and the furthest down children will be the ones with the lowest values - and now we call it a binary heap.

In practice this can be implemented as an "abstract" or "implicit" data structure in the sense that it can be represented through other data structures. Either an array or a linked list can both be used to represent a heap - in this case an array is used.

When doing this, we build the heap in the following way:

Index 0 is the root element of the heap and its children can be found at index `2 * index of parent + 1` for the "left" child and at `2 * index of parent + 2` for the "right" child.

For the root element it's children will be at index `2 * 0 + 1 = 1` and `2 * 0 + 2 = 2`.

Every child can be found in this way.

Likewise, the array can be traversed in the opposite direction to find the parent of any given child: `Math.floor((index of child - 1) / 2)`.

For a node at index 6, it's parent will be: `Math.floor((6 - 1) / 2) = 2`. We can confirm that we can also find this relation from the opposite direction by using the previous formula to find a child index from a parent index: `2 * 2 + 2 = 6`

## From heap to sorted array
Assume we want to sort the random list: `[4, 2, 6, 9, 1, 4, 2, 3, 7, 6]`.

                                            
Converting it to a heap it would look like this:
    
    P1  P2  P3  P4  P5
    [9, 7,  6,  4,  6,  4,  2,  3,  2,  1].
        L1  R1  L2  R2  L3  R3  L4  R4  L5

Here P*N* refers to what number parent the given node is, while L*N* means the left child of P*N* and R*N* means the right child of P*N*. While it isn't explicitly part of the array, we have now arranged the values in such a way that we can abstractly view the array as a heap.

Also notice how this is _almost_ an oppositely sorted list. More importantly, notice how, using the previously stated ways to travel between a parent and its children, this has indeed turned into a valid (max)heap.

From here we can follow two steps to get a perfectly sorted list:
* Swap the first and the last element. We know that the first element is the greatest and should go to the end of the array. We no longer consider this index part of the heap, but instead part of the final sorted list.

It now looks like so: `[1, 7, 6, 4, 6, 4, 2, 3, 2, 9]`.

* We then have to "repair" the heap since we knowingly just made a very low value the root of the heap. We do this by comparing it with each of its children, swapping the parent and the greatest value child, if any child is of greater value than the parent. We do this until we no longer can do so, and the array should now look like: `[7, 6, 6, 4, 2, 3, 2, 1, 9]`.

This process is repeated until the array is finally sorted - by removing one node at a time from the abstract heap and adding it "back into the array"

## Algorithm performance
Upsides to heapsort include its low space complexity - it doesn't need anything extra!

Another upside is that it incrementally sorts the array - if you really need just the first few sorted values, you will guranteed get them after the first few run throughs.

With that being said, constructing the heap and reparing it after every "sort" operation is still timely. And so the worst-case performance is still: O(*n* log *n*), despite the very fast sorting when the heap is constructed.

The time consuming part of this algorithm is the fact that every repair can still require the root node to compare itself to all of the children of a specific branch - and the same comparison may even occur multiple times over the span of multiple iterations.