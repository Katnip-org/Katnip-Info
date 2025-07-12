---
title: Argument-Reporter Chooser
---

> Credit: Discovered by [davidtheplatformtest](https://scratch.mit.edu/projects/1116329575)

- This exploit uses an odd behavior of procedure (function) argument-reporters, and their JSON structure
- By putting a variable within the `VALUE` parameter of an argument-reporter of a procedure, it forces Scratch to evaluate the value of the variable
- This allows you to switch between different arguments, changing the value it is reading (case sensitive, which could be very helpful)

## JSON Snippet

```json
"h": {
  "opcode": "argument_reporter_string_number",
  "next": null,
  "parent": "c",
  "inputs": {
    "VALUE": [
      2,
      [
      12,
      "my variable",
      "`jEk@4|i[#Fk?(8x)AV.-my variable"
      ]
    ]
  },
  "fields": {},
  "shadow": false,
  "topLevel": false
},
```

## Pseudo-code representation

```
define: sayThing(a, A){
  say(self.arguments.get($argument))
}

// Use case
$argument = "a"
sayThing(1, 2)

// --- Output ---
1
```

