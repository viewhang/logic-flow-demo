export default function registerEnd(lf) {
  lf.register('end', ({ CircleNode, CircleNodeModel, h }) => {
    class EndNode extends CircleNode {
      getLabelShape() {
        const attributes = this.getAttributes()
        const {
          x,
          y
        } = attributes
        return h(
          'text',
          {
            fill: '#000000',
            fontSize: 12,
            x: x - 12,
            y: y + 4,
            width: 50,
            height: 25,
          },
          '结束'
        )
      }
      getShape() {
        const attributes = this.getAttributes()
        const {
          x,
          y,
          r,
          fill,
          stroke,
          strokeWidth
        } = attributes
        return h(
          'g',
          {
          },
          [
            h(
              'circle',
              {
                cx: x,
                cy: y,
                r,
                fill,
                fillOpacity: 0.3,
                stroke: fill,
                strokeWidth
              }
            ),
            this.getLabelShape()
          ]
        )
      }
    }
    class EndModel extends CircleNodeModel {
      constructor(data, graphModel) {
        data.text = {
          value: (data.text && data.text.value) || '',
          x: data.x,
          y: data.y + 35,
          dragable: false,
          editable: false
        }
        super(data, graphModel)
      }
      getConnectedSourceRules() {
        const rules = super.getConnectedSourceRules()
        const notAsSource = {
          message: '结束节点不能作为其他节点的开始',
          validate: () => false
        }
        rules.push(notAsSource)
        return rules
      }
    }
    return {
      view: EndNode,
      model: EndModel
    }
  })
}
