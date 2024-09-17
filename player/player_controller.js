const playPauseBtn = document.querySelector(".play-pause-btn")
const theaterBtn = document.querySelector(".theater-btn")
const fullScreenBtn = document.querySelector(".full-screen-btn")
const miniPlayerBtn = document.querySelector(".mini-player-btn")
const muteBtn = document.querySelector(".mute-btn")
const captionsBtn = document.querySelector(".captions-btn")
const speedBtn = document.querySelector(".speed-btn")
const currentTimeElem = document.querySelector(".current-time")
const totalTimeElem = document.querySelector(".total-time")
const previewImg = document.querySelector(".preview-img")
const thumbnailImg = document.querySelector(".thumbnail-img")
const volumeSlider = document.querySelector(".volume-slider")
const videoContainer = document.querySelector(".video-container")
const timelineContainer = document.querySelector(".timeline-container")
const settingBtn = document.querySelector(".setting-btn")
const video = document.querySelector("video")

//setting button
settingBtn.addEventListener("click", settingPopup)

let settingPopupDiv;
let qualityDiv

function settingPopup(){
  if(document.getElementsByClassName("settingDiv").length == 0){
    settingPopupDiv = document.createElement("div")
    settingPopupDiv.setAttribute("class","settingDiv");
    videoContainer.appendChild(settingPopupDiv)
    if(hlsjs){
      qualitySelections()
    } else {
      shakaQualitySelections()
    }
  } else {
    var qualityPopup = document.getElementsByClassName("settingDiv");
    qualityPopup[0].remove()
  }
}

const videoObject = document.querySelector("video")

videoObject.addEventListener("loadeddata", () => {
    console.log("loadeddata events");
});
videoObject.addEventListener("playing", () => {
    console.log("playing events");
});
videoObject.addEventListener("waiting", () => {
    console.log("waiting events");
});
videoObject.addEventListener("seeking", () => {
    console.log("seeking events");
});
videoObject.addEventListener("seeked", () => {
    console.log("seeked events");
});
videoObject.addEventListener("ended", () => {
    console.log("ended events");
});
videoObject.addEventListener("loadedmetadata", () => {
    console.log("loadedmetadata events");
});
videoObject.addEventListener("canplay", () => {
    console.log("canplay events");
});
videoObject.addEventListener("canplaythrough", () => {
    console.log("canplaythrough events");
});
videoObject.addEventListener("durationchange", () => {
    console.log("durationchange events");
});
videoObject.addEventListener("timeupdate", () => {
    console.log("timeupdate events");
});
videoObject.addEventListener("play", () => {
    console.log("play events");
});
videoObject.addEventListener("pause", () => {
    console.log("pause events");
});
videoObject.addEventListener("ratechange", () => {
    console.log("ratechange events");
});
videoObject.addEventListener("volumechange", () => {
    console.log("volumechange events");
});
videoObject.addEventListener("suspend", () => {
    console.log("suspend events");
});
videoObject.addEventListener("emptied", () => {
    console.log("emptied events");
});
videoObject.addEventListener("stalled", () => {
    console.log("stalled events");
});


function qualitySelections(){
  var playbackQuality = new playback_quality();
  var availableQualitysSelections = playbackQuality.qualityResoulations();
    const availableQualitys = hls.levels.map((l) => l.height)

    for(var i=0; i<availableQualitys.length; i++){
      if(availableQualitys[i] >= 480){
      for(var j=0; j<availableQualitysSelections.length;j++){
          if(availableQualitysSelections[j].height === availableQualitys[i]){
            qualityDiv= document.createElement("div")
            qualityDiv.setAttribute("class", "qualityDiv")
            qualityDiv.setAttribute("id", availableQualitys[i])
            qualityDiv.innerHTML = availableQualitysSelections[j].quality
            settingPopupDiv.appendChild(qualityDiv)

            qualityDiv.addEventListener("click", function (e) {
              const findQualityHeight = availableQualitys.find(number => number == e.target.getAttribute('id'));
              const findQualityIndex = availableQualitys.findIndex((number) => number == findQualityHeight);
              console.log("found", findQualityHeight, findQualityIndex);
              hls.currentLevel = findQualityIndex
            });
          }
        }
      }
    }
}

function shakaQualitySelections(){
  var playbackQuality = new playback_quality();
  var availableQualitysSelections = playbackQuality.qualityResoulations();
  var track = player.getVariantTracks().map((l) => l.height)
  var availbleQuality = player.getVariantTracks();

  player.configure({ abr: { enabled: false }})
  
  for(var i=0; i<track.length; i++){
    if(track[i] >= 360){
      for(var j=0; j<availableQualitysSelections.length;j++){
        if(availableQualitysSelections[j].height === track[i]){
          qualityDiv= document.createElement("div")
          qualityDiv.setAttribute("class", "qualityDiv")
          qualityDiv.setAttribute("id", track[i])
          qualityDiv.innerHTML = availableQualitysSelections[j].quality
          settingPopupDiv.appendChild(qualityDiv)

          qualityDiv.addEventListener("click", function (e) {
            const findQualityHeight = track.find(number => number == e.target.getAttribute('id'));
            const findQualityIndex = track.findIndex((number) => number == findQualityHeight);
            console.log("found", findQualityHeight, findQualityIndex);
            player.selectVariantTrack(availbleQuality[findQualityIndex], true);
          });
        }
      }
    }
  }
}

function myFunction() {
  console.log("Click Event");
}

