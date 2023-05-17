let dataA = {
    name: '流程A',
    nodeList: [
        {
            id: 'nodeA',
            name: '开始',
            type: 'start',
            left: '26px',
            top: '161px',
            ico: 'el-icon-caret-right'
        },
        {
            id: 'nodeB',
            name: '流程A-节点B',
            type: 'task',
            left: '340px',
            top: '161px',
            ico: 'el-icon-goods'
        },
        {
            id: 'nodeC',
            name: '结束',
            type: 'end',
            left: '739px',
            top: '161px',
            ico: 'el-icon-finished'
        }
    ],
    lineList: [{
        source: 'nodeA',
        target: 'nodeB'
    }, {
        source: 'nodeB',
        target: 'nodeC'
    }]
}

export function getDataA () {
    return dataA
}
