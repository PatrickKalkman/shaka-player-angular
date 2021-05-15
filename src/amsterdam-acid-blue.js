const amsterdam_acid_theme_manifestUri = 'https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd';

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
      }

    ui_config_blue.configure(config_blue);
    const controls_blue = ui_config_blue.getControls();
    const player_blue = controls_blue.getPlayer();

    try {
      await player_blue.load(amsterdam_acid_theme_manifestUri);
    } catch (error) {
    }
}

document.addEventListener('shaka-ui-loaded', init);
