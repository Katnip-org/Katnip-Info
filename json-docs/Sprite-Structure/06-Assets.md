Assets, such as costumes and sounds, are added to either a sprite or stage, under the “costumes” and “sounds” attributes respectively
# Costumes

```json
{  
  "name": "<asset-name>",  
  "bitmapResolution": 1,  
  "dataFormat": "<file-ext>",  
  "assetId": "<md5-of-contents>",  
  "md5ext": "<md5-of-contents>.<file-ext>",  
  "rotationCenterX": 0,  
  "rotationCenterY": 0  
}
```

# Sounds

```json
{  
  "name": "<asset-name>",  
  "dataFormat": "<file-ext>",  
  "assetId": "<md5-of-contents>",  
  "md5ext": "<md5-of-contents>.<file-ext>",  
  "rate": 0,  
  "sampleCount": 0  
}
```

## asset-name

The name of the asset, i.e. the name to appear in the Scratch editor

## file-ext

The file extension of the asset, with only the following types supported:
- Costumes
  - PNG
  - JPG/JPEG
  - SVG
  - BMP
- Sounds
  - WAV
  - MP3
  - OGG
  - (Stereo audio is supported)

## md5-of-contents

The md5 hash of the file