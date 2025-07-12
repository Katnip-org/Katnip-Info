SPRITE Lists, (also known as “private” lists) are variables specific to a sprite. They are displayed as “spriteName: listName”. They are stored in a json object under “lists” in either a sprite or the stage. If stored in the stage, the variables become global, and if they are in a sprite, they become private.

```json
"lists": {  
  "<listID>": [  
    "<listName>",  
    [  
      "<item1>",  
      "<item2>"  
    ]  
  ],  
  "<listID2>": [  
    "<listName>",  
    [  
      "<item1>",  
      "<item2>"  
    ]  
  ]  
}
```
  
## variableID

Each key in the JSON object is a unique ID for the lists (see [[Scratch Docs/03 - Notes#Unique ID Generation|Unique ID Generation]] for how to generate these)

## listName

A string for the name of the variable

## startingValue

The starting value for the variable. This can be any of the following types:

- Boolean
- Integer
- Float
- String