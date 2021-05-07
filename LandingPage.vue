
<template>
<div id="app">
  <div id="partone" v-if="playone">
  <video id="vid" ref="myvideo" disablepictureinpicture controlslist="nodownload" autoplay
    src="./x.mp4"
    width="1080"></video>
  </div>
  <div id="pause" v-if="pauseit">
    <img id="freeze" src="./freeze.png" width="1080"/>
  </div>

  <!--<div id="parttwo" v-if="playtwo">
    <video id="vid" ref="myvideo" disablepictureinpicture controlslist="nodownload" autoplay
        src="./x.mp4"
        width="1080"></video>
  </div>-->


  <div class="demo">
    <button @click="halt()">Play</button>
  </div>

</div>
</template>

<script src="./LandingPageLogic.js>

</script>

<style>
      video {
        position: relative;
        width: 100%;
        top: 0;
        height: auto;
      }
      body {background-color: black;}

#freeze {
   position: relative;
   width: 100%;
   top: 0;
   height: auto;

}

button{
  margin:auto;
  display:block;
}

/* BUTTON STYLES */
button{
  padding:16px 32px;
  font-family:helvetica;
  font-size:16px;
  font-weight:100;
  color:#fff;
  background: #587286;
  border:0;
  font-weight:100;
}
button:hover{
  background: #3B5C76;
}

.demo {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
</style>

