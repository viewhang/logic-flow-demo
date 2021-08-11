/**
 * 重复流程节点
 */
export default function registerReplication(lf, clickAddSub, mouseDownAddSub) {
  lf.register('replication', ({ RectNode, RectNodeModel, h }) => {
    class ReplicationNode extends RectNode {
      // 重复流程标题
      getNameLabelShape() {
        const attributes = this.getAttributes()
        const {
          x,
          y
        } = attributes
        return h(
          'text',
          {
            fill: '#000',
            fontSize: 12,
            x: x - 12,
            y: y - 12
          },
          '重复'
        )
      }
      // 添加子流程按钮边框
      getAddSubButtonRect() {
        const attributes = this.getAttributes()
        const {
          x,
          y
        } = attributes
        return h(
          'rect',
          {
            ...attributes,
            x: x - 6,
            y: y + 19,
            strokeWidth: 0,
            class: 'replication-node-sub',
            width: 12,
            height: 12,
            opacity: 0, // 透明，隐藏边框
            // 增加子流程
            onClick: (e) => clickAddSub(e, attributes),
            onMousedown: (e) => mouseDownAddSub(e, attributes),
            onMouseUp: (e) => mouseDownAddSub(e, attributes)
          }
        )
      }
      // 添加子流程按钮
      getAddSubShape() {
        const attributes = this.getAttributes()
        const {
          x, y
        } = attributes
        const fillColor = '#666'
        return h('svg',
          {
            x: x - 6,
            y: y + 20,
            width: 12,
            height: 12,
            viewBox: '0 0 1024 1024',
            class: 'replication-node-sub-svg',
            // 增加子流程
            onClick: (e) => clickAddSub(e, attributes),
            onMousedown: (e) => mouseDownAddSub(e, attributes),
            onMouseUp: (e) => mouseDownAddSub(e, attributes)
          },
          h(
            'path',
            {
              fill: fillColor,
              d: 'm56.32,81.92l71.68,0l0,896l-71.68,0l0,-896z'
            }
          ),
          h(
            'path',
            {
              fill: fillColor,
              d: 'm92.16,92.16m-92.16,0a92.16,92.16 0 1 0 184.32,0a92.16,92.16 0 1 0 -184.32,0z'
            }
          ),
          h(
            'path',
            {
              fill: fillColor,
              d: 'm92.16,522.24m-92.16,0a92.16,92.16 0 1 0 184.32,0a92.16,92.16 0 1 0 -184.32,0z'
            }
          ),
          h(
            'path',
            {
              fill: fillColor,
              d: 'm92.16,931.84m-92.16,0a92.16,92.16 0 1 0 184.32,0a92.16,92.16 0 1 0 -184.32,0z'
            }
          ),
          h(
            'path',
            {
              fill: fillColor,
              d: 'm327.68,71.68l624.64,0c39.58784,0 71.68,32.09216 71.68,71.68l0,61.44c0,39.58784 -32.09216,71.68 -71.68,71.68l-696.32,0l0,-133.12c0,-39.58784 32.09216,-71.68 71.68,-71.68zm0,337.92l112.64,0c39.58784,0 71.68,32.09216 71.68,71.68l0,61.44c0,39.58784 -32.09216,71.68 -71.68,71.68l-184.32,0l0,-133.12c0,-39.58784 32.09216,-71.68 71.68,-71.68zm0,337.92l112.64,0c39.58784,0 71.68,32.09216 71.68,71.68l0,61.44c0,39.58784 -32.09216,71.68 -71.68,71.68l-184.32,0l0,-133.12c0,-39.58784 32.09216,-71.68 71.68,-71.68z'
            }
          ),
          h(
            'path',
            {
              fill: fillColor,
              d: 'm583.68,609.28m66.56,0l307.2,0q66.56,0 66.56,66.56l0,0q0,66.56 -66.56,66.56l-307.2,0q-66.56,0 -66.56,-66.56l0,0q0,-66.56 66.56,-66.56z'
            }
          ),
          h(
            'path',
            {
              fill: fillColor,
              d: 'm737.28,409.6m66.56,0l0,0q66.56,0 66.56,66.56l0,399.36q0,66.56 -66.56,66.56l0,0q-66.56,0 -66.56,-66.56l0,-399.36q0,-66.56 66.56,-66.56z'
            }
          )
        )
      }
      // 边框
      getRect() {
        const attributes = this.getAttributes()
        const {
          x,
          y
        } = attributes
        return h(
          'rect',
          {
            ...attributes,
            x: x - attributes.width / 2,
            y: y - attributes.height / 2,
            stroke: '#a273c2',
            fill: '#a273c2',
            fillOpacity: 0.3,
            rx: 8,
            ry: 8,
            strokeWidth: 1,
            class: 'replication-node'
          }
        )
      }
      getShape() {
        const attributes = this.getAttributes()
        const {
          isHovered
        } = attributes
        // 鼠标悬浮显示增加子流程按钮
        if (isHovered) {
          return h(
            'g',
            {
            },
            [
              this.getRect(),
              this.getNameLabelShape(),
              this.getAddSubButtonRect(),
              this.getAddSubShape()

            ]
          )
        } else {
          return h(
            'g',
            {
            },
            [
              this.getRect(),
              this.getNameLabelShape(),
              this.getAddSubButtonRect(),
              this.getAddSubShape()
            ]
          )
        }
      }
    }
    class ReplicationModel extends RectNodeModel {
      constructor(data, graphModel) {
        data.text = {
          value: (data.text && data.text.value) || '未命名',
          x: data.x,
          y: data.y + 8,
          dragable: false,
          editable: true
        }
        super(data, graphModel)
      }
    }
    return {
      view: ReplicationNode,
      model: ReplicationModel
    }
  })
}
