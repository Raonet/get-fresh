<template>
  <div class="product-card">
    <el-button  class="all-screen" @click="allFull()">全屏</el-button>
    <iframe :src="'http://localhost:8081/' + title" :class="full ? 'full-iframe' :'iframe-card'" style="border:none;"></iframe>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      full: false,
    }
  },
  created() {
    console.log(this.title);
  },
  methods: {
    allFull() {
      this.full = !this.full;
    }
  }
})
</script>

<style lang="scss" scoped>
.product-card {
  padding: 24px 20px 12px 16px;
  margin: 0 12px 12px 12px;
  border: 1px solid #ececf2;
  border-radius: 12px;
  height: 199px;
  position: relative;
}
.all-screen {
  position: absolute;
  right: 24px;
  top: 24px;
}
.iframe-card {
  width: 100%;
  height: 100%;
}
.full-iframe {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
}
</style>
