function playback_quality(){
    this.qualityResoulations = function() {
        let liveBitrate_range = [
            {
                id: 'Auto',
                quality: 'Auto',
            },
            {
                id: '4k',
                quality: '4k',
                width: 3840,
                height: 2160,
            },
            {
                id: 'Full HD',
                quality: 'Full HD',
                width: 1920,
                height: 1080,
            },
            {
                id: 'HD',
                quality: 'HD',
                width: 1280,
                height: 720,
            },
            {
                id: 'High',
                quality: 'High',
                width: 854,
                height: 480,
            },
        ]
  return liveBitrate_range;
    }
}