- Blocks in Scratch follow a pattern called [[Scratch Docs/03 - Notes#Bidirectional Linkage|Bidirectional Linkage]], in which parent blocks connect to their child blocks, and their child blocks connect to them
- Blocks support a variety of attributes and modifiers, categorized into two main groups:
  - `INPUTS`
    - These are evaluated by the Scratch VM, and can receive reporter blocks or expressions
  - `FIELDS`
    - These are dropdown menus, with a set of options to choose from. Some are dynamic, such as the `set variable to` block's dropdown, while others only have a few static options like the `set rotation style` block's dropdown
  - For the sake of ScratchBlocks, and rendering the JSON, `INPUT` fields and `FIELDS` fields must be in their respective categories. See the [[02 - Commands|Reference Guide]] on which blocks have which. 
  - Please note that while it is in theory possible to overlap the two categories, putting `FIELDS` fields in `INPUTS` and `INPUTS` fields in `FIELDS`, they would then need `shadow: true` to prevent the project from crashing. See [[04 - Variable List References (Dynamic Variable Setting)|an example project]] that takes advantage of this.

```json
"<blockID>": {
  "opcode": "<opcode>",
  "next": "<blockID>",
  "parent": "<blockID>",
  "inputs": {},
  "fields": {},
  "shadow": false,
  "topLevel": false,
  "x": 0,
  "y": 0
},
```

## blockID

- Unique ID for the block in the sprite, generated using the method outlined in [[03 - Notes#Unique ID Generation]]
## opcode

- The opcode of a block dictates what block it is, determining the type of inputs and fields it is expecting
- Formed in the following format:
  - `<categorie>_<identifier>` in snake case (separated by underscores)
- A whole list of these can be found in the [[02 - Commands]] guide
## next

- The blockID of the next ( or child) block **after** the block
- If there is none, set to `null`

## parent

- The blockID of the previous (or parent) block. This could be either **before** the block, or the block the current one is **inside** of
- If there is none, set to `null`, set `toplevel: true`, and make sure `x` and `y` are set
## inputs

- These are evaluated by the Scratch VM, and can receive reporter blocks or expressions
- They take on the following structure:

```json
"inputs": {
  "<ATTRIBUTE>": [
    <type>,
    <block-ID-if-applicable>,
    [
      <default-type>,
      <default-value>
    ]
  ]
}
```

- ATTRIBUTE
  - The name of the attribute you are defining
- type
  - The type of the input
  - [[Scratch Docs/03 - Notes#Input types|Input Types]]
- block-ID-if-applicable
  - If type is `3` , or a value signifying a block input, put the ID of the block inside the input, else don't put it in
- default-type
  - The type of the default value (or literal value if no block input provided)
- default-value
  - The value of the default value (or literal value if no block input provided)

## fields

- These are always dropdowns in the Scratch GUI, and have certain options to choose from, usually predefined
- Some fields however are adaptable, allowing different options based on changes in the project

```json
"fields": {
  "<ATTRIBUTE>": [
    <value>,
    <ID-if-applicable>
  ]
},
```

- ATTRIBUTE
  - Always capitalized, it is the name of the attribute being defined
- value
  - The text content of the dropdown
- ID-if-applicable
  - In cases of broadcasts, variable, and lists, provide the ID of it, else just put `null`

## shadow

- Used mainly for menu blocks and other embedded blocks, locking them into place
- When set to true on toplevel or orphaned reporter blocks, it renders them invisible, allowing otherwise unstable blocks to exist in Scratch
## toplevel

- Used to tell if a block is the start of a stack or not
- If set to true, despite being part of a stack and not the toplevel block, it will cause duplication in the block
## x

- X-position of the top left corner of the block
- ONLY put if the block has `toplevel: true`
## y

- Y-position of the top left corner of the block
- ONLY put if the block has `toplevel: true`