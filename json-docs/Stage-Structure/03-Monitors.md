Monitors are Scratch’s way of displaying data. 

```json
{
  "id": "<var-or-list-id>",  
  "mode": "<default/large/slider/list>",  
  "opcode": "<data_variable/data_listcontents>",  
  "params": {  
    "VARIABLE": "<variable-name>"  
  },  
  "spriteName": "<owner-sprite-name>",  
  "value": 0,  
  "x": 0,  
  "y": 0,  
  "width": 0,  
  "height": 0,  
  "visible": true,  
  "sliderMin": 0,  
  "sliderMax": 100,  
  "isDiscrete": true  
}
```  

## id

Unique ID of the variable/list being displayed (monitored)

## mode

Mode for displaying data in the monitor. This can have the following values:

- For variables:
	- `default`
	- `large`
	- `slider`
- For lists:
	- `list`

## opcode

The opcode for monitors correspond to their data type:

- For variables:
	- `data_variable`
- For lists:
	- `data_listcontents`

## params

- `VARIABLE`: it is the display name of the variable/list being displayed

> [!note]
> This actually does NOT need to match the variable name, this in theory could be any string. It will be displayed as, `name: var []` where it takes the place of `var`

- If you are displaying a list, write `LIST`, and `VARIABLE` if it is a variable display

## spriteName

The name of the sprite the monitor belongs to (if applicable)

> [!note]
> This actually does NOT need to match the sprite (if applicable), this in theory could be any string. It will be displayed as, `name: var []` where it takes the place of `name`

## value

The current value of the monitor (being displayed)

## x, y

The x and y coordinates of the monitor being displayed

## width, height

The width and height of the monitor

## visible

Set to true or false to denote it appearing on screen or not

## sliderMin

The minimum bound for slider monitors ONLY

## sliderMax

The maximum bound for slider monitors ONLY

## isDiscrete

Whether or not a slider should allow decimals when sliding, or snap to whole number integers for slider monitors ONLY