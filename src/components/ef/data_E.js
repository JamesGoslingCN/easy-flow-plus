var dataE = {
    name: '流程E，力导图',
    nodeList: [
        {
            id: 'nodeA',
            name: '流程D-节点A',
            type: 'task',
            ico: 'el-icon-user-solid',
            state: 'success'
        },
        {
            id: 'nodeB',
            type: 'task',
            name: '流程D-节点B',
            ico: 'el-icon-goods',
            state: 'error'
        },
        {
            id: 'nodeC',
            name: '流程D-节点C',
            type: 'task',
            ico: 'el-icon-present',
            state: 'warning'
        }, {
            id: 'nodeD',
            name: '流程D-节点D',
            type: 'task',
            ico: 'el-icon-present',
            state: 'running'
        }
    ],
    lineList: [{
        source: 'nodeA',
        target: 'nodeB'
    }, {
        source: 'nodeA',
        target: 'nodeC',
        condition: 'hello'
    }, {
        source: 'nodeB',
        target: 'nodeD'
    }, {
        source: 'nodeC',
        target: 'nodeD'
    }, {
        source: 'nodeC',
        target: 'nodeC'
    }
    ]
}

export function getDataE() {
    return dataE
}
