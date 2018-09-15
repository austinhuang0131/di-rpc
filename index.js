const { Plugin } = require('elements'),
      rpc = require('discord-rich-presence');

module.exports = class RPC extends Plugin {
  preload () {}
  load () {
    this.registerSettingsTab('Rich Presence', require('./settings.jsx'))
  }
  unload () {
    rpc(this.settings.id)();
  }
  settingsChanged () {
    console.log("RPC changed");
    let a = this.settings;
    delete a.id;
    rpc(this.settings.id)(a);
  }
}
