(function () {
    let player_container = document.getElementById("playerDiv");
    let video_ele = document.createElement("video");

    video_ele.setAttribute("id", "video")
    video_ele.setAttribute("src", "assets/Video.mp4");

    let track_ele = document.createElement("track");
    track_ele.setAttribute("kind", "captions")
    track_ele.setAttribute("srclang", "en")
    track_ele.setAttribute("src", "assets/subtitles.vtt")

    video_ele.appendChild(track_ele)

    player_container.appendChild(video_ele);
})()