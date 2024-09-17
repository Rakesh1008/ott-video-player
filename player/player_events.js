// hls.js events
function hlsRegisterEvents(){
    this.hlsJsEvents = function(){

        hls.on(Hls.Events.MEDIA_ATTACHING,function(event, data){
            console.log("MEDIA_ATTACHING loaded")
        })
    
        hls.on(Hls.Events.MEDIA_ATTACHED,function(event, data){
            console.log(" MEDIA_ATTACHED loaded")
        })
    
        hls.on(Hls.Events.MEDIA_DETACHING,function(event, data){
            console.log("MEDIA_DETACHING loaded")
        })
    
        hls.on(Hls.Events.MEDIA_DETACHED,function(event, data){
            console.log("MEDIA_DETACHED loaded")
        })
    
        hls.on(Hls.Events.BUFFER_RESET,function(event, data){
            console.log("BUFFER_RESET loaded")
        })
    
        hls.on(Hls.Events.BUFFER_CODECS,function(event, data){
            console.log("BUFFER_CODECS loaded")
        })
    
        hls.on(Hls.Events.BUFFER_CREATED,function(event, data){
            console.log("BUFFER_CREATED loaded")
        })
    
        hls.on(Hls.Events.BUFFER_APPENDING,function(event, data){
            console.log("BUFFER_APPENDING loaded")
        })
    
        hls.on(Hls.Events.BUFFER_EOS,function(event, data){
            console.log("BUFFER_EOS loaded")
        })
    
        hls.on(Hls.Events.BUFFER_FLUSHING,function(event, data){
            console.log("BUFFER_FLUSHING loaded")
        })
    
        hls.on(Hls.Events.BUFFER_FLUSHED,function(event, data){
            console.log("BUFFER_FLUSHED loaded")
        })
    
        hls.on(Hls.Events.MANIFEST_LOADING,function(event, data){
            console.log("MANIFEST_LOADING loaded")
        })
    
        hls.on(Hls.Events.MANIFEST_LOADED,function(event, data){
            console.log("MANIFEST_LOADED loaded")
        })
    
        hls.on(Hls.Events.MANIFEST_PARSED,function(event, data){
            console.log("MANIFEST_PARSED loaded")
        })
    
        hls.on(Hls.Events.LEVEL_SWITCHING,function(event, data){
            console.log("LEVEL_SWITCHING loaded")
        })
    
        hls.on(Hls.Events.LEVEL_SWITCHED,function(event, data){
            console.log("LEVEL_SWITCHED loaded")
        })
    
        hls.on(Hls.Events.LEVEL_LOADING,function(event, data){
            console.log("LEVEL_LOADING loaded")
        })
    
        hls.on(Hls.Events.LEVEL_LOADED,function(event, data){
            console.log("LEVEL_LOADED loaded")
        })
    
        hls.on(Hls.Events.LEVEL_UPDATED,function(event, data){
            console.log("LEVEL_UPDATED loaded")
        })
    
        hls.on(Hls.Events.LEVEL_PTS_UPDATED,function(event, data){
            console.log("LEVEL_PTS_UPDATED loaded")
        })
    
        hls.on(Hls.Events.AUDIO_TRACKS_UPDATED,function(event, data){
            console.log("AUDIO_TRACKS_UPDATED loaded")
        })
    
        hls.on(Hls.Events.AUDIO_TRACK_SWITCHING,function(event, data){
            console.log("AUDIO_TRACK_SWITCHING loaded")
        })
    
        hls.on(Hls.Events.AUDIO_TRACK_SWITCHED,function(event, data){
            console.log("AUDIO_TRACK_SWITCHED loaded")
        })
    
        hls.on(Hls.Events.AUDIO_TRACK_LOADING,function(event, data){
            console.log("AUDIO_TRACK_LOADING loaded")
        })
    
        hls.on(Hls.Events.AUDIO_TRACK_LOADED,function(event, data){
            console.log("AUDIO_TRACK_LOADED loaded")
        })
    
        hls.on(Hls.Events.SUBTITLE_TRACKS_UPDATED,function(event, data){
            console.log("SUBTITLE_TRACKS_UPDATED loaded")
        })
    
        hls.on(Hls.Events.SUBTITLE_TRACK_SWITCH,function(event, data){
            console.log("SUBTITLE_TRACK_SWITCH loaded")
        })
    
        hls.on(Hls.Events.SUBTITLE_TRACK_LOADING,function(event, data){
            console.log("SUBTITLE_TRACK_LOADING loaded")
        })
    
        hls.on(Hls.Events.SUBTITLE_TRACK_LOADED,function(event, data){
            console.log("SUBTITLE_TRACK_LOADED loaded")
        })
    
        hls.on(Hls.Events.SUBTITLE_FRAG_PROCESSED,function(event, data){
            console.log("SUBTITLE_FRAG_PROCESSED loaded")
        })
    
        hls.on(Hls.Events.INIT_PTS_FOUND,function(event, data){
            console.log("INIT_PTS_FOUND loaded")
        })
    
        hls.on(Hls.Events.FRAG_LOADING,function(event, data){
            console.log("FRAG_LOADING loaded")
        })
    
        hls.on(Hls.Events.FRAG_LOAD_PROGRESS,function(event, data){
            console.log("FRAG_LOAD_PROGRESS loaded")
        })
    
        hls.on(Hls.Events.FRAG_LOAD_EMERGENCY_ABORTED,function(event, data){
            console.log("FRAG_LOAD_EMERGENCY_ABORTED loaded")
        })
    
        hls.on(Hls.Events.FRAG_LOADED,function(event, data){
            console.log("FRAG_LOADED loaded")
        })
    
        hls.on(Hls.Events.FRAG_DECRYPTED,function(event, data){
            console.log("FRAG_DECRYPTED loaded")
        })
    
        hls.on(Hls.Events.FRAG_PARSING_INIT_SEGMENT,function(event, data){
            console.log("FRAG_PARSING_INIT_SEGMENT loaded")
        })
    
        hls.on(Hls.Events.FRAG_PARSING_USERDATA,function(event, data){
            console.log("FRAG_PARSING_USERDATA loaded")
        })
    
        hls.on(Hls.Events.FRAG_PARSING_METADATA,function(event, data){
            console.log("FRAG_PARSING_METADATA loaded")
        })
    
        hls.on(Hls.Events.FRAG_PARSING_DATA,function(event, data){
            console.log("FRAG_PARSING_DATA loaded")
        })
    
        hls.on(Hls.Events.FRAG_PARSED,function(event, data){
            console.log("FRAG_PARSED loaded")
        })
    
        hls.on(Hls.Events.FRAG_BUFFERED,function(event, data){
            console.log("FRAG_BUFFERED loaded")
        })
    
        hls.on(Hls.Events.FRAG_CHANGED,function(event, data){
            console.log("FRAG_CHANGED loaded")
        })
    
        hls.on(Hls.Events.FPS_DROP,function(event, data){
            console.log("FPS_DROP loaded")
        })
    
        hls.on(Hls.Events.FPS_DROP_LEVEL_CAPPING,function(event, data){
            console.log("FPS_DROP_LEVEL_CAPPING loaded")
        })
    
        hls.on(Hls.Events.ERROR,function(event, data){
            console.log("ERROR loaded")
        })
    
        hls.on(Hls.Events.DESTROYING,function(event, data){
            console.log("DESTROYING loaded")
        })
    
        hls.on(Hls.Events.KEY_LOADING,function(event, data){
            console.log("KEY_LOADING loaded")
        })
    
        hls.on(Hls.Events.KEY_LOADED,function(event, data){
            console.log("KEY_LOADED loaded")
        })
    
        hls.on(Hls.Events.STREAM_STATE_TRANSITION,function(event, data){
            console.log("STREAM_STATE_TRANSITION loaded")
        })
    
    }

    this.hlsJsRemoveEvents = function(){

            hls.off(Hls.Events.MEDIA_ATTACHING,function(event, data){
                console.log("MEDIA_ATTACHING loaded")
            })
        
            hls.off(Hls.Events.MEDIA_ATTACHED,function(event, data){
                console.log(" MEDIA_ATTACHED loaded")
            })
        
            hls.off(Hls.Events.MEDIA_DETACHING,function(event, data){
                console.log("MEDIA_DETACHING loaded")
            })
        
            hls.off(Hls.Events.MEDIA_DETACHED,function(event, data){
                console.log("MEDIA_DETACHED loaded")
            })
        
            hls.off(Hls.Events.BUFFER_RESET,function(event, data){
                console.log("BUFFER_RESET loaded")
            })
        
            hls.off(Hls.Events.BUFFER_CODECS,function(event, data){
                console.log("BUFFER_CODECS loaded")
            })
        
            hls.off(Hls.Events.BUFFER_CREATED,function(event, data){
                console.log("BUFFER_CREATED loaded")
            })
        
            hls.off(Hls.Events.BUFFER_APPENDING,function(event, data){
                console.log("BUFFER_APPENDING loaded")
            })
        
            hls.off(Hls.Events.BUFFER_EOS,function(event, data){
                console.log("BUFFER_EOS loaded")
            })
        
            hls.off(Hls.Events.BUFFER_FLUSHING,function(event, data){
                console.log("BUFFER_FLUSHING loaded")
            })
        
            hls.off(Hls.Events.BUFFER_FLUSHED,function(event, data){
                console.log("BUFFER_FLUSHED loaded")
            })
        
            hls.off(Hls.Events.MANIFEST_LOADING,function(event, data){
                console.log("MANIFEST_LOADING loaded")
            })
        
            hls.off(Hls.Events.MANIFEST_LOADED,function(event, data){
                console.log("MANIFEST_LOADED loaded")
            })
        
            hls.off(Hls.Events.MANIFEST_PARSED,function(event, data){
                console.log("MANIFEST_PARSED loaded")
            })
        
            hls.off(Hls.Events.LEVEL_SWITCHING,function(event, data){
                console.log("LEVEL_SWITCHING loaded")
            })
        
            hls.off(Hls.Events.LEVEL_SWITCHED,function(event, data){
                console.log("LEVEL_SWITCHED loaded")
            })
        
            hls.off(Hls.Events.LEVEL_LOADING,function(event, data){
                console.log("LEVEL_LOADING loaded")
            })
        
            hls.off(Hls.Events.LEVEL_LOADED,function(event, data){
                console.log("LEVEL_LOADED loaded")
            })
        
            hls.off(Hls.Events.LEVEL_UPDATED,function(event, data){
                console.log("LEVEL_UPDATED loaded")
            })
        
            hls.off(Hls.Events.LEVEL_PTS_UPDATED,function(event, data){
                console.log("LEVEL_PTS_UPDATED loaded")
            })
        
            hls.off(Hls.Events.AUDIO_TRACKS_UPDATED,function(event, data){
                console.log("AUDIO_TRACKS_UPDATED loaded")
            })
        
            hls.off(Hls.Events.AUDIO_TRACK_SWITCHING,function(event, data){
                console.log("AUDIO_TRACK_SWITCHING loaded")
            })
        
            hls.off(Hls.Events.AUDIO_TRACK_SWITCHED,function(event, data){
                console.log("AUDIO_TRACK_SWITCHED loaded")
            })
        
            hls.off(Hls.Events.AUDIO_TRACK_LOADING,function(event, data){
                console.log("AUDIO_TRACK_LOADING loaded")
            })
        
            hls.off(Hls.Events.AUDIO_TRACK_LOADED,function(event, data){
                console.log("AUDIO_TRACK_LOADED loaded")
            })
        
            hls.off(Hls.Events.SUBTITLE_TRACKS_UPDATED,function(event, data){
                console.log("SUBTITLE_TRACKS_UPDATED loaded")
            })
        
            hls.off(Hls.Events.SUBTITLE_TRACK_SWITCH,function(event, data){
                console.log("SUBTITLE_TRACK_SWITCH loaded")
            })
        
            hls.off(Hls.Events.SUBTITLE_TRACK_LOADING,function(event, data){
                console.log("SUBTITLE_TRACK_LOADING loaded")
            })
        
            hls.off(Hls.Events.SUBTITLE_TRACK_LOADED,function(event, data){
                console.log("SUBTITLE_TRACK_LOADED loaded")
            })
        
            hls.off(Hls.Events.SUBTITLE_FRAG_PROCESSED,function(event, data){
                console.log("SUBTITLE_FRAG_PROCESSED loaded")
            })
        
            hls.off(Hls.Events.INIT_PTS_FOUND,function(event, data){
                console.log("INIT_PTS_FOUND loaded")
            })
        
            hls.off(Hls.Events.FRAG_LOADING,function(event, data){
                console.log("FRAG_LOADING loaded")
            })
        
            hls.off(Hls.Events.FRAG_LOAD_PROGRESS,function(event, data){
                console.log("FRAG_LOAD_PROGRESS loaded")
            })
        
            hls.off(Hls.Events.FRAG_LOAD_EMERGENCY_ABORTED,function(event, data){
                console.log("FRAG_LOAD_EMERGENCY_ABORTED loaded")
            })
        
            hls.off(Hls.Events.FRAG_LOADED,function(event, data){
                console.log("FRAG_LOADED loaded")
            })
        
            hls.off(Hls.Events.FRAG_DECRYPTED,function(event, data){
                console.log("FRAG_DECRYPTED loaded")
            })
        
            hls.off(Hls.Events.FRAG_PARSING_INIT_SEGMENT,function(event, data){
                console.log("FRAG_PARSING_INIT_SEGMENT loaded")
            })
        
            hls.off(Hls.Events.FRAG_PARSING_USERDATA,function(event, data){
                console.log("FRAG_PARSING_USERDATA loaded")
            })
        
            hls.off(Hls.Events.FRAG_PARSING_METADATA,function(event, data){
                console.log("FRAG_PARSING_METADATA loaded")
            })
        
            hls.off(Hls.Events.FRAG_PARSING_DATA,function(event, data){
                console.log("FRAG_PARSING_DATA loaded")
            })
        
            hls.off(Hls.Events.FRAG_PARSED,function(event, data){
                console.log("FRAG_PARSED loaded")
            })
        
            hls.off(Hls.Events.FRAG_BUFFERED,function(event, data){
                console.log("FRAG_BUFFERED loaded")
            })
        
            hls.off(Hls.Events.FRAG_CHANGED,function(event, data){
                console.log("FRAG_CHANGED loaded")
            })
        
            hls.off(Hls.Events.FPS_DROP,function(event, data){
                console.log("FPS_DROP loaded")
            })
        
            hls.off(Hls.Events.FPS_DROP_LEVEL_CAPPING,function(event, data){
                console.log("FPS_DROP_LEVEL_CAPPING loaded")
            })
        
            hls.off(Hls.Events.ERROR,function(event, data){
                console.log("ERROR loaded")
            })
        
            hls.off(Hls.Events.DESTROYING,function(event, data){
                console.log("DESTROYING loaded")
            })
        
            hls.off(Hls.Events.KEY_LOADING,function(event, data){
                console.log("KEY_LOADING loaded")
            })
        
            hls.off(Hls.Events.KEY_LOADED,function(event, data){
                console.log("KEY_LOADED loaded")
            })
        
            hls.off(Hls.Events.STREAM_STATE_TRANSITION,function(event, data){
                console.log("STREAM_STATE_TRANSITION loaded")
            })
        
    }
}

