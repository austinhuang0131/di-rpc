const React = require('react'),
      { SettingsOptionDescription, SettingsOptionButton, SettingsOptionTextbox } = require('elements');

module.exports = class Settings extends React.PureComponent {

  render () {
    return (
      <div>
        <div className='DI-plugins-header'>
          <SettingsOptionDescription>
            Requires a Discord developer application. Your application name will always be the title of your
            rich presence, so choose wisely!<br />
            Always check your status after operation!<br />
            Please report any issues to <b>The Double-Eyed Bus#6889</b>.
          </SettingsOptionDescription>
          <br />
          <img src="https://canary.discordapp.com/assets/43bef54c8aee2bc0fd1c717d5f8ae28a.png" width="100%" alt="Example!"/>
        </div>
        
        <SettingsOptionTextbox
          title='Application ID'
          description="Your developer application ID."
          plugin={this.props.plugin}
          lsNode='id'
          defaultValue=''
          reset
        />
        
        <SettingsOptionTextbox
          title='details'
          description="For everything below, refer to the image on the top."
          plugin={this.props.plugin}
          lsNode='details'
          defaultValue=''
          reset
        />
        
        <SettingsOptionTextbox
          title='state'
          plugin={this.props.plugin}
          lsNode='state'
          defaultValue=''
          reset
        />
        
        <SettingsOptionTextbox
          title='partySize'
          description="Integer please."
          plugin={this.props.plugin}
          lsNode='partySize'
          defaultValue=''
          reset
        />
        
        <SettingsOptionTextbox
          title='partyMax'
          description="Integer please."
          plugin={this.props.plugin}
          lsNode='partyMax'
          defaultValue=''
          reset
        />
        
        <SettingsOptionTextbox
          title='startTimestamp'
          description="UNIX Timestamp please."
          plugin={this.props.plugin}
          lsNode='startTimestamp'
          defaultValue=''
          reset
        />
        
        <SettingsOptionTextbox
          title='largeImageKey'
          description='For the 2 image keys, you need to upload the images by logging into the developer portal \
                       and then select your app => Rich Presence => Art Assets. Press \"Add Image(s)\" then \
                       upload and change the asset name to your liking. Input the asset name below.'
          plugin={this.props.plugin}
          lsNode='largeImageKey'
          defaultValue=''
          reset
        />
        
        <SettingsOptionTextbox
          title='smallImageKey'
          description="See above."
          plugin={this.props.plugin}
          lsNode='smallImageKey'
          defaultValue=''
          reset
        />
                
        <SettingsOptionButton
          text='Apply'
          className='DI-plugins-button'
          onClick={this.props.plugin.setRPC}
        />
      </div>
    )
  }
}
