async function init() {
  const video_blue = document.getElementById('videoPlayer');

    const ui_config_blue= video_blue['ui'];

      const config_blue = {
        'seekBarColors': {
          base: 'rgba(66, 133, 244, 0.35)',
          buffered: 'rgba(66, 133, 244, 0.6)',
          played: 'rgba(66, 133, 244, 0.8)',
        },
        'volumeBarColors': {
          base: 'rgba(66, 133, 244, 0.8)',
          level: 'rgb(66, 133, 244)',
        }
      };

    ui_config_blue.configure(config_blue);

    $('.shaka-overflow-menu-button').html('settings');
    $('.shaka-back-to-overflow-button .material-icons-round').html('arrow_back_ios_new');
}

document.addEventListener('shaka-ui-loaded', init);
