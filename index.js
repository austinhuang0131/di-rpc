const { Plugin } = require('elements'),
      drpc = require('discord-rich-presence');

module.exports = class RPC extends Plugin {
  preload () {}
  load () {
    this.registerSettingsTab('Rich Presence', require('./settings.jsx'))
  }
  unload () {
    drpc(this.settings.id)();
  }
  settingsChanged () {
    console.log("RPC changed");
    let a = this.settings;
    delete a.id;
    drpc(this.settings.id)(a);
  }
}