const HlsEvents = {
    // fired before MediaSource is attaching to media element - data: { media }
    MEDIA_ATTACHING: 'hlsMediaAttaching',
    // fired when MediaSource has been succesfully attached to media element - data: { }
    MEDIA_ATTACHED: 'hlsMediaAttached',
    // fired before detaching MediaSource from media element - data: { }
    MEDIA_DETACHING: 'hlsMediaDetaching',
    // fired when MediaSource has been detached from media element - data: { }
    MEDIA_DETACHED: 'hlsMediaDetached',
    // fired when we buffer is going to be reset - data: { }
    BUFFER_RESET: 'hlsBufferReset',
    // fired when we know about the codecs that we need buffers for to push into - data: {tracks : { container, codec, levelCodec, initSegment, metadata }}
    BUFFER_CODECS: 'hlsBufferCodecs',
    // fired when sourcebuffers have been created - data: { tracks : tracks }
    BUFFER_CREATED: 'hlsBufferCreated',
    // fired when we append a segment to the buffer - data: { segment: segment object }
    BUFFER_APPENDING: 'hlsBufferAppending',
    // fired when we are done with appending a media segment to the buffer - data : { parent : segment parent that triggered BUFFER_APPENDING, pending : nb of segments waiting for appending for this segment parent}
    BUFFER_APPENDED: 'hlsBufferAppended',
    // fired when the stream is finished and we want to notify the media buffer that there will be no more data - data: { }
    BUFFER_EOS: 'hlsBufferEos',
    // fired when the media buffer should be flushed - data { startOffset, endOffset }
    BUFFER_FLUSHING: 'hlsBufferFlushing',
    // fired when the media buffer has been flushed - data: { }
    BUFFER_FLUSHED: 'hlsBufferFlushed',
    // fired to signal that a manifest loading starts - data: { url : manifestURL}
    MANIFEST_LOADING: 'hlsManifestLoading',
    // fired after manifest has been loaded - data: { levels : [available quality levels], audioTracks : [ available audio tracks], url : manifestURL, stats : { trequest, tfirst, tload, mtime}}
    MANIFEST_LOADED: 'hlsManifestLoaded',
    // fired after manifest has been parsed - data: { levels : [available quality levels], firstLevel : index of first quality level appearing in Manifest}
    MANIFEST_PARSED: 'hlsManifestParsed',
    // fired when a level switch is requested - data: { level : id of new level }
    LEVEL_SWITCHING: 'hlsLevelSwitching',
    // fired when a level switch is effective - data: { level : id of new level }
    LEVEL_SWITCHED: 'hlsLevelSwitched',
    // fired when a level playlist loading starts - data: { url : level URL, level : id of level being loaded}
    LEVEL_LOADING: 'hlsLevelLoading',
    // fired when a level playlist loading finishes - data: { details : levelDetails object, level : id of loaded level, stats : { trequest, tfirst, tload, mtime} }
    LEVEL_LOADED: 'hlsLevelLoaded',
    // fired when a level's details have been updated based on previous details, after it has been loaded - data: { details : levelDetails object, level : id of updated level }
    LEVEL_UPDATED: 'hlsLevelUpdated',
    // fired when a level's PTS information has been updated after parsing a fragment - data: { details : levelDetails object, level : id of updated level, drift: PTS drift observed when parsing last fragment }
    LEVEL_PTS_UPDATED: 'hlsLevelPtsUpdated',
    // fired to notify that audio track lists has been updated - data: { audioTracks : audioTracks }
    AUDIO_TRACKS_UPDATED: 'hlsAudioTracksUpdated',
    // fired when an audio track switching is requested - data: { id : audio track id }
    AUDIO_TRACK_SWITCHING: 'hlsAudioTrackSwitching',
    // fired when an audio track switch actually occurs - data: { id : audio track id }
    AUDIO_TRACK_SWITCHED: 'hlsAudioTrackSwitched',
    // fired when an audio track loading starts - data: { url : audio track URL, id : audio track id }
    AUDIO_TRACK_LOADING: 'hlsAudioTrackLoading',
    // fired when an audio track loading finishes - data: { details : levelDetails object, id : audio track id, stats : { trequest, tfirst, tload, mtime } }
    AUDIO_TRACK_LOADED: 'hlsAudioTrackLoaded',
    // fired to notify that subtitle track lists has been updated - data: { subtitleTracks : subtitleTracks }
    SUBTITLE_TRACKS_UPDATED: 'hlsSubtitleTracksUpdated',
    // fired when an subtitle track switch occurs - data: { id : subtitle track id }
    SUBTITLE_TRACK_SWITCH: 'hlsSubtitleTrackSwitch',
    // fired when a subtitle track loading starts - data: { url : subtitle track URL, id : subtitle track id }
    SUBTITLE_TRACK_LOADING: 'hlsSubtitleTrackLoading',
    // fired when a subtitle track loading finishes - data: { details : levelDetails object, id : subtitle track id, stats : { trequest, tfirst, tload, mtime } }
    SUBTITLE_TRACK_LOADED: 'hlsSubtitleTrackLoaded',
    // fired when a subtitle fragment has been processed - data: { success : boolean, frag : the processed frag }
    SUBTITLE_FRAG_PROCESSED: 'hlsSubtitleFragProcessed',
    // fired when the first timestamp is found - data: { id : demuxer id, initPTS: initPTS, frag : fragment object }
    INIT_PTS_FOUND: 'hlsInitPtsFound',
    // fired when a fragment loading starts - data: { frag : fragment object }
    FRAG_LOADING: 'hlsFragLoading',
    // fired when a fragment loading is progressing - data: { frag : fragment object, { trequest, tfirst, loaded } }
    FRAG_LOAD_PROGRESS: 'hlsFragLoadProgress',
    // Identifier for fragment load aborting for emergency switch down - data: { frag : fragment object }
    FRAG_LOAD_EMERGENCY_ABORTED: 'hlsFragLoadEmergencyAborted',
    // fired when a fragment loading is completed - data: { frag : fragment object, payload : fragment payload, stats : { trequest, tfirst, tload, length } }
    FRAG_LOADED: 'hlsFragLoaded',
    // fired when a fragment has finished decrypting - data: { id : demuxer id, frag: fragment object, payload : fragment payload, stats : { tstart, tdecrypt } }
    FRAG_DECRYPTED: 'hlsFragDecrypted',
    // fired when Init Segment has been extracted from fragment - data: { id : demuxer id, frag: fragment object, moov : moov MP4 box, codecs : codecs found while parsing fragment }
    FRAG_PARSING_INIT_SEGMENT: 'hlsFragParsingInitSegment',
    // fired when parsing sei text is completed - data: { id : demuxer id, frag: fragment object, samples : [ sei samples pes ] }
    FRAG_PARSING_USERDATA: 'hlsFragParsingUserdata',
    // fired when parsing id3 is completed - data: { id : demuxer id, frag: fragment object, samples : [ id3 samples pes ] }
    FRAG_PARSING_METADATA: 'hlsFragParsingMetadata',
    // fired when data have been extracted from fragment - data: { id : demuxer id, frag: fragment object, data1 : moof MP4 box or TS fragments, data2 : mdat MP4 box or null}
    FRAG_PARSING_DATA: 'hlsFragParsingData',
    // fired when fragment parsing is completed - data: { id : demuxer id, frag: fragment object }
    FRAG_PARSED: 'hlsFragParsed',
    // fired when fragment remuxed MP4 boxes have all been appended into SourceBuffer - data: { id : demuxer id, frag : fragment object, stats : { trequest, tfirst, tload, tparsed, tbuffered, length, bwEstimate } }
    FRAG_BUFFERED: 'hlsFragBuffered',
    // fired when fragment matching with current media position is changing - data : { id : demuxer id, frag : fragment object }
    FRAG_CHANGED: 'hlsFragChanged',
    // Identifier for a FPS drop event - data: { curentDropped, currentDecoded, totalDroppedFrames }
    FPS_DROP: 'hlsFpsDrop',
    // triggered when FPS drop triggers auto level capping - data: { level, droppedlevel }
    FPS_DROP_LEVEL_CAPPING: 'hlsFpsDropLevelCapping',
    // Identifier for an error event - data: { type : error type, details : error details, fatal : if true, hls.js cannot/will not try to recover, if false, hls.js will try to recover,other error specific data }
    ERROR: 'hlsError',
    // fired when hls.js instance starts destroying. Different from MEDIA_DETACHED as one could want to detach and reattach a media to the instance of hls.js to handle mid-rolls for example - data: { }
    DESTROYING: 'hlsDestroying',
    // fired when a decrypt key loading starts - data: { frag : fragment object }
    KEY_LOADING: 'hlsKeyLoading',
    // fired when a decrypt key loading is completed - data: { frag : fragment object, payload : key payload, stats : { trequest, tfirst, tload, length } }
    KEY_LOADED: 'hlsKeyLoaded',
    // fired upon stream controller state transitions - data: { previousState, nextState }
    STREAM_STATE_TRANSITION: 'hlsStreamStateTransition'
  };