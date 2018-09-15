const React = require('react'),
      { SettingsOptionDescription, SettingsOptionButton} = require('elements');

module.exports = class Settings extends React.PureComponent {

  render () {
    return (
      <div>
        <div className='DI-plugins-header'>
          <SettingsOptionDescription>
            Requires a Discord developer application. Your application name will always be the title of your
            rich presence, so choose wisely!
            Always check your status after operation!<br />
            Please report any issues <a href="https://github.com/austinhuang0131/di-rpc">on GitHub</a> 
            or <a href="mailto:im@austinhuang.me">by email</a>.
          </SettingsOptionDescription>

          <SettingsOptionButton
            text='Save Rich Presence'
            className='DI-plugins-button'
          />
          <br />
          <img src="https://canary.discordapp.com/assets/43bef54c8aee2bc0fd1c717d5f8ae28a.png" width="300" alt="Example!"/>
        </div>
        
      </div>
    )
  }
}
