---
title: Variable List References (Dynamic Variable Setting)
---

> Credit: Discovered by [Geotale](https://turbowarp.org/1068153464/)

- This exploit relies on 2 things:
  - Hidden define blocks (i.e. shadow: true) allow unnatural and impossible block configurations to exist within a scratch project, without them being rendered and crashing the program loading the SB3
  - `FIELDS` and `INPUTS` fields for a block actually get merged when Scratch is looking for attributes, which allows us to trick Scratch into looking for a `FIELDS` field in `INPUTS`, and letting it evaluate the input for its value
- The `setVariableTo` block usually takes in a field (dropdown, no reporters allowed) for the `VARIABLE`, and an input `VALUE` (reporters allowed) for the value. However, by hiding the block so it doesn't render and crash, we can put the `VARIABLE` field into an input.

## JSON Snippets

```
"T": {
  "opcode": "data_setvariableto",
  "next": null,
  "parent": "aY",
  "inputs": {
    "VALUE": [
      3,
      "b]",
      [
        10,
        "0"
      ]
    ],
    "VARIABLE": [
      2,
      "b^"
    ]
  },
    "fields": {},
  "shadow": false,
  "topLevel": false
},

"b=": {
  "opcode": "data_setvariableto",
  "next": null,
  "parent": "aX",
  "inputs": {},
  "fields": {
    "VARIABLE": [
      "variable references",
      "g![_rqnFWsV5HR{GB=39"
    ],
    "VALUE": [
      [
      {
        "name": "a"
      },
      {
        "name": "b"
      },
      {
        "name": "c"
      }
      ]
    ]
  },
  "shadow": false,
  "topLevel": false
},
```

## Pseudo-code representation

```
define: hidden-setVar(reference, value){
  setVariable(reference, value)
}

define: hidden-setUpVarRefs(){
  setVariable("variable references", [       // "variable references" is a list
    {
      "name": "a"
    },
    {
      "name": "b"
    },
    {
      "name": "c"
    }
  ])
}

// Use case
setUpVarRefs()
setVar(itemGet(1, "variable references"), 103) // set the 1st var ref (a) to 103
say($a)

// --- Output ---
103
```