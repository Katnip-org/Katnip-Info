---
title: Main Sprite Structure
---

Sprite(s) are added into the “targets” list of the project.

```json
{  
  "isStage": false,  
  "name": "<name>",  
  "variables": {},  
  "lists": {},  
  "broadcasts": {},  
  "blocks": {},  
  "comments": {},  
  "costumes": [],  
  "sounds": [],  
  "volume": 100,  
  "layerOrder": 1,  
  "visible": true,  
  "x": 0,  
  "y": 0,  
  "size": 100,  
  "direction": 90,  
  "draggable": false,  
  "rotationStyle": "<style>"  
}
```

## isStage

This boolean is used to tell scratch whether this is the stage sprite or not. For sprites, put false to tell scratch that it is a sprite

## name

Name of the sprite lol

## variables

Used to store the variables for the sprite (private ones only go here)

## lists

Used to store the lists for the sprite (private ones only go here)

## broadcasts

Broadcasts put inside a sprite will effectively make them “private” when trying to access them in scratch, but will still function as “global” broadcasts. Best to put these in the stage.

## blocks

Here’s where all the block content goes!! Check out the [“Blocks” guide](https://docs.google.com/document/d/1-FcdOKhsarQIbpvLzIv5Rjw9YUUDJbRqrquBu2b5-j4/edit?tab=t.y5cmt9mf1mq6) on how to structure blocks

## comments

Here’s where all comments for the sprite go. Check out the [“Comments” guide](https://docs.google.com/document/d/1-FcdOKhsarQIbpvLzIv5Rjw9YUUDJbRqrquBu2b5-j4/edit?tab=t.py2ih6cya1xa) on how to structure comments

## costumes

List all costumes for the sprite here. Check out [“Assets” guide](https://docs.google.com/document/d/1-FcdOKhsarQIbpvLzIv5Rjw9YUUDJbRqrquBu2b5-j4/edit?tab=t.nlvteyx04wbk) on the format they take in

## sounds

List all the sounds for the sprite. Check out “Sounds” guide on the format they are in

## volume

Internal volume for the sprite. 0-100

## layerOrder

The order in which it shows up. Back -> 0, Front is the largest value among layerOrders

## visible

Whether the sprite is hidden or not

## x, y

The x and y coordinates of the sprite

## size

The size percentage of the sprite (defaults to 100, for 100% scale)

## direction

A number 0 -> 180 -> -180, representing the angle (in degrees) that the sprite is facing

## draggable

Internal value, allowing or disallowing the user to drag the sprite during the game. Defaults to false

## rotationStyle

The rotation style of the sprite, can be “left-right”, “don't rotate”, or “all around”