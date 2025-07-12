---
title: Notes
---

## Unique ID Generation: 

- The following characters are all valid for generating the strings for IDs
```
!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
```
- IDs are used throughout the entire project, from variables, to blocks, to broadcasts
- IDs DO NOT need to be a certain length, or be anything legible. Instead, they 2 rules are as follows:
	- The characters used in it must only consist of those listed above
	- ALL IDs must be unique

## Values that are subject to change

- In this document, values displayed as `<placeholder>`, or any values surrounded with `<`&`>` are meant to be changed, and will describe in the documentation below what should go there. Those values are not meant to be used.

## Sprite vs Stage Storage

- A lot of data (e.g. variables, lists, etc.) can be stored in either the `Stage` or other sprites.
- Usually, this indicates private vs. public ownership of it. For instance, variables stored in a sprite can only be accessed by the sprite, while variables in the `Stage` are globally accessible
- HOWEVER: Broadcasts, although they can be stored in the sprite, do not change their logic when put in the sprite. They are global regardless of their location. In the editor, having them stored in the sprite JSON does make it invisible on dropdowns in other sprites, but dropping blocks in and running them still achieves the same result.

## Bidirectional Linkage

- Blocks and comments in Scratch form a linked chain, where each element contains a bidirectional reference to the element(s) they're structurally tethered to.
- This allows the editor to render connections + hierarchies, and be sure of a connection
- Block Chains:
	- This linkage takes the form of 2 fields in blocks:
		- `next`: The ID of the next block in the stack (its child)
		- `parent`: The ID of the block above it in the stack (its parent)
	- These pointers must be consistent
		- If block `a`'s `next` is block `b`, then block `b`'s `parent` must be block `a`
- Comment Connections:
	- A block can have a single comment
	- This is represented by:
		- `comment`: The blocks field containing the comment's ID
		- `blockId`: The comments field pointing back to the owning block

> [!info]
> This is how blocks are *supposed* to work, but in reality, the `parent` attribute is not *entirely* necessary, making JSON exploits like [ACF Duplication](/json-docs/JSON-Hacking/Arbitrary_Control_Flow_Single_Block_Duplication) entirely possible

## Input types
 
| Number | Meaning          | Structure            | Description                                                                                 |
| ------ | ---------------- | -------------------- | ------------------------------------------------------------------------------------------- |
| 1      | Shadowed/Literal | `[1, []]`            | The internal `[]` is the actual input (str, num, menu, color)                               |
| 2      | Boolean/Substack | `[2, <blockID>]`     | Encapsulates boolean reporter expressions, or substacks, with the first block in referenced |
| 3      | Reporter         | `[3, <blockID>]`     | Encapsulates any reporter block, including variable and list blocks                         |
| 4      | Number           | `[4, <value>]`       | Valid chars: `0-9`,`-`,`.`,`e`                                                              |
| 5      | Positive Number  | `[5, <value>]`       | Valid chars: `0-9`,`.`,`e`                                                                  |
| 6      | Positive Integer | `[6, <value>]`       | Valid chars: `0-9`,`e`                                                                      |
| 7      | Integer          | `[7, <value>]`       | Valid chars: `0-9`,`-`,`e`                                                                  |
| 8      | Angle            | `[8, <value>]`       | Valid chars: `0-9`,`-`,`.`,`e`                                                              |
| 9      | Color            | `[9, #<hex>]`        | Valid chars: `0-9`,`a-f`                                                                    |
| 10     | String           | `[10, <value>]`      | Valid chars: all                                                                            |
| 11     | Broadcast        | `[11, <name>, <ID>]` |                                                                                             |
| 12     | Variable         | `[12, <name>, <ID>]` | `<x>` and `<y>` as well if toplevel                                                         |
| 13     | List             | `[13, <name>, <ID>]` | `<x>` and `<y>` as well if toplevel                                                         |
