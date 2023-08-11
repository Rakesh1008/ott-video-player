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

    init();
})()


function init(){
    var video = document.getElementById('video');
    var videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

    if (Hls.isSupported()) {
        window.hls = new Hls();
        hls.loadSource(videoSrc);

        hls.on(Hls.Events.MANIFEST_LOADED,function(event, data){
            console.log("manifest loaded")
        })

        hls.on(Hls.Events.MANIFEST_PARSED,function(event, data){
            const availableQualitys = hls.levels.map((l) => l.height)
            console.log("availableQualitys",availableQualitys)  
        })
        
        hls.attachMedia(video);
      }
}