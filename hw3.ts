/* ==========================================================================  **
## HW Instructions

See this Google doc for clarifications:

https://docs.google.com/document/d/1RJ66oXuASPTlm4Oc040oKW7Gt9L6Qs5ceV5QE3Trpdo/edit?usp=sharing

** ==========================================================================  **


1. Push your solution, contained entirely in hw3.ts, back to the github classroom
   repository. Please make sure you solution compiles!!! 

   To run the typescript compiler (`tsc`), make sure you have it installed
   ```
   tsc -v
   >> Version 4.4.3
   ```
   Then run the compiler
   ```
   tsc --strict --target es2019 --module commonjs hw3.ts
   ```
   to produce a file `hw3.js`. If we cannot compile your solution with `tsc`, we
   will not grade your submission. Even if you are looking for partial credit,
   your entire hw3.ts must compile, and we must be able to run the compiled js file
   using `node`. **Do not** commit your `.js` file.
2. **Do not** change any of the function interfaces.
3. **Do not** use any external libraries.
4. Replace `throw Error("TODO")` with your code. If you do not attempt a problem,
   please leave the `throw Error("TODO")` code there unmodified.
5. Always remember to check the function input types and the output types.
6. You can create any other additional helper functions that you would like.
7. You can leave testing code in provided that your code compiles and does not
   depend on external libraries. Remember it is up to you to test your own code.
8. You can use your solutions to questions in this assignment to answer other question
   in this assignment.

** ============================================================================ */


/* ==========================================================================  **
## Honor Pledge
** ============================================================================ */

export const HONOR_PLEDGE = "I pledge on my honor that this assignment is my own work.";
export const SIGNATURE = "Darren Wong"; // TODO: FILL ME IN

// If you used resources, please list them here
export const RESOURCES_CONSULTED = [
    "www.google.com", // TODO: FILL ME IN
];


/* ==========================================================================  **
## OPTIONAL SURVEY

This section is purely optional. We are mainly asking because we would like to
improve the homeworks to see what you're thinking as you try to solve these
problems. This will not affect your grade in any way. As a reminder, Google is a
resource that we all use.

Example queries:
1. typescript dictionary
2. split array typescript
3. find midpoint of array

** ============================================================================ */

export const GOOGLE_QUERIES: {[id: string]: string[]} = {
    "1a": [],
    "1b": [],
    "2": [],
    "3a": [],
    "3b": [],
    "3c": [],
    "bonus": [],
}; 


/* ==========================================================================  **
## Problem 1: Towards recursive functions with arrays (20 pts)
** ============================================================================ */


/* ----------------------------------------------------- **
### Problem 1a (10 pts):

Write a function that splits an array into two "halves".
If there are an odd number of elements, put the extra element in the left half.

Example 1:

    splitArrayOnce([]) = 
        [ [], [] ]

Example 2:

    splitArrayOnce([1]) =
        [ [ 1 ], [] ]

Example 3:

    splitArrayOnce(["hello", "world"]) =
        [ [ 'hello' ], [ 'world' ] ]

Example 4:

    splitArrayOnce(["csc600", "is", "fun"]) =
        [ [ 'csc600', 'is' ], [ 'fun' ] ]

Example 5:

    splitArrayOnce([3, 2, 1, 4]) =
        [ [ 3, 2 ], [ 1, 4 ] ]

** ----------------------------------------------------- */

export function splitArrayOnce<T>(arr: T[]): [T[], T[]] {
    let midpt = Math.floor(arr.length/2);
    let copyArray1: T[] = [];
    let copyArray2: T[] = [];

    if(arr.length == 0){
        return [[], []];
    }
    else if(arr.length == 1){
        return [[arr[0]], []];
    }
    else if(arr.length % 2 == 0){
        for(let i = 0; i < midpt; i++){
            copyArray1[i] = arr[i];
        }
        for(let j = 0; j < arr.length - midpt + 1; j++){
            copyArray2[j] = arr[midpt++];
            
        }
        return [copyArray1, copyArray2];
    }
    else{
        for(let i = 0; i <= midpt; i++){
            copyArray1[i] = arr[i];
        }
        for(let j = 0; j < arr.length - midpt; j++){
            copyArray2[j] = arr[++midpt];
        }
        return [copyArray1, copyArray2];
    }
}

