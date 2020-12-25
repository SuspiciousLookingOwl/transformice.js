module.exports = [
  "api/index",
  "api/globals",
  {
    "type": "category",
    "label": "Classes",
    "items": [
      "api/classes/base",
      "api/classes/channelmessage",
      "api/classes/client",
      "api/classes/friend",
      "api/classes/message",
      "api/classes/player",
      "api/classes/room",
      "api/classes/roommessage",
      "api/classes/roomplayer",
      "api/classes/whispermessage"
    ]
  },
  {
    "type": "category",
    "label": "Interfaces",
    "items": [
      "api/interfaces/clientevents",
      "api/interfaces/clientoptions"
    ]
  }
];