import Vue from 'vue'
import AudioPlayControls from './components/AudioPlayControls.vue'

Vue.config.productionTip = false

const VueAudioPlayControls = {
  install (Vue, params = {}) {
    Vue.component('audio-play-controls', AudioPlayControls)
  },
  AudioPlayControls
}

export default VueAudioPlayControls