//Q1a Testing Code
// console.log("Q1a. [" + splitArrayOnce([])[0]+"]["+ splitArrayOnce([])[1] +"]");
// console.log("Q1a. [" + splitArrayOnce([1])[0]+"]["+splitArrayOnce([1])[1]+"]");
// console.log("Q1a. [" + splitArrayOnce(["hello", "world"])[0]+"]["+splitArrayOnce(["hello", "world"])[1]+"]");
// console.log("Q1a. [" + splitArrayOnce(["csc600", "is", "fun"])[0]+"]["+splitArrayOnce(["csc600", "is", "fun"])[1]+"]");
// console.log("Q1a. [" + splitArrayOnce([3, 2, 1, 4])[0]+"]["+splitArrayOnce([3, 2, 1, 4])[1]+"]");

/* ----------------------------------------------------- **
### Problem 1b (10 pts):

Write a function that splits an array into two "halves" and then
splits each half respectively again into two "havles". Thus you will
end up with 4 "quarters" at the end. As before, if there are an odd
number of elements, put the extra element in the left half.


Example 1:

    splitArrayTwice([]) =
        [ [ [], [] ], [ [], [] ] ]

Example 2:

    splitArrayTwice([1]) =
        [ [ [ 1 ], [] ], [ [], [] ] ]

Example 3:

    splitArrayTwice(["hello", "world"]) =
        [ [ [ 'hello' ], [] ], [ [ 'world' ], [] ] ]

Example 4:

    splitArrayTwice(["csc600", "is", "fun"]) =
        [ [ [ 'csc600' ], [ 'is' ] ], [ [ 'fun' ], [] ] ]

Example 5:

    splitArrayTwice([3, 2, 1, 4]) =
        [ [ [ 3 ], [ 2 ] ], [ [ 1 ], [ 4 ] ] ]

** ----------------------------------------------------- */

export function splitArrayTwice<T>(arr: T[]): [[T[], T[]], [T[], T[]]] {
    let halfArray1 = splitArrayOnce(arr)[0];
    let halfArray2 = splitArrayOnce(arr)[1];

    return [splitArrayOnce(halfArray1), splitArrayOnce(halfArray2)];
}

//Q1b Testing Code
// console.log("Q1b. [" + splitArrayTwice([])[0][0] + "]["
//                      + splitArrayTwice([])[0][1] + "]["
//                      + splitArrayTwice([])[1][0] + "]["
//                      + splitArrayTwice([])[1][1] + "]");

// console.log("Q1b. [" + splitArrayTwice([1])[0][0] + "]["
//                      + splitArrayTwice([1])[0][1] + "]["
//                      + splitArrayTwice([1])[1][0] + "]["
//                      + splitArrayTwice([1])[1][1] + "]");

// console.log("Q1b. [" + splitArrayTwice(["hello", "world"])[0][0] + "]["
//                      + splitArrayTwice(["hello", "world"])[0][1] + "]["
//                      + splitArrayTwice(["hello", "world"])[1][0] + "]["
//                      + splitArrayTwice(["hello", "world"])[1][1] + "]");

// console.log("Q1b. [" + splitArrayTwice(["csc600", "is", "fun"])[0][0] + "]["
//                      + splitArrayTwice(["csc600", "is", "fun"])[0][1] + "]["
//                      + splitArrayTwice(["csc600", "is", "fun"])[1][0] + "]["
//                      + splitArrayTwice(["csc600", "is", "fun"])[1][1] + "]");

// console.log("Q1b. [" + splitArrayTwice([3, 2, 1, 4])[0][0] + "]["
//                      + splitArrayTwice([3, 2, 1, 4])[0][1] + "]["
//                      + splitArrayTwice([3, 2, 1, 4])[1][0] + "]["
//                      + splitArrayTwice([3, 2, 1, 4])[1][1] + "]");
                     
