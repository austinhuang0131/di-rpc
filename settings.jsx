const React = require('react')

module.exports = class Settings extends React.PureComponent {
  loadRPC() {
    
  }
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
            className='DI-plugins-button-add'
            onClick={}
          />
          <br />
          <img src="https://discordapp.com/assets/43bef54c8aee2bc0fd1c717d5f8ae28a.png" alt="Example!"/>
          <br />
          <SettingsOptionTextbox
            title='Application ID'
            description="Your developer application ID."
            plugin={this.props.plugin}
            lsNode='a'
            defaultValue=''
            reset
          />
        </div>
        
      </div>
    )
  }
}
