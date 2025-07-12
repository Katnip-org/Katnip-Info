---
title: Arbitrary Jump Stack Splicing
---

> Credit: Discovered by [davidtheplatformtest](https://scratch.mit.edu/projects/1068092067/)

Continuing the methods of ignoring [[Scratch Docs/03 - Notes#Bidirectional Linkage|Bidirectional Linkage]], this JSON exploit splices a stack, taking an arbitrary block from another stack, and either setting it as another block's `next` value, or part of a substack
- I.e. this tells scratch the next block is from another point in another stack, making Scratch duplicate blocks from there on in the referenced stack
- Currently, it is impossible to edit the blocks that come after spliced stack blocks, so it is best to wrap them in a block like an `if(){}` or `allAtOnce(){}` block, setting the substack up as such:

```json
"c": {
    "opcode": "control_if_else",
    "next": "a",
    "parent": null,
    "inputs": {
    "CONDITION": [
      2,
      "d"
    ],
    "SUBSTACK": [
      2,
      "a"
    ],
    "SUBSTACK2": [
      2,
      "b"
    ]
    },
    "fields": {},
    "shadow": false,
    "topLevel": true,
    "x": 732,
    "y": 156
},
```

- In this case, `"a"` and `"b"` are blocks of another stack. However, we can just splice that stack starting at a block, and insert it where we want
