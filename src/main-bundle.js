import Vue from 'vue'
import AudioPlayer from './components/AudioPlayer.vue'

Vue.config.productionTip = false

const VueAudioPlayer = {
  install (Vue, params = {}) {
    Vue.component('audio-player', AudioPlayer)
  }
}

export default VueAudioPlayer
