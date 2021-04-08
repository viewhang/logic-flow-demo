/**
 * 任务节点 
 */
export default function registerTask(lf) {
    lf.register('task', ({ RectNode, RectNodeModel, h }) => {
        class TaskNode extends RectNode {
            //任务标题
            getNameLabelShape() {
                const attributes = this.getAttributes()
                const {
                    x,
                    y,
                } = attributes
                return h(
                    'text',
                    {
                        fontSize: 12,
                        x: x - 12,
                        y: y - 12,
                    },
                    '审批'
                )
            }
            getShape() {
                const attributes = this.getAttributes()
                const {
                    x,
                    y,
                } = attributes
                return h(
                    'g',
                    {
                    },
                    [
                        h(
                            'rect',
                            {
                                ...attributes,
                                x: x - attributes.width / 2,
                                y: y - attributes.height / 2,
                                stroke: '#5eb36c',
                                fill: '#5eb36c',
                                fillOpacity: 0.3,
                                rx: 8,
                                ry: 8,
                                strokeWidth: 1,
                            }
                        ),
                        this.getNameLabelShape(),
                    ]
                )
            }
        }
        class TaskModel extends RectNodeModel {
            constructor(data, graphModel) {
                data.text = {
                    value: (data.text && data.text.value) || '未命名',
                    x: data.x,
                    y: data.y + 8,
                    dragable: false,
                    editable: true,
                }
                super(data, graphModel)
            }

        }
        return {
            view: TaskNode,
            model: TaskModel
        }
    })
}
