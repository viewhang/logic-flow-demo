/**
 * 判断节点
 */
export default function registerDecision(lf) {
    lf.register('decision', ({ PolygonNode, PolygonNodeModel, h }) => {
        class DecisionNode extends PolygonNode {
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
                        fill: '#000',
                        fontSize: 12,
                        x: x - 12,
                        y: y - 12,
                    },
                    '判断'
                )
            };
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
                            'polygon',
                            {
                                fill: '#7397f3',
                                stroke: '#7397f3',
                                fillOpacity: 0.3,
                                points: [
                                    [x - 50, y],
                                    [x, y + 50],
                                    [x + 50, y],
                                    [x, y - 50],
                                ],
                                strokeWidth: 1,
                            }
                        ),
                        this.getNameLabelShape(),
                    ]
                )
            }
        }
        class DecisionModel extends PolygonNodeModel {
            constructor(data, graphModel) {
                data.text =
                {
                    value: (data.text && data.text.value) || '未命名',
                    x: data.x,
                    y: data.y + 12,
                    dragable: true,
                    editable: true,
                }
                super(data, graphModel)
            }

        }
        return {
            view: DecisionNode,
            model: DecisionModel
        }
    })
}
