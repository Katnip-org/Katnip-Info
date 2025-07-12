---
title: Main Stage Structure
---

Stage is added into the “targets” list of the project. It is **MANDATORY** to have it within your project for it to load. It has a very similar format to sprites, with some key differences.

```json
{  
  "isStage": true,  
  "name": "Stage",  
  "variables": {},  
  "lists": {},  
  "broadcasts": {},  
  "blocks": {},  
  "comments": {},  
  "currentCostume": 0,  
  "costumes": [],  
  "sounds": [],  
  "volume": 100,  
  "layerOrder": 0,  
  "tempo": 60,  
  "videoTransparency": 50,  
  "videoState": "on",  
  "textToSpeechLanguage": null  
}
```

## isStage

This Boolean is used to tell scratch whether this is the stage sprite or not. For the stage, put true to tell scratch that it is the stage

## name

MUST BE `Stage`

## variables

Used to store the variables for the stage + rest of the project (public ones only go here)

## lists

Used to store the lists for the stage + rest of the project (public ones only go here)

## broadcasts

Put all your broadcasts here to ensure ease of access, using the format outlined in [[02 - Broadcasts]]

## blocks

Here’s where all the block content goes!! Check out the “Blocks” guide on how to structure blocks

## comments

Here’s where all comments for the sprite go. Check out the “Comments” guide on how to structure comments

## costumes

List all costumes for the sprite here. Check out “Costumes” guide on the format they take in

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

The rotation style of the sprite, can be `left-right`, `don't rotate`, or `all around`