document.addEventListener("keydown", e => {
  const tagName = document.activeElement.tagName.toLowerCase()

  if (tagName === "input") return

  switch (e.key.toLowerCase()) {
    case " ":
      if (tagName === "button") return
    case "k":
      togglePlay()
      break
    case "f":
      toggleFullScreenMode()
      break
    case "t":
      toggleTheaterMode()
      break
    case "i":
      toggleMiniPlayerMode()
      break
    case "m":
      toggleMute()
      break
    case "arrowleft":
    case "j":
      skip(-5)
      break
    case "arrowright":
    case "l":
      skip(5)
      break
    case "c":
      toggleCaptions()
      break
  }
})

// Timeline
// timelineContainer.addEventListener("mousemove", handleTimelineUpdate)
timelineContainer.addEventListener("mousedown", toggleScrubbing)
document.addEventListener("mouseup", e => {
  if (isScrubbing) toggleScrubbing(e)
})
// document.addEventListener("mousemove", e => {
//   if (isScrubbing) handleTimelineUpdate(e)
// })

let isScrubbing = false
let wasPaused
function toggleScrubbing(e) {
  const rect = timelineContainer.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  isScrubbing = (e.buttons & 1) === 1
  videoContainer.classList.toggle("scrubbing", isScrubbing)
  if (isScrubbing) {
    wasPaused = video.paused
    video.pause()
  } else {
    video.currentTime = percent * video.duration
    if (!wasPaused) video.play()
  }

  // handleTimelineUpdate(e)
}

function handleTimelineUpdate(e) {
  const rect = timelineContainer.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  const previewImgNumber = Math.max(
    1,
    Math.floor((percent * video.duration) / 10)
  )
  const previewImgSrc = `assets/previewImgs/preview${previewImgNumber}.jpg`
  previewImg.src = previewImgSrc
  timelineContainer.style.setProperty("--preview-position", percent)

  if (isScrubbing) {
    e.preventDefault()
    thumbnailImg.src = previewImgSrc
    timelineContainer.style.setProperty("--progress-position", percent)
  }
}

// Playback Speed
speedBtn.addEventListener("click", changePlaybackSpeed)

function changePlaybackSpeed() {
  let newPlaybackRate = video.playbackRate + 0.25
  if (newPlaybackRate > 2) newPlaybackRate = 0.25
  video.playbackRate = newPlaybackRate
  speedBtn.textContent = `${newPlaybackRate}x`
}

// Captions
const captions = video.textTracks[0]
captions.mode = "hidden"

// captionsBtn.addEventListener("click", toggleCaptions)

// function toggleCaptions() {
//   const isHidden = captions.mode === "hidden"
//   captions.mode = isHidden ? "showing" : "hidden"
//   videoContainer.classList.toggle("captions", isHidden)
// }

// Duration
video.addEventListener("loadeddata", () => {
  totalTimeElem.textContent = formatDuration(video.duration)
})

video.addEventListener("timeupdate", () => {
  currentTimeElem.textContent = formatDuration(video.currentTime)
  const percent = video.currentTime / video.duration
  timelineContainer.style.setProperty("--progress-position", percent)
})

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
})
function formatDuration(time) {
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`
  } else {
    return `${hours}:${leadingZeroFormatter.format(
      minutes
    )}:${leadingZeroFormatter.format(seconds)}`
  }
}

function skip(duration) {
  video.currentTime += duration
}

// Volume
muteBtn.addEventListener("click", toggleMute)
volumeSlider.addEventListener("input", e => {
  video.volume = e.target.value
  video.muted = e.target.value === 0
})

function toggleMute() {
  video.muted = !video.muted
}

video.addEventListener("volumechange", () => {
  volumeSlider.value = video.volume
  let volumeLevel
  if (video.muted || video.volume === 0) {
    volumeSlider.value = 0
    volumeLevel = "muted"
  } else if (video.volume >= 0.5) {
    volumeLevel = "high"
  } else {
    volumeLevel = "low"
  }

  videoContainer.dataset.volumeLevel = volumeLevel
})

// View Modes
theaterBtn.addEventListener("click", toggleTheaterMode)
fullScreenBtn.addEventListener("click", toggleFullScreenMode)
miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode)

function toggleTheaterMode() {
  videoContainer.classList.toggle("theater")
}

function toggleFullScreenMode() {
  if (document.fullscreenElement == null) {
    videoContainer.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

function toggleMiniPlayerMode() {
  if (videoContainer.classList.contains("mini-player")) {
    document.exitPictureInPicture()
  } else {
    video.requestPictureInPicture()
  }
}

document.addEventListener("fullscreenchange", () => {
  videoContainer.classList.toggle("full-screen", document.fullscreenElement)
})

video.addEventListener("enterpictureinpicture", () => {
  videoContainer.classList.add("mini-player")
})

video.addEventListener("leavepictureinpicture", () => {
  videoContainer.classList.remove("mini-player")
})

// Play/Pause
playPauseBtn.addEventListener("click", togglePlay)
video.addEventListener("click", togglePlay)

function togglePlay() {
  video.paused ? video.play() : video.pause()
}

video.addEventListener("play", () => {
  videoContainer.classList.remove("paused")
})

video.addEventListener("pause", () => {
  videoContainer.classList.add("paused")
})

if(hlsjs == true){
  hls.on(Hls.Events.DESTROYING,function(event, data){
    console.log("DESTROYING loaded in player handler")
    var hlsPlayerEvents = new hlsRegisterEvents();
    hlsPlayerEvents.hlsJsRemoveEvents();
  })
}