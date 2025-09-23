var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama-1",
      "name": "panorama (1)",
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
        "yaw": 0.19936527023474326,
        "pitch": 0.1310577287470629,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.039924926698814645,
          "pitch": 0.01889109509560427,
          "rotation": 6.283185307179586,
          "target": "2-panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama-2",
      "name": "panorama (2)",
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
          "yaw": 0.846971535094319,
          "pitch": 0.03825386971670852,
          "rotation": 0,
          "target": "2-panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama",
      "name": "panorama",
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
          "yaw": 1.1720780583373216,
          "pitch": -0.1684630106964189,
          "rotation": 0,
          "target": "0-panorama-1"
        },
        {
          "yaw": -0.9666621117380281,
          "pitch": -0.04758237508836771,
          "rotation": 0,
          "target": "1-panorama-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "AVDL",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
