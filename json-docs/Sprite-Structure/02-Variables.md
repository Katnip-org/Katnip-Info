SPRITE Variables, (also known as “private” variables) are variables specific to a sprite. They are displayed as “spriteName: varName”. They are stored in a json object under “variables” in either a sprite or the stage. If stored in the stage, the variables become global, and if they are in a sprite, they become private.

```json
"variables": {  
  "<variableID>": [  
    "<variableName>",  
    "<startingValue>"  
  ],  
  "<variable2ID>": [  
    "<variable2Name>",  
    "<startingValue>"  
  ]  
}
```

## variableID

Each key in the JSON object is a unique ID for the variable (see [[Scratch Docs/03 - Notes#Unique ID Generation|Unique ID Generation]] for how to generate these)

## variableName

A string for the name of the variable

## startingValue

The starting value for the variable. This can be any of the following types:

- Boolean
- Integer
- Float
- String