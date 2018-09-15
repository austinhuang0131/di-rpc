const { Plugin } = require('elements'),
      drpc = require('discord-rich-presence');

module.exports = class RPC extends Plugin {
  preload () {
    let a = this.settings,
        client = drpc(this.settings.id);
    delete a.id;
    a.instance = true;
    client.updatePresence(a);
  }
  load () {
    this.registerSettingsTab('Rich Presence', require('./settings.jsx'))
  }
  unload () {
    let client = drpc(this.settings.id);
    client.updatePresence(a);
  }
  settingsChanged () {
    let a = this.settings,
        client = drpc(this.settings.id);
    delete a.id;
    a.instance = true;
    client.updatePresence(a);
  }
}
