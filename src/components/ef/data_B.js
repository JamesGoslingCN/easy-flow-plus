let dataB = {
    name: '流程B',
    nodeList: [
        {
            id: 'nodeA',
            name: '节点A-不可拖拽',
            type: 'task',
            left: '18px',
            top: '223px',
            ico: 'el-icon-user-solid',
            state: 'success',
            viewOnly: true
        },
        {
            id: 'nodeB',
            type: 'task',
            name: '流程B-节点B',
            left: '351px',
            top: '96px',
            ico: 'el-icon-goods',
            state: 'error'
        },
        {
            id: 'nodeC',
            name: '流程B-节点C',
            type: 'task',
            left: '354px',
            top: '351px',
            ico: 'el-icon-present',
            state: 'warning'
        }, {
            id: 'nodeD',
            name: '流程B-节点D',
            type: 'task',
            left: '723px',
            top: '215px',
            ico: 'el-icon-present',
            state: 'running'
        }
    ],
    lineList: [{
        source: 'nodeA',
        target: 'nodeB',
        condition: '条件A'
    }, {
        source: 'nodeA',
        target: 'nodeC',
        condition: '条件B'
    }, {
        source: 'nodeB',
        target: 'nodeD'
    }, {
        source: 'nodeC',
        target: 'nodeD'
    }
    ]
}

export function getDataB () {
    return dataB
}
