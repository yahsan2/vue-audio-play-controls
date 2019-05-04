<template>
  <transition
    name="slide-fade">
    <div class="audio__playlist">
      <span>
        <span class="audioNum"></span>
        <span class="audioName"><b>audio</b></span>
        <span class="audioDuration">
          <i class="fa fa-clock-o"></i>
        </span>
      </span>
      <span v-for="(audio, index) in playlist" :key="index">
        <span class="audioNum" @click="$emit('chooseAudio', index)">
          <span v-if="!audio.isPlaying">{{index + 1}}</span>
          <span v-else><i class="fa fa-pause fa-xs"></i></span>
        </span>
        <span class="audioName" @click="$emit('chooseAudio', index)">{{audio.audioName}}</span>
        <span class="audioDuration">{{audio.audioDuration}}</span>
      </span>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'AudioPlaylist',
  props: [ 'playlist' ]
}
</script>

<style lang="scss" scoped>
.audio__playlist {
  position: absolute;
  top: 0;
  right: 0;
  height: calc(100% - var(--av-height));
  width: 350px;
  display: flex;
  flex-direction: column;
  background: #2f3136;
  color: rgb(246, 246, 247);
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  overflow: auto;

  >span {
    display: flex;
    height: 33px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;

    .audioNum {
      width: 33px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .audioName {
      flex-grow: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
    }

    .audioDuration {
      width: 4em;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>
