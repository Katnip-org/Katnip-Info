---
title: Main JSON Structure
---

Base structure of project:

```json
{  
  "targets": [],  
  "monitors": [],  
  "extensions": [  
    "pen"  
  ],  
  "meta": {  
    "semver": "3.0.0",  
    "vm": "<semver-of-vm>",  
    "agent": "",  
    "platform": {  
      "name": "<Platform Name>",  
      "url": "<https://example.org>"  
    }  
  }  
}
```

## Targets

This is where all sprites will lie. It is a list of sprites (and stage).

## Monitors

This is where all monitors, such as variable monitors, list monitors, etc. will live.

## Extensions

A list of the names of extensions used in the project. Needs to be included for blocks from said extensions to load. Here are a list of all vanilla extensions:
- "ev3"
- "boost"
- "wedo2"
- "gdxfor"
- "music"
- "pen"
- "videoSensing"
- "text2speech"
- "translate"
- "makeymakey"
- "microbit"

## Meta

- Semver: Semantic version of the editor. Will always be `3.0` for SB3 files
- Vm: Version of the scratch Vm used with the project. Just use the most current version
- Agent: Data about the browser last used to edit the project. Will appear similar to `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36 Edg/89.0.774.75`
- Platform: Custom added piece for editors like Turbowarp, but adopted by other programs (like Katnip) to signal editing done inside said program. Think of this as a small fingerprint from the program used to generate it.