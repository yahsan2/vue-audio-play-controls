<template>
  <div class="av__audio__playback">
    <div class="audio__controls">
      <div class="audio__controls__controls">
        <i @click="$emit('toggleShuffle')" class="fa fa-random"></i>
        <i @click="$emit('prevAudio')" class="fa fa-step-backward"></i>
        <i v-if="audioControls.audioPaused" @click="$emit('evalAudio')" class="fa fa-play-circle fa-2x"></i>
        <i v-else @click="$emit('evalAudio')" class="fa fa-pause-circle fa-2x"></i>
        <i @click="$emit('nextAudio')" class="fa fa-step-forward"></i>
        <i @click="$emit('toggleRepeat')" class="fa fa-repeat"></i>
      </div>
      <div class="audio__controls__progress ">
        <div class="audio__controls__progress__currentTime">{{audioControls.audioTime}}</div>
        <div class="audio__controls__progress__bar">
          <div class="audio__controls__progress__bar__percent" ref="progressBar"></div>
        </div>
        <div class="audio__controls__progress__audioDuration">{{audioControls.audioDuration}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioControls',
  props: [ 'isShuffling', 'repeatVal', 'audioControls' ],
  watch: {
    'audioControls.audioPercent': {
      handler: function (after, before) {
        this.$refs.progressBar.style.width = (after * 100).toString() + '%'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.audio__controls {
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;

  &__controls {
    align-self: center;
    color: hsla(0, 0%, 100%, .6);
    width: 260px;
    flex-grow: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }

  &__progress {
    height: 20px;
    display: flex;
    justify-content: space-between;

    &__currentTime, &__audioDuration {
      width: 3em;
      font-size: 12px;
      font-family: Helvetica, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__bar {
      flex-grow: 1;
      align-self: center;
      border-radius: 5px;
      background: #404040;
      height: 5px;
      position: relative;

      &__percent {
        position: absolute;
        height: inherit;
        border-radius: 5px;
        content: "";
        background: white;
        z-index: 5;
      }
    }
  }
}
</style>