/* ==========================================================================  **
## Problem 2: Recursive functions with arrays (25 pts)

What if you had to write splitArrayThree? That would be quite the mess.
In this problem, we'll use an algebraic data types (ADTs) called
`NestedArray<T>` to encode an arbitrary sequence of nested arrays that
hold elements of type `T`.

** ============================================================================ */

export type NestedArray<T> =
    {
        tag: "LEAF"
    }
|   {
        tag: "NODE",
        contents: T,
        left: NestedArray<T>,
        right: NestedArray<T>
    };

export function mkNALeaf<T>(): NestedArray<T> {
    return {
        tag: "LEAF"
    };
}

export function mkNANode<T>(contents: T, left: NestedArray<T>, right: NestedArray<T>): NestedArray<T> {
    return {
        tag: "NODE",
        contents: contents, 
        left: left,
        right: right
    };
}

export const tr1 =
    mkNALeaf();

export const tr2 = 
    mkNANode(
        1,
        mkNALeaf(),
        mkNALeaf()
    );

export const tr3 =
    mkNANode(
        "hello",
        mkNALeaf(),
        mkNANode(
            "world",
            mkNALeaf(),
            mkNALeaf()
        )
    );

export const tr4 =
    mkNANode(
        'is',
        mkNANode(
            'csc600',
            mkNALeaf(),
            mkNALeaf()
        ),
        mkNANode(
            'fun',
            mkNALeaf(),
            mkNALeaf()
        )
    )

export const tr5 =
    mkNANode(
        2,
        mkNANode(
            3,
            mkNALeaf(),
            mkNALeaf()
        ),
        mkNANode(
            1,
            mkNALeaf(),
            mkNANode(
                4,
                mkNALeaf(),
                mkNALeaf()
            )
        )
    );


/* ----------------------------------------------------- **
Write a function that builds a data structure of type NestedArray<T>
out of an array of T. It does so by 
1. creating a leaf node if `arr` is empty
2. splitting `arr` into `arr1` and `arr2`  following the same specification
   as `splitArrayOnce` and
   - using the last element of `arr1` as the value of the current node
   - recursively using `arr1` without the last element as the left child and
   - recursively using `arr2 as the right child.


Example 1:

    splitArray([]) = tr1

           *

Example 2:

    splitArray([1]) = tr2

          1
         / \ 
        *   *

Example 3:

    splitArray(["hello", "world"]) = tr3

       "hello"
       /    \
      *    "world"
            /  \
           *    *

Example 4:

    splitArray(["csc600", "is", "fun"]) = tr4
        
          "is"
         /    \
   "csc600"   "fun"
      / \      / \
     *   *    *   *

Example 5:

    splitArray([3, 2, 1, 4]) = tr5
        
            2
          /   \   
         3     1
        / \   / \ 
       *   * *   4
                / \
               *   *

** ----------------------------------------------------- */

export function splitArray<T>(arr: T[]): NestedArray<T> {
    if(arr.length === 0){
        let nestedArr: NestedArray<T> = {
            tag: "LEAF"
        }
        return nestedArr;
    }
    else if(arr.length === 1){
        let tr =
            mkNANode(
                arr[0],
                mkNALeaf(),
                mkNALeaf()
            );
        return tr;
    }
    else{
        let copyArr: T[] = [];
        for(const x of arr){
            copyArr.push(x);
        }

        let halfArray1 = splitArrayOnce(copyArr)[0];
        let halfArray2 = splitArrayOnce(copyArr)[1];

        let tr =
        mkNANode(
            halfArray1[halfArray1.length - 1],
            splitArray(halfArray1.slice(0,-1)),
            splitArray(halfArray2)
        );
        return tr;
    }
}

