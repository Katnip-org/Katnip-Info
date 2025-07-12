---
title: Blocks ➜ Procedures
---

- Procedure definitions have a slightly different way of working to blocks, using the `mutation` attribute

# Main procedure definition block

```json
"<blockID-def>": {
  "opcode": "procedures_definition",
  "next": null,
  "parent": null,
  "inputs": {
    "custom_block": [
      1,
      "<blockID-prot>"
    ]
  },
  "fields": {},
  "shadow": false,
  "topLevel": true,
  "x": 0,
  "y": 0
},
```

# Procedure prototype block

```json
"<blockID-prot>": {
  "opcode": "procedures_prototype",
  "next": null,
  "parent": "b",
  "inputs": {
    "<argumentID-str>": [
      1,
      "<blockID-arg>"
    ],
    "<argumentID-bool>": [
      1,
      "<blockID-arg2>"
    ]
  },
  "fields": {},
  "shadow": true,
  "topLevel": false,
  "mutation": {
    "tagName": "mutation",
    "children": [],
    "proccode": "<proccode>",
    "argumentids": "[\"<argumentID>\",\"<argumentID2>\"]",
    "argumentnames": "[\"<argumentName>\",\"<argumentName2>\"]",
    "argumentdefaults": "[\"<argumentDefault>\",\"<argumentDefault2>\"]",
    "warp": "<warp>"
  }
},
```

# Procedure arguments

```json
"<blockID-arg>": {
  "opcode": "argument_reporter_boolean",
  "next": null,
  "parent": "<blockID-prot>",
  "inputs": {},
  "fields": {
    "VALUE": [
      "<argName>",
      null
    ]
  },
  "shadow": true,
  "topLevel": false
},
```
# Procedure call (usage)

```json
"<blockID-call>": {
  "opcode": "procedures_call",
  "next": null,
  "parent": null,
  "inputs": {
    "T0.+O7]:w8z_)ZPvA11P": [
      1,
      [
        10,
        "<argumentValue>"
      ]
    ],
    "T0.+O7]:w8z_)ZPvA11P": [
      1,
      [
        10,
        "<argumentValue>"
      ]
    ]
  },
  "fields": {},
  "shadow": false,
  "topLevel": true,
  "x": 36,
  "y": 180,
  "mutation": {
    "tagName": "mutation",
    "children": [],
    "proccode": "<proccode>",
    "argumentids": "[\"<argumentID>\",\"<argumentID2>\"]",
    "warp": "<warp>"
  }
}
```

# Values

## blockID-def, blockID-prot, blockID-def, blockID-call

The block IDs for the corresponding blocks, according to [[03 - Notes#Unique ID Generation|Unique ID Generation]]

## proccode

The proccode is the way Scratch identifies all procedures. In order for corresponding procedure prototypes and calls to align, they must be the same. It is constructed by creating a formatting-like string, with text where text is, and the following placeholders:
- ` %n `: Number
- ` %s `: String (or number/anything else)
- ` %b `: Boolean blocks
Ex. `Say %s for %n secs, if %b` --> `Say (thing) for (num) secs, if <condition>`

## argumentID

The argument IDs for the corresponding arguments, according to [[03 - Notes#Unique ID Generation|Unique ID Generation]]

## argumentName

The display name for the argument. For argument reporters, this determines what value it is getting, instead of ID, it looks for name.

## argumentValue

The value passed in for the argument when doing procedure calls.

## argumentDefault

The argument default is set by default as such for normal Scratch:
- ` %n `: `1` (Best guess, though could be wrong considering %n is not supported in-editor)
- ` %s `: `""`
- ` %b `: `"false"`

## warp

Set to either `true` or `false`, this determines whether the flag "run without screen refresh" is ticked or not. If true, scratch will attempt to run the whole script in a single frame, with a timeout of 500ms to avoid browser hangs.