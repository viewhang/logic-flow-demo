<template>
  <div class="control-bar">
    <div class="control-item" @click="openSelection">
      <a-icon type="select" />
      <span class="control-text">选区</span>
    </div>
    <div class="control-item" @click="onZoomIn">
      <a-icon type="zoom-in" />
      <span class="control-text">放大</span>
    </div>
    <div class="control-item" @click="onZoomOut">
      <a-icon type="zoom-out" />
      <span class="control-text">缩小</span>
    </div>
    <div class="control-item" @click="onReset">
      <a-icon type="pic-center" />
      <span class="control-text">自适应</span>
    </div>
    <div
      class="control-item"
      @click="onUndo"
      :style="undoDisable ? 'cursor: not-allowed;color: #7d7d7d;background:hsla(0, 0%, 100%, 0.7)' : ''"
    >
      <a-icon type="left" />
      <span class="control-text">上一步</span>
    </div>
    <div
      class="control-item"
      @click="onRedo"
      :style="redoDisable ? 'cursor: not-allowed;color: #7d7d7d;background:hsla(0, 0%, 100%, 0.7)' : ''"
    >
      <a-icon type="right" />
      <span class="control-text">下一步</span>
    </div>
    <div class="control-item" @click="onDownload">
      <a-icon type="file-image" />
      <span class="control-text">导出图片</span>
    </div>
    <div class="control-item" @click="onCatData">
      <a-icon type="eye" />
      <span class="control-text">查看</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Control',
  props: {
    lf: Object || String,
  },
  data() {
    return {
      undoDisable: true,
      redoDisable: true,
      graphData: null,
      dataVisible: false,
    }
  },
  mounted() {
    this.lf.on('history:change', ({ data: { undoAble, redoAble } }) => {
      this.undoDisable = !undoAble
      this.redoDisable = !redoAble
    })
  },
  methods: {
    openSelection() {
      this.lf.updateEditConfig({
        stopMoveGraph: true,
        extraConf: {
          openSelectionMode: true,
        },
      })
    },
    onZoomIn() {
      this.lf.zoom(true)
    },
    onZoomOut() {
      this.lf.zoom(false)
    },
    onReset() {
      this.lf.resetZoom()
      this.lf.resetTranslate()
    },
    onUndo() {
      if (this.undoDisable) return
      this.lf.undo()
    },
    onRedo() {
      if (this.redoDisable) return
      this.lf.redo()
    },
    onDownload() {
      this.lf.getSnapshot()
    },
    onCatData() {
      this.$emit('catData')
    },
  },
}
</script>
<style scoped>
.control-bar {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  padding: 0 15px;
  border-radius: 6px;
  margin: 5px;
  display: flex;
  background: hsla(0, 0%, 100%, 0.7);
  box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
}
.control-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  padding: 5px 10px;
}
.control-item:hover {
  background: #efefef;
}
.control-item i {
  display: inline-block;
  vertical-align: middle;
  background-size: cover;
  font-size: 16px;
}
.control-text {
  margin-top: 5px;
  font-size: 12px;
  /*不可选中*/
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
</style>