//Q2 Testing Code
// console.log("Q2.");
// console.log(splitArray([]));
// console.log("-----------------------");
// console.log(splitArray([1]));
// console.log("-----------------------");
// console.log(splitArray(["hello", "world"]));
// console.log("-----------------------");
// console.log(splitArray(["csc600", "is", "fun"]));
// console.log("-----------------------");
// console.log(splitArray([3, 2, 1, 4]));

/* ==========================================================================  **
## Problem 3: Recursive functions with trees (55 pts)

An NaryTree is a Tree that has any number of children.

Example 1 (ntr1):

     *   (no children)

Example 2 (ntr2):

     1   (1 child)
     |
     * 

Example 3 (ntr3):

     1   (1 child)
     |
     2   (1 child)
     |
     *

Example 4 (ntr4):

      1     (2 children)
     / \
    2   3   (1 child)
    |   |
    *   *

Example 5 (ntr5):

         1       (1 child)
         |
         2       (3 children)
       / | \  
      3  4  5    (1 child)
      |  |  |
      *  *  6    (1 child)
            |
            *

** ============================================================================ */

export type NaryTree<T> = 
    {
        tag: "LEAF",                     // no children
    }
|   {
        tag: "NODE",
        contents: T,
        firstChild: NaryTree<T>,         // contains the first child
        restChildren: NaryTree<T>[]      // contains children 2 through ...
    }

export function mkNaryLeaf<T>(): NaryTree<T>{
    return {
        tag: "LEAF"
    };
}

export function mkNaryNode<T>(contents: T, children: NaryTree<T>[]): NaryTree<T>{
    if (children.length === 0) {
        return {
            tag: "NODE",
            contents: contents,
            firstChild: mkNaryLeaf(),
            restChildren: []
        }
    } else {
        return {
            tag: "NODE",
            contents: contents,
            firstChild: children[0],
            restChildren: children.slice(1)
        };
    }
}

const ntr1 : NaryTree<number> =
    mkNaryLeaf();

const ntr2 =
    mkNaryNode(
        1,
        []
    );

const ntr3 =
    mkNaryNode(
        1,
        [
            mkNaryNode(2, [])
        ]
    );

const ntr4 =
    mkNaryNode(
        1,
        [
            mkNaryNode(2, []),
            mkNaryNode(3, [])
        ]
    );

const ntr5 =
    mkNaryNode(
        1,
        [
            mkNaryNode(
                2,
                [
                    mkNaryNode(3, []),
                    mkNaryNode(4, []),
                    mkNaryNode(
                        5, 
                        [
                            mkNaryNode(6, []),
                        ]),
                ]
            )
        ]
    );


/* ----------------------------------------------------- **
### Problem 3a (15 pts):

Example 1:

    heightNaryTree(ntr1) = 0

Example 2:

    heightNaryTree(ntr2) = 1

Example 3:

    heightNaryTree(ntr3) = 2

Example 4:

    heightNaryTree(ntr4) = 2

Example 5:

    heightNaryTree(ntr5) = 4

** ----------------------------------------------------- */

export function heightNaryTree<T>(naTr: NaryTree<T>): number {
    switch(naTr.tag){
        case "LEAF": {
            return 0;
        }
        case "NODE": {
            let otherHeight = 0;
            for(let i = 0; i < naTr.restChildren.length; i++){
                let childHeight = heightNaryTree(naTr.restChildren[i]);

                if(childHeight > otherHeight){
                    otherHeight = childHeight;
                }
            }
            return 1 + Math.max(heightNaryTree(naTr.firstChild), otherHeight);
        }
    }
}

//Q3a Testing Code
// console.log("Q3a. " + heightNaryTree(ntr1));
// console.log("Q3a. " + heightNaryTree(ntr2));
// console.log("Q3a. " + heightNaryTree(ntr3));
// console.log("Q3a. " + heightNaryTree(ntr4));
// console.log("Q3a. " + heightNaryTree(ntr5));

