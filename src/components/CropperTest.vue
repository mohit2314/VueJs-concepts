<template>
  <div>
    <div class="img-container">
      <img ref="image" :src="src" crossorigin />
    </div>
    <img :src="destination" class="img-preview" />
    <button @click="cropImage">Cropped Image</button>
    <button @click="zoom(0.1)">Zoom Image</button>
    <button @click="zoom(-0.1)">Zoom out</button>

    <button @click="rotate(30)">rotate in</button>
    <button @click="rotate(-30)">rotate out</button>

    <button @click="move(10, 0)">move right</button>
    <button @click="move(-10, 0)">move left</button>
    <button @click="move(0, -10)">move up</button>
    <button @click="move(0, 10)">move Down</button>
    <button ref="flipX" @click="flipX">Flip X</button>
    <button ref="flipY" @click="flipY">Flip y</button>

    <img :src="cropedImg" class="img-preview" alt="" />
  </div>
</template>

<script>
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
export default {
  name: "ImageCropper",
  data() {
    return {
      cropper: {},
      destination: {},
      image: {},
      cropedImg: "",
    };
  },
  props: {
    src: String,
  },
  mounted() {
    this.image = this.$refs.image;
    this.cropper = new Cropper(this.image, {
      aspectRatio: 1,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();
        this.destination = canvas.toDataURL("image/png");
      },
    });
  },
  methods: {
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      const canvas = this.cropper.getCroppedCanvas();
      this.cropedImg = canvas.toDataURL("image/png");
    },
    zoom(percent) {
      this.cropper.zoom(percent);
    },
    rotate(deg) {
      this.cropper.rotate(deg);
    },
    move(offsetX, offsetY) {
      this.cropper.move(offsetX, offsetY);
    },
    flipX() {
      const dom = this.$refs.flipX;
      let scale = dom.getAttribute("data-scale");
      scale = scale ? -scale : -1;
      this.cropper.scaleX(scale);
      dom.setAttribute("data-scale", scale);
    },
    flipY() {
      const dom = this.$refs.flipY;
      let scale = dom.getAttribute("data-scale");
      scale = scale ? -scale : -1;
      this.cropper.scaleY(scale);
      dom.setAttribute("data-scale", scale);
    },
  },
};
</script>

<style scoped>
.img-container {
  width: 640px;
  height: 480px;
  float: left;
}
.img-preview {
  width: 200px;
  height: 200px;
  float: left;
  margin-left: 10px;
}
</style>