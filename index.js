const { Plugin } = require('elements'),
      drpc = require('discord-rich-presence');

module.exports = class RPC extends Plugin {
  preload () {}
  load () {
    this.registerSettingsTab('Rich Presence', require('./settings.jsx'))
  }
  unload () {
    drpc(this.settings.id).updatePresence();
  }
  settingsChanged () {
    console.log(this.settings);
    let a = this.settings;
    delete a.id;
    a.instance = true;
    drpc(this.settings.id).updatePresence(a);
  }
}
