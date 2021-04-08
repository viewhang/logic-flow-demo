<template>
  <div class="node-panel">
    <div class="node-item" v-for="item in nodeList" :key="item.text" @mousedown="onDragNode(item)">
      <div class="node-item-icon" :class="item.class"></div>
      <span class="node-label">{{ item.text }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NodePanel',
  props: {
    lf: Object,
  },
  data() {
    return {
      nodeList: [
        {
          text: '开始',
          type: 'start',
          class: 'node-start',
        },
        {
          text: '处理',
          type: 'task',
          class: 'node-task',
        },
        {
          type: 'decision',
          text: '判断',
          class: 'node-decision',
        },
        {
          type: 'replication',
          text: '重复',
          class: 'node-replication',
        },
        {
          type: 'concurrency',
          text: '并行',
          class: 'node-concurrency',
        },
        {
          type: 'end',
          text: '结束',
          class: 'node-end',
        },
      ],
    }
  },
  methods: {
    onDragNode(item) {
      this.lf.dnd.startDrag({
        type: item.type,
        text: item.label,
      })
    },
  },
}
</script>
<style>
.node-panel {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 70px;
  padding: 10px 0;
  background: hsla(0, 0%, 100%, 0.7);
  box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
  border-radius: 6px;
  z-index: 1;
  display: flex;
  flex-direction: column;
}
.node-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  padding: 7px 0;
}
.node-item:hover {
  background: #efefef;
}

.node-label {
  font-size: 12px;
  margin-top: 5px;
  user-select: none;
}
/**开始 */
.node-start {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 2px solid #f56141;
}
/**处理 */
.node-task {
  width: 30px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid #50b36f;
}
/* 判断 */
.node-decision {
  width: 30px;
  height: 30px;
  border: 2px solid #6c96f0;
  transform: rotate(45deg);
}
/* 重复 */
.node-replication {
  width: 30px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid #a573c0;
}
/* 并行 */
.node-concurrency {
  width: 30px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid #939c9d;
}
/* 结束 */
.node-end {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 2px solid #f56141;
}
</style>
