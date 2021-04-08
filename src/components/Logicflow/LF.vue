<template>
  <div class="logic-flow-view">
    <!-- 辅助工具栏 -->
    <Control v-if="lf" :lf="lf" @catData="$_catData"></Control>
    <!-- 节点面板 -->
    <NodePanel :lf="lf"></NodePanel>
    <!-- 画布 -->
    <div id="LF-view"></div>
    <!-- 用户节点自定义操作面板 -->
    <AddPanel
      v-if="showAddPanel"
      class="add-panel"
      :style="addPanelStyle"
      :lf="lf"
      :nodeData="addClickNode"
      @addNodeFinish="hideAddPanel"
    >
    </AddPanel>
    <!-- 属性面板 -->
    <a-drawer title="设置节点属性" :visible="dialogVisible" @close="closeDialog">
      <PropertyDialog
        v-if="dialogVisible"
        :nodeData="clickNode"
        :lf="lf"
        @setPropertiesFinish="closeDialog"
      ></PropertyDialog>
    </a-drawer>
    <!-- 数据查看面板 -->
    <a-modal title="查看数据" v-model="dataVisible" width="50%" okText="复制" @ok="copyValue">
      <DataDialog :graphData="graphData"></DataDialog>
    </a-modal>
  </div>
</template>
<script>
import LogicFlow from '@logicflow/core'
import { Menu, Snapshot, SelectionSelect } from '@logicflow/extension'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/lib/style/index.css'
import NodePanel from './LFComponents/NodePanel'
import AddPanel from './LFComponents/AddPanel'
import Control from './LFComponents/Control'
import PropertyDialog from './PropertySetting/PropertyDialog'
import DataDialog from './LFComponents/DataDialog'

import {
  registerStart,
  registerTask,
  registerDecision,
  registerReplication,
  registerConcurrency,
  registerUser,
  registerEnd,
  registerPush,
  registerDownload,
  registerPolyline,
} from './registerNode'

const demoData = require('./data.json')

export default {
  name: 'LF',
  components: { NodePanel, AddPanel, Control, PropertyDialog, DataDialog },
  data() {
    return {
      lf: null,
      showAddPanel: false,
      addPanelStyle: {
        top: 0,
        left: 0,
      },
      addClickNode: null,
      clickNode: null,
      dialogVisible: false,
      graphData: null,
      dataVisible: false,
    }
  },
  mounted() {
    this.$_initLf()
  },
  methods: {
    $_initLf() {
      // 画布配置
      const config = {
        container: document.querySelector('#LF-view'),
        background: {
          color: '#fff',
        },
        grid: {
          size: 10,
        },
        keyboard: {
          enabled: true,
        },
        guards: {
          beforeClone(data) {
            console.log('beforeClone', data)
            return true
          },
          beforeDelete(data) {
            // 可以根据data数据判断是否允许删除，允许返回true,不允许返回false
            // 文档： http://logic-flow.org/guide/basic/keyboard.html#%E5%A6%82%E4%BD%95%E9%98%BB%E6%AD%A2%E5%88%A0%E9%99%A4%E6%88%96%E8%80%85%E6%8B%B7%E8%B4%9D%E8%A1%8C%E4%B8%BA
            console.log('beforeDelete', data)
            // _this.$message('不允许删除', 'error')
            return true
          },
        },
      }
      // 使用插件
      LogicFlow.use(Menu)
      LogicFlow.use(Snapshot)
      //多选、选区
      LogicFlow.use(SelectionSelect)
      const lf = new LogicFlow({ ...config })
      this.lf = lf
      // 菜单配置文档：http://logic-flow.org/guide/extension/extension-components.html#%E8%8F%9C%E5%8D%95
      Menu.changeMenuItem('reset', {
        nodeMenu: [
          {
            icon: true,
            className: 'lf-menu-delete',
            text: '删除',
            callback(node) {
              lf.deleteNode(node.id)
            },
          },
        ],
      })
      // 设置主题
      lf.setTheme({
        circle: {
          r: 25,
          fill: '#f56141',
          strokeWidth: 1,
        },
        polygon: {
          strokeWidth: 1,
        },
        polyline: {
          strokeWidth: 1,
        },
      })
      this.$_registerNode()
    },
    // 自定义
    $_registerNode() {
      registerStart(this.lf)
      registerTask(this.lf)
      registerDecision(this.lf)
      registerReplication(this.lf, this.clickAddSub, this.mouseDownAddSub)
      registerConcurrency(this.lf, this.clickAddSub, this.mouseDownAddSub)
      registerUser(this.lf)
      registerEnd(this.lf)
      registerPush(this.lf, this.clickPlus, this.mouseDownPlus)
      registerDownload(this.lf)
      registerPolyline(this.lf)
      this.$_render()
    },
    $_render() {
      this.lf.render(demoData)
      this.$_LfEvent()
    },
    $_getData() {
      const data = this.lf.getGraphData()
      console.log(JSON.stringify(data))
    },
    $_LfEvent() {
      this.lf.on('selection:selected', () => {
        this.lf.updateEditConfig({
          stopMoveGraph: false,
          extraConf: {
            openSelectionMode: false,
          },
        })
      })
      this.lf.on('node:click', (data) => {
        console.log('node:click', data)
        this.clickNode = data
        this.dialogVisible = true
      })
      this.lf.on('edge:click', ({ data }) => {
        console.log('edge:click', data)
        this.clickNode = data
        this.dialogVisible = true
      })
      this.lf.on('element:click', () => {
        this.hideAddPanel()
      })
      this.lf.on('blank:click', () => {
        this.hideAddPanel()
      })
      this.lf.on('connection:not-allowed', (data) => {
        this.$message.error(data.msg)
      })
      this.lf.on('node:mousemove', () => {
        console.log('on mousemove')
      })
    },
    clickPlus(e, attributes) {
      e.stopPropagation()
      console.log('clickPlus', e, attributes)
      const { clientX, clientY } = e
      console.log(clientX, clientY)
      this.addPanelStyle.top = clientY - 40 + 'px'
      this.addPanelStyle.left = clientX + 'px'
      this.showAddPanel = true
      this.addClickNode = attributes
    },
    //增加子流程
    clickAddSub(e, attributes) {
      e.stopPropagation()
      console.log('添加子流程事件', e, attributes)
      this.$message.info('添加子流程事件')
    },
    mouseDownAddSub(e, attributes) {
      e.stopPropagation()
      console.log('mouseDownAddSub', e, attributes)
    },
    mouseDownPlus(e, attributes) {
      e.stopPropagation()
      console.log('mouseDownPlus', e, attributes)
    },
    hideAddPanel() {
      this.showAddPanel = false
      this.addPanelStyle.top = 0
      this.addPanelStyle.left = 0
      this.addClickNode = null
    },
    closeDialog() {
      this.dialogVisible = false
    },
    $_catData() {
      this.graphData = this.lf.getGraphData()
      this.dataVisible = true
    },
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
    },
  },
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
.time-plus {
  cursor: pointer;
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
</style>

