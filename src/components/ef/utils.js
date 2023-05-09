// 是否具有该线
export function hasLine(data, source, target) {
    for (let i = 0; i < data.lineList.length; i++) {
        let line = data.lineList[i]
        if (line.source === source && line.target === target) {
            return true
        }
    }
    return false
}

// 是否含有相反的线
export function hashOppositeLine(data, source, target) {
    return hasLine(data, target, source)
}

// 获取连线
export function getConnector(jsp, source, target) {
    let connection = jsp.getConnections({
        source: source,
        target: target
    })[0]
    return connection
}

// 获取唯一标识
export function uuid() {
    return Math.random().toString(36).substr(3, 10)
}
