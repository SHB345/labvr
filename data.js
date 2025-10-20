var APP_DATA = {
  "scenes": [
    {
      "id": "0-corner",
      "name": "Corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7440790021425663,
          "pitch": -0.09087623354347407,
          "rotation": 0,
          "target": "2-center"
        },
        {
          "yaw": 1.8495377032451161,
          "pitch": -0.012994535793698248,
          "rotation": 0,
          "target": "3-cnc-machine"
        },
        {
          "yaw": 3.056435040599572,
          "pitch": 0.13105932189947822,
          "rotation": 0,
          "target": "4-hot-wire-machine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-door",
      "name": "Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.12936362971380078,
        "pitch": 0.021663839655992945,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.09868823314663189,
          "pitch": -0.01217898591886879,
          "rotation": 0,
          "target": "2-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-center",
      "name": "Center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.107343954741852,
          "pitch": -0.014745362740328005,
          "rotation": 0,
          "target": "0-corner"
        },
        {
          "yaw": 1.1803986009687417,
          "pitch": -0.22698862434022082,
          "rotation": 0,
          "target": "1-door"
        },
        {
          "yaw": -2.1927469564648163,
          "pitch": 0.08759036304065226,
          "rotation": 0,
          "target": "3-cnc-machine"
        },
        {
          "yaw": -1.4925953644835772,
          "pitch": -0.009901049265359063,
          "rotation": 0,
          "target": "4-hot-wire-machine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cnc-machine",
      "name": "CNC Machine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.120937852728611,
          "pitch": 0.11536242771391159,
          "rotation": 0,
          "target": "4-hot-wire-machine"
        },
        {
          "yaw": -0.2538532374655613,
          "pitch": 0.263649210908115,
          "rotation": 0,
          "target": "2-center"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4339099841623542,
          "pitch": -0.1477421785889561,
          "title": "CNC Laser Cutting Machine",
          "text": "<div>Description: CNC laser cutter relies on computer numerical control and computer instructions (G-code) to perform its sequence of cutting operations.</div><div><br></div><div>Specifications:&nbsp;</div><div><br></div><div>X travel. 3000 mm minimum</div><div>&nbsp;Y travel. 1500 mm minimum</div><div>Z travel. 100 mm or better</div><div>Input power&nbsp; &lt; 4KW</div><div>Working Temperature :15-35º C</div><div>Sheet size (to be cut). (2500 x 1500) mm (minimum)</div>"
        }
      ]
    },
    {
      "id": "4-hot-wire-machine",
      "name": "Hot Wire Machine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.438529422417769,
          "pitch": 0.020530612225677203,
          "rotation": 0,
          "target": "0-corner"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.091934219759807,
          "pitch": -0.0059694717544331866,
          "title": "Hot Wire Cutting Machine",
          "text": "<div>Description: A hot wire cutter is used to cut polystyrene foam. The device consists of a thin, taut metal wire, often made of nichrome alloy, which is heated via electrical resistance to approximately 200°C</div><div><br></div><div>Specifications:&nbsp;</div><div>Machine Voltage:110 -240 V</div><div>Temperature :200°C</div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
