Broadcasts are used to send "message" events globally, that trigger hat blocks.
The best place to store them is in the Stage. More info in [[Scratch Docs/03 - Notes#Sprite vs Stage Storage|Sprite vs Stage]]

```json
"broadcasts": {
	"<id>": "<name>",
	"<id2>": "<name2>"
}
```

## id

Each key in the JSON object is a unique ID for the broadcast (see [[Scratch Docs/03 - Notes#Unique ID Generation|Unique ID Generation]] for how to generate these)

## name

This is the display name for the broadcast