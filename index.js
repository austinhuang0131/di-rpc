const { Plugin } = require('elements')

module.exports = class commands extends Plugin {
  /**
   * Contains all the loading logic, that does not depend on the DOM or other plugins
   */
  preload () {}
  /**
   * Contains all the loading logic, that does depend on the DOM or other plugins
   */
  load () {}
  /**
   * Stuff to do on unload (e.g. freeing resources, timers and event handlers)
   */
  unload () {}
}
