const { Plugin } = require('elements'),
      drpc = require('discord-rich-presence');

module.exports = class RPC extends Plugin {
  preload () {
  }
  load () {
    let a = this.settings,
        client = drpc(this.settings.id);
    delete a.id;
    a.instance = true;
    client.updatePresence(a);
    this.registerSettingsTab('Rich Presence', require('./settings.jsx'))
  }
  unload () {
    let client = drpc(this.settings.id);
    client.updatePresence();
  }
  settingsChanged () {
    let a = this.settings,
        client = drpc(this.settings.id);
    delete a.id;
    a.instance = true;
    console.log(a);
    client.updatePresence(a);
  }
}
