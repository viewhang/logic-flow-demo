<template>
  <div class="logic-flow-view">
    <!-- 辅助工具栏 -->
    <Control v-if="lf" :lf="lf" @catData="catData" />
    <!-- 节点面板 -->
    <NodePanel :lf="lf" />
    <!-- 画布 -->
    <div id="LF-view" />
    <!-- 属性面板 -->
    <a-drawer
      title="设置节点属性"
      :visible="dialogVisible"
      width="300"
      @close="closeDialog"
    >
      <PropertyDialog
        v-if="dialogVisible"
        :node-data="clickNode"
        :lf="lf"
        @setPropertiesFinish="closeDialog"
      />
    </a-drawer>
    <!-- 数据查看面板 -->
    <a-modal
      v-model="dataVisible"
      title="查看数据"
      width="50%"
      ok-text="复制"
      @ok="copyValue"
    >
      <DataDialog :graph-data="graphData" />
    </a-modal>
  </div>
</template>
<script>
import LogicFlow from '@logicflow/core'
import { Menu, Snapshot, SelectionSelect, MiniMap, NodeResize } from '@logicflow/extension'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/lib/style/index.css'
import NodePanel from './LFComponents/NodePanel'
import Control from './LFComponents/Control'
import PropertyDialog from './PropertySetting/PropertyDialog'
import DataDialog from './LFComponents/DataDialog'

import {
  registerStart,
  registerTask,
  registerDecision,
  registerReplication,
  registerConcurrency,
  registerEnd
} from './registerNode'

const demoData = require('./data.json')

export default {
  name: 'LF',
  components: { NodePanel, Control, PropertyDialog, DataDialog },
  data() {
    return {
      lf: null,

      addClickNode: null,
      clickNode: null,
      dialogVisible: false,
      graphData: null,
      dataVisible: false
    }
  },
  mounted() {
    this.initLf()
  },
  methods: {
    initLf() {
      // 画布配置
      const config = {
        container: document.querySelector('#LF-view'),
        background: {
          color: '#fff'
        },
        grid: {
          size: 10
        },
        keyboard: {
          enabled: true
        },
        guards: { }
      }
      // 使用插件
      LogicFlow.use(Menu)
      LogicFlow.use(MiniMap)
      LogicFlow.use(Snapshot)
      // 多选、选区
      LogicFlow.use(SelectionSelect)
      // 节点缩放
      LogicFlow.use(NodeResize)
      const lf = new LogicFlow({ ...config })
      this.lf = lf
      // 菜单配置文档：http://logic-flow.org/guide/extension/extension-components.html#%E8%8F%9C%E5%8D%95
      lf.setMenuConfig({
        nodeMenu: [
          {
            icon: true,
            className: 'lf-menu-delete',
            text: '删除',
            callback(node) {
              lf.deleteNode(node.id)
            }
          }
        ], // 覆盖默认的节点右键菜单
        // edgeMenu: false, // 删除默认的边右键菜单
        graphMenu: [] // 覆盖默认的边右键菜单，与false表现一样
      })

      // 设置主题
      lf.setTheme({
        circle: {
          r: 25,
          fill: '#f56141',
          strokeWidth: 1
        },
        polygon: {
          strokeWidth: 1
        },
        polyline: {
          strokeWidth: 1
        }
      })
      this.registerNode()
      MiniMap.show()
    },
    // 自定义
    registerNode() {
      registerStart(this.lf)
      registerTask(this.lf)
      registerDecision(this.lf)
      registerReplication(this.lf, this.clickAddSub, this.mouseDownAddSub)
      registerConcurrency(this.lf, this.clickAddSub, this.mouseDownAddSub)
      registerEnd(this.lf)
      this.render()
    },
    render() {
      this.lf.render(demoData)
      this.LfEvent()
    },
    getData() {
      const data = this.lf.getGraphData()
      console.log(JSON.stringify(data))
    },
    LfEvent() {
      this.lf.on('selection:selected', () => {
        this.lf.updateEditConfig({
          stopMoveGraph: false,
          extraConf: {
            openSelectionMode: false
          }
        })
      })
      // 点击节点，设置属性
      this.lf.on('node:click', (data) => {
        console.log('node:click', data.data)
        this.clickNode = data.data
        if (this.clickNode.type !== 'start' && this.clickNode.type !== 'end') { this.dialogVisible = true }
      })
      // 点击连线，设置属性
      this.lf.on('edge:click', ({ data }) => {
        this.clickNode = data
        this.dialogVisible = true
      })
      this.lf.on('connection:not-allowed', (data) => {
        this.$message.error(data.msg)
      })
    },
    // 增加子流程
    clickAddSub(e, attributes) {
      e.stopPropagation()
      console.log('添加子流程事件', e, attributes)
      this.$message.info('添加子流程事件')
    },
    mouseDownAddSub(e, attributes) {
      e.stopPropagation()
      console.log('mouseDownAddSub', e, attributes)
    },
    closeDialog() {
      this.dialogVisible = false
    },
    catData() {
      this.graphData = this.lf.getGraphData()
      this.dataVisible = true
    },
    // 复制json数据
    copyValue() {
      try {
        const input = document.createElement('input')
        document.body.appendChild(input)
        input.setAttribute('value', JSON.stringify(this.graphData))
        input.select()
        if (document.execCommand('copy')) {
          document.execCommand('copy')
          this.$message.success('复制成功')
        }
        document.body.removeChild(input)
      } catch (err) {
        this.$message.error(err.message)
      }
    }
  }
}
</script>
<style>
.logic-flow-view {
  height: 71vh;
  position: relative;
}

#LF-view {
  /* width: calc(100% - 100px); */
  height: 100%;
  outline: none;
  /* margin-left: 50px; */
}
.add-panel {
  position: absolute;
  z-index: 11;
  background-color: white;
  padding: 10px 5px;
}

.replication-node-sub {
  cursor: pointer;
}
.replication-node-sub-svg {
  cursor: pointer;
}

.replication-node-sub:hover + .replication-node-sub-svg path {
  fill: #4a6ae4;
}

.replication-node-sub-svg:hover path {
  fill: #4a6ae4;
}

.lf-mini-map {
  bottom: 20px;
  right: 20px;
  border-radius: 6px;
  border: 0;
  background: hsla(0, 0%, 100%, 0.7);
  box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
}
.lf-mini-map-header {
  border: 0;
  background: hsla(0, 0%, 100%, 0.7);
  box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
}
</style>

