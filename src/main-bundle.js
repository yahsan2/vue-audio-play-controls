import Vue from 'vue'
import AudioPlayControls from './components/AudioPlayControls.vue'

Vue.config.productionTip = false

const VueAudioPlayControls = {
  install (Vue, params = {}) {
    Vue.component('audio-player', AudioPlayControls)
  }
}

export default VueAudioPlayControls
