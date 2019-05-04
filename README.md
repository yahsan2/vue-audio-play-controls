# vue-audio-visualizer

A Better Media Player for Vue. Built in UI and Audio Visualizer.

## This project is still under heavy development and the following installation instructions may not work. Open an issue with suggestions or send a pull request if you are able to get the instructions to work.

<!-- # Demo -->

[Demo](http://vue-visualizer.firebaseapp.com)

# Installation


## NPM or Yarn (recommended)

```shell
$ npm install --save vue-audio-visualizer
$ yarn add vue-audio-visualizer
```

### In your project

After installing via Yarn or NPM, use the following snippet in the script portion of the Vue component which you wish to render the Markdown.

```js
import Vue from 'vue'
import VueAudioVisualizer from 'vue-audio-visualizer'
Vue.use(VueAudioVisualizer)
...
```

### Browser globals

> The **dist** folder contains `vue-audio-visualizer.js`.

```html
<body>
  <div>
    <div class="content">
      This is where you put the rest of your site
    </div>
    <audio-visualizer
      avHeight="82px"
      :playlist="playlist"
    ></audio-visualizer>
  </div>
</body>
<script src="path/to/vue.js"></script>
<script src="path/to/vue-audio-visualizer.js"></script>
<script>
    Vue.use(VueAudioVisualizer);
    var vm = new Vue({
        el: "body"
    });
</script>
```

# Brief Use-case
```html
<template>
  <div id="app">
    <div class="content">
      This is where you put the rest of your site
    </div>
    <audio-visualizer
     avHeight="82px"
     :playlist="playlist"
     :canvas="true"
    ></audio-visualizer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playlist: [
        {
          audioName: 'Agnes',
          audioLive: '/static/agnes.mp3',
          authorName: 'Glass Animals',
          audioImg: 'https://pbs.twimg.com/profile_images/765322021060354048/0ppD4P6Y_400x400.jpg',
          audioDuration: '3:55'
        },
        {
          audioName: 'TaKillya (Baby Driver Soundtrack)',
          audioLive: '/static/takillya.mp3',
          authorName: 'Vinnie Maniscalco',
          audioImg: 'https://adamology.net/wp-content/uploads/2017/07/Baby-Driver.jpg',
          audioDuration: '3:46'
        },
        {
          audioName: 'Kipod',
          audioLive: '/static/kipod.mp3',
          authorName: 'Infected Mushrrom',
          audioImg: 'https://is4-ssl.mzstatic.com/image/thumb/Music/45/71/ff/mzi.mtqdovgf.jpg/1200x630bb.jpg',
          audioDuration: '5:48'
        },
        {
          audioName: 'Spitfire',
          audioLive: '/static/spitfire.mp3',
          authorName: 'Infected Mushrrom',
          audioImg: 'https://is4-ssl.mzstatic.com/image/thumb/Music/45/71/ff/mzi.mtqdovgf.jpg/1200x630bb.jpg',
          audioDuration: '7:15'
        }
      ]
    }
  }
}
</script>
```
# Props

| Prop | Type | Default | Describe |
| ---- | ---- | ------- | ------- |
| avHeight | String | '82px' | The size of the media player at the bottom of the page. |
| playlist | Array | `null` | The playlist data |
| canvas | Boolean | true | Enable/Disable the audio-visualizer component |


# License

Copyright (c) 2018 [danstans](https://github.com/danstans) by [MIT](https://opensource.org/licenses/MIT)
