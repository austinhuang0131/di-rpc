const { Plugin } = require('elements'),
      rpc = require('discord-rich-presence'),
      fs = require('fs'),
      settings = JSON.parse(fs.readFileSync("./settings.json", "utf8"));

module.exports = class commands extends Plugin {
  preload () {}
  load () {
    this.registerSettingsTab('Rich Presence', require('./settings.jsx'))
  }
  unload () {
    rpc(settings.id)();
  }
}