/* ----------------------------------------------------- **
### Problem 3b (20 pts):

Example 1:

    mapNaryTree(ntr1, (x) => x + 1) =

     *

Example 2:

    mapNaryTree(ntr2, (x) => x + 1) =
     
     2
     |
     *

Example 3:

    mapNaryTree(ntr3, (x) => 2*x) =

     2
     |
     4
     |
     *

Example 4:

    mapNaryTree(ntr4, (x) => 1) =

      1 
     / \
    1   1
    |   |
    *   *

Example 5:

    mapNaryTree(ntr5, (x) => x + 2) =

         3
         |
         4 
       / | \  
      5  6  7
      |  |  |
      *  *  8
            |
            * 
** ----------------------------------------------------- */

export function mapNaryTree<T, U>(naTr: NaryTree<T>, f: (arg: T) => U): NaryTree<U> {
    switch(naTr.tag){
        case "LEAF": {
            let leaf: NaryTree<U> = mkNaryLeaf();
            return leaf;
        }
        case "NODE": {
            let copyArr: NaryTree<U>[] = [];
            copyArr.push(mapNaryTree(naTr.firstChild, f));
            for(let i = 0; i < naTr.restChildren.length; i++){
                copyArr.push(mapNaryTree(naTr.restChildren[i], f));
            }
            return mkNaryNode(f(naTr.contents), copyArr);
        }
    }
}

//Q3b Testing Code
// console.log("Q3b.");
// console.log(mapNaryTree(ntr1, (x) => x + 1));
// console.log("-----------------------");
// console.log(mapNaryTree(ntr2, (x) => x + 1));
// console.log("-----------------------");
// console.log(mapNaryTree(ntr3, (x) => 2*x));
// console.log("-----------------------");
// console.log(mapNaryTree(ntr4, (x) => 1));
// console.log("-----------------------");
// console.log(mapNaryTree(ntr5, (x) => x + 2));

/* ----------------------------------------------------- **
### Problem 3c (20 pts):

Recursively convert a data-structure of type `NestedArray<T>` into a 
data-structure of type `NaryTree<T>` following these rules:
1. a NestedArray leaf is converted into a NaryTree leaf
2. a NestedArray node is converted into a NaryTree node where
   - the `left` child becomes the `firstChild`
   - the `right` child becomes the first and only element of `restChildren`.

                  1
                 / \ 
firstChild  --> *   *  <-- restChildren is 1 element array with *


Example 1:

    nestedArrayToNaryTree(tr1) =

           *

Example 2:

    nestedArrayToNaryTree(tr2) =

          1
         / \ 
        *   *

Example 3:

    nestedArrayToNaryTree(tr3) =

       "hello"
       /    \
      *    "world"
            /  \
           *    *

Example 4:

    nestedArrayToNaryTree(tr4) =
        
          "is"
         /    \
   "csc600"   "fun"
      / \      / \
     *   *    *   *

Example 5:

    nestedArrayToNaryTree(tr5) =
        
            2
          /   \   
         3     1
        / \   / \ 
       *   * *   4
                / \
               *   *

** ----------------------------------------------------- */

export function nestedArrayToNaryTree<T>(na: NestedArray<T>): NaryTree<T> {
    switch(na.tag){
        case "LEAF": {
            let leaf: NaryTree<T> = mkNaryLeaf();
            return leaf;
        }
        case "NODE": {
            let copyArray: NestedArray<T>[] = [na.left, na.right];
            let naryArray: NaryTree<T>[] = [];
            for(let i = 0; i < copyArray.length; i++){
                naryArray.push(nestedArrayToNaryTree(copyArray[i]));
            }
            return mkNaryNode(na.contents, naryArray);
        }
    }
}

//Q3c Testing Code
// console.log("Q3c. ");
// console.log(nestedArrayToNaryTree(tr1));
// console.log("-----------------------");
// console.log(nestedArrayToNaryTree(tr2));
// console.log("-----------------------");
// console.log(nestedArrayToNaryTree(tr3));
// console.log("-----------------------");
// console.log(nestedArrayToNaryTree(tr4));
// console.log("-----------------------");
// console.log(nestedArrayToNaryTree(tr5));
// console.log("-----------------------");