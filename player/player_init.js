window.hlsjs = false;
window.shakajs = true;

(function () {
    let player_container = document.getElementById("playerDiv");
    let video_ele = document.createElement("video");

    video_ele.setAttribute("id", "video")

    let track_ele = document.createElement("track");
    track_ele.setAttribute("kind", "captions")
    track_ele.setAttribute("srclang", "en")
    track_ele.setAttribute("src", "assets/subtitles.vtt")

    video_ele.appendChild(track_ele)

    player_container.appendChild(video_ele);

    if(hlsjs === true){
        init();
    } else {
        initApp()
    }
})()

// initialize hls.js player
function init(){
    var video = document.getElementById('video');
    var videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

    if (Hls.isSupported()) {
        window.hls = new Hls();
        hls.loadSource(videoSrc);

        var hlsPlayerEvents = new hlsRegisterEvents();
        hlsPlayerEvents.hlsJsEvents();
        
        hls.attachMedia(video);
      }
}

// initialize shaka player 
const manifestUri =
    'https://cdn.bitmovin.com/content/assets/art-of-motion_drm/mpds/11331.mpd';

function initApp() {
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer();
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!');
  }
}

async function initPlayer() {
  // Create a Player instance.
  const video = document.getElementById('video');
  const player = new shaka.Player(video);

  // Attach player to the window to make it easy to access in the JS console.
  window.player = player;

  player.configure({
    drm: {
      servers: {
        'com.widevine.alpha': 'https://cwip-shaka-proxy.appspot.com/no_auth',
      }
    }
  });

  player.getNetworkingEngine().registerRequestFilter(function(type, request) {
    // Only add headers to license requests:
    if (type == shaka.net.NetworkingEngine.RequestType.LICENSE) {
      // This is the specific header name and value the server wants:
      request.headers['CWIP-Auth-Header'] = 'VGhpc0lzQVRlc3QK';
    }
  });

  // Listen for error events.
  player.addEventListener('error', onErrorEvent);

  // Try to load a manifest.
  // This is an asynchronous process.
  try {
    await player.load(manifestUri).then(function() {
        var track = player.getVariantTracks().filter(function(track) {
          return track.width === 1920
        }).pop();
      
        if (track) {
          console.log('Selecting variant track ', track);
          player.selectVariantTrack(track, true);
        }
      }).catch(onError);;
    // This runs if the asynchronous load is successful.
    console.log('The video has now been loaded!');
  } catch (e) {
    // onError is executed if the asynchronous load fails.
    onError(e);
  }
}

function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  onError(event.detail);
}

function onError(error) {
  // Log the error.
  console.error('Error code', error.code, 'object', error);
}

document.addEventListener('DOMContentLoaded', initApp);