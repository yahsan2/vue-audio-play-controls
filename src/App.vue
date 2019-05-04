<template>
  <div id="app">
    <div class="content">
      This is the main content
    </div>
    <audio-play-controls
     avHeight="82px"
     :playlist="playlist"
     :canvas="true"
    ></audio-play-controls>
  </div>
</template>

<script>
import AudioPlayControls from './components/AudioPlayControls'

export default {
  components: { AudioPlayControls },
  data () {
    return {
      playlist: [
        {
          audioName: 'Agnes',
          audioSrc: 'static/agnes.mp3',
          authorName: 'Glass Animals',
          audioImg: 'https://pbs.twimg.com/profile_images/765322021060354048/0ppD4P6Y_400x400.jpg',
          audioDuration: '3:55'
        },
        {
          audioName: 'TaKillya (Baby Driver Soundtrack)',
          audioSrc: 'static/takillya.mp3',
          authorName: 'Vinnie Maniscalco',
          audioImg: 'https://adamology.net/wp-content/uploads/2017/07/Baby-Driver.jpg',
          audioDuration: '3:46'
        },
        {
          audioName: 'Kipod',
          audioSrc: 'static/kipod.mp3',
          authorName: 'Infected Mushrrom',
          audioImg: 'https://is4-ssl.mzstatic.com/image/thumb/Music/45/71/ff/mzi.mtqdovgf.jpg/1200x630bb.jpg',
          audioDuration: '5:48'
        },
        {
          audioName: 'Spitfire',
          audioSrc: 'static/spitfire.mp3',
          authorName: 'Infected Mushrrom',
          audioImg: 'https://is4-ssl.mzstatic.com/image/thumb/Music/45/71/ff/mzi.mtqdovgf.jpg/1200x630bb.jpg',
          audioDuration: '7:15'
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
