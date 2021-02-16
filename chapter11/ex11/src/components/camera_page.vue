<template>
  <v-container>
    <v-row>
      <v-col cols = "12" class = "text-center">
        <video ref = "rVideo" class = "style_video"></video>
      </v-col>
      <v-col cols = "12" class = "mt-5 text-center">
        <p>ios is not freakin supported </p>
      </v-col>

    </v-row>
    <div class = "text-center my-3">
      <v-btn v-if = "!this.bIsWait" color = "red" fab dark bottom @click = "fnCameraCapture()">
        <v-icon>camera</v-icon>
      </v-btn>
      <v-progress-circular v-if = "this.bIsWait" :size = "50" indeterminate color = "grey"></v-progress-circular>
    </div>
  </v-container>
</template>

<script>
import {oStorage, oPicturesinDB} from '@/datasources/firebase.js'
export default {
  firebase: {oStorage, oPicturesinDB},
  data() {
    return {
      oPictures: [],
      oVideoSteram: [],
      bIsWait: false
    }
  },

  mounted() {
    navigator.mediaDevices.getUserMedia({
      video: true
    }).then(pVideoStream => {
      this.oVideoSteram = pVideoStream
      this.$refs.rVideo.srcObject = pVideoStream
      this.$refs.rVideo.play()
    }).catch(err => console.log(err))
  },

  destroyed() {
    const oTrack = this.oVideoSteram.getTracks()
    oTrack.map(pTrack => pTrack.stop())
  },

  methods: {
    fnCameraCapture() {
      this.bIsWait = true
      const ovideoTrack = this.oVideoStream.getVideoTracks()[0]
      let oCapturedImage = new window.ImageCapture(oVideoTrack)
      const options = {
        imageHeight : 359, imageWidth: 640, fillLightMode : 'off'
      };
      const self = this
      return oCapturedImage.takePhoto(options).then(pImageData => {
        const oTrack = self.oVideoStream.getTracks()
        oTrack.map(pTrack => pTrack.stop())
        console.log('capture' + pImageData.type + ', ' + pImageData.size + 'byte')
        const nID = new Date().toISOString()
        let uploadTask = oStorage.ref('images').child('pic' + nID).put(pImageData)
        uploadTask.on('state_changed' , function(snapshot) {
          let progress = (snapshot.byteTransferred / snapshot.totalBytes) * 100;
          console.log('upload: ' + progress + "% complete", snapshot.state);
        }, function (err) {
          console.log(err);

        }, function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function( downloadURL) {
            console.log('upload URL:' , downloadURL);
            oPicturesinDB.push({
              'url' : downloadURL, 'title' : '', 'info' : '', 'filename': 'pic' + nID
            })
            .then(self.$router.push('/'))
          })
        })
      })
    }
  }
}
</script>

<style >
  .style_video { width: 100%}
</style>