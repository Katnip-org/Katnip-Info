---
title: Block Dimentions
---

## Heights

> Note: Obtained from: https://scratch.mit.edu/discuss/topic/793888/

- Hat blocks
	- 48 pixels
	- Not sure about the top bump
- Stack blocks
	- 48 pixels
- Extension-Stack blocks
	- 56 pixels
- Reporters
	- Effect on regular Stack blocks
		- 1st reporter adds 0 height
		- Every subsequent depth adds 8 pixels
	- Effect on Extension-Stack blocks
		- 1st + 2nd reporter depths add 0 height
		- Every subsequent adds 8 pixels
- Cap blocks
	- 48 pixels
- C-block top
	- 48 pixels
- C-block bottom
	- 32 pixels
- If-else middle
	- 32 pixels

Comments should be positioned 15 pixels above a block's middle to align correctly (`y-15`)
C block tops need their comments positioned 5 pixels above to align correctly (`y-5`)

# Widths

> Note: Default Scratch font for testing: https://www.freefontdownload.org/en/helvetica-neue-medium.font

- Comments offset
	- 32px off of the block's width
- Text width determined by the font above, with size set to 16px (12pt), measured using PIL to draw the font with text, determining the width of the text components of blocks (get bbox)
- Block sides padding
	- (2x) ~5px
- Round (expression) input default size
	- ~50px
- Padding around round (expression) input
	- ~5px per side touching text
- Square (dropdown) field default size
	- ~60px
- Padding around square (dropdown) field
	- ~5px

# Measurement calculations for width

```
change size by()
110 text
170 block

next costume
99 text
110 block

next backdrop
108 text
116 block

move()steps
40.0 text move
40.0 text steps
155.629631042 block

when[a]key pressed
39.0 text when
90.0 text key pressed
9.0 text a
216.555552377 block


when[space]key pressed
39.0 text when
90.0 text key pressed
45.0 text space
253.462961197 block

~~~~

end margins: ~5px per side
2 space input: ~60px
1 space input: ~55px
input margins: ~5px per side
input width: ~50px
field margins: ~5px
field width: ~60px
```