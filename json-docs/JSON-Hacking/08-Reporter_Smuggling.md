---
title: Reporter Smuggling
---

> Credit: Used by [nembence](https://scratch.mit.edu/projects/1126110275/), documented and furthered by [[01 - README#Author B1j2754/Layz|B1j2754/Layz]]

- This exploit runs off of a partial implementation of the `argumentdefaults` field in `procedures_prototype` block
- In the Scratch VM interpreter, it checks if an argument exists, if it doesn't, it uses the default value
- This doesn't make a whole lot of sense, considering they should instead be checking if its nullish, then using the default, as if an argument doesn't exist but is used, its clearly wrong/malformed

[Scratch VM link](https://github.com/scratchfoundation/scratch-vm/blob/bb9ac402523604451b32c3da9089b14adf6d3f60/src/blocks/scratch3_procedures.js#L46)
```js
const [paramNames, paramIds, paramDefaults] = paramNamesIdsAndDefaults;

// Initialize params for the current stackFrame to {}, even if the procedure does
// not take any arguments. This is so that `getParam` down the line does not look
// at earlier stack frames for the values of a given parameter (#1729)
util.initParams();
for (let i = 0; i < paramIds.length; i++) {
  if (Object.prototype.hasOwnProperty.call(args, paramIds[i])) {
    util.pushParam(paramNames[i], args[paramIds[i]]);
  } else {
    util.pushParam(paramNames[i], paramDefaults[i]);
  }
}
```

- This means we can smuggle in reporters that aren't part of the proccode, and use their values which will ALWAYS be the default value, essentially creating custom constants to use inside the procedure

```json
"f": {
  "opcode": "procedures_prototype",
  "next": null,
  "parent": "b",
  "inputs": {},
  "fields": {},
  "shadow": true,
  "topLevel": false,
  "mutation": {
    "tagName": "mutation",
    "children": [],
    "proccode": "greet",
    "argumentids": "{\"length\":2}",
    "argumentnames": "\"Gg\"",
    "argumentdefaults": "[\"george\",\"hola\"]",
    "warp": "false"
  }
},
```

- Note that the `argumentids` and `argumentnames` use other JSON hacking methods, and that the following is also a perfectly valid setup for argument smuggling

```json
"f": {
  "opcode": "procedures_prototype",
  "next": null,
  "parent": "b",
  "inputs": {},
  "fields": {},
  "shadow": true,
  "topLevel": false,
  "mutation": {
    "tagName": "mutation",
    "children": [],
    "proccode": "greet",
    "argumentids": "[\"k3li\",\"1aowei\"]",
    "argumentnames": "[\"name\",\"greeting\"]",
    "argumentdefaults": "[\"george\",\"hola\"]",
    "warp": "false"
  }
},
```

- One example use case of this is to smuggle in constants like `pi`,`e`, or `phi`, and use those in mathematical based functions. It allows both precision and less vars to be used, appearing cleaner in-editor