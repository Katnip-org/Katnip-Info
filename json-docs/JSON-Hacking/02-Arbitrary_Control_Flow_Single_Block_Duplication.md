---
title: Arbitrary Control Flow (Single Block Duplication)
---

> Credit: Discovered by [davidtheplatformtest](https://scratch.mit.edu/projects/1068071172/)

As mentioned in [[Scratch Docs/03 - Notes#Bidirectional Linkage|Bidirectional Linkage]], the `parent` attribute of child blocks is not entirely needed. Instead, by leaving a child block isolated, you can reference it in multiple places as such:

```json
"f": {
    "opcode": "operator_join",
    "next": null, // this exploit only works with single blocks, not stacks
    "parent": null, // notice the "null" parent
    "inputs": {
    "STRING1": [
      1,
      [
      10,
      "apple "
      ]
    ],
    "STRING2": [
      1,
      [
      10,
      "banana"
      ]
    ]
    },
    "fields": {},
    "shadow": false,
    "topLevel": true, // `true`: preserve block, `false`: hides instance
    "x": 132,
    "y": 156
},
```

- Then, you can reference this orphaned block as a `next` block at any point, allowing it to be used in multiple places.
- This applies to any block (excluding hat blocks) as well, meaning you can splice single block instances to the end of stacks as well