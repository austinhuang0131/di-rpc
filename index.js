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
}

function setRPC() {
  console.log("apply fired");
  let a = this.settings;
  delete a.id;
  rpc(this.settings.id)(a);
}
