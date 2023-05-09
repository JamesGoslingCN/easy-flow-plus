# easy-flow

## 演示地址
> 感谢码云平台给了一个免费的Gitee Pages服务, 可能访问有点慢

[演示地址](http://xiaoka2017.gitee.io/easy-flow/#?_blank)

## 效果图

![](https://gitee.com/xiaoka2017/resource/raw/master/easy-flow/2.2.0/1.png)



![](https://gitee.com/xiaoka2017/resource/raw/master/easy-flow/2.3.0/3.jpg)



![](https://gitee.com/xiaoka2017/resource/raw/master/easy-flow/2.2.0/2.png)





## 项目介绍
`easy-flow-plus` 基于VUE+ElementUI+JsPlumb的流程设计器，扩展了easy-flow的功能，通过 vuedraggable 插件来实现节点拖拽。


## 功能介绍
* 支持拖拽添加节点
* 点击线进行设置条件
* 支持给定数据加载流程图
* 支持画布拖拽
* 支持连线样式、锚点、类型自定义覆盖
* 支持力导图

## 更新日志

2023年5月8日
* 更新Docker和Github构建脚本

## 操作说明
* 左侧菜单子节点可以拖拽，将其拖拽到右侧画板中松开鼠标即可添加一个节点
* 节点分为3部分，左边为标识节点的图标，中间节点的描述，右变为节点的状态图标，鼠标从左变图标上可以拖拽出连线，可以连接其他节点，拖动左侧图标以外位置可以改变节点在页面的位置

## 数据格式
``` json

 {
    name: '流程D',
    nodeList: [
        {
            id: 'nodeA',
            name: '流程D-节点A',
            type: 'task',
            left: '18px',
            top: '223px',
            ico: 'el-icon-user-solid',
            state: 'success'
        },
        {
            id: 'nodeB',
            type: 'task',
            name: '流程D-节点B',
            left: '351px',
            top: '96px',
            ico: 'el-icon-goods',
            viewOnly: true,
            state: 'error'
        },
        {
            id: 'nodeC',
            name: '流程D-节点C',
            type: 'task',
            left: '354px',
            top: '351px',
            ico: 'el-icon-present',
            state: 'warning'
        }, {
            id: 'nodeD',
            name: '流程D-节点D',
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
        condition: '直线,自定义线样式,固定锚点',
        connector: 'Straight',
        anchors: ['Top', 'Bottom'],
        paintStyle: {strokeWidth: 2, stroke: '#1879FF'}
    }, {
        source: 'nodeA',
        target: 'nodeC',
        condition: '贝塞尔曲线,固定锚点',
        connector: 'Bezier',
        anchors: ['Bottom', 'Left']
    }, {
        source: 'nodeB',
        target: 'nodeD',
        condition: '默认连线样式,动态锚点'
    }, {
        source: 'nodeC',
        target: 'nodeD',
        condition: '默认连线样式,动态锚点'
    }
    ]
}

```
## data 参数说明
|    参数    |      描述      |
| :--------: | :------------: |
|  name  |     流程图名称      |

## nodeList 参数说明
|    参数    |    必填    |      描述      |      可选值      |
| :--------: | :------------: | ---------- | ---------- |
|  id  |  是  |     标识唯一的节点、可以与业务ID相结合      |           |
|  name  |  是  |   节点名称      |         |
| type | 是 | 节点类型，可以和业务相结合做处理 |  |
|  left  |  是  | 节点在页面上的X坐标，以px结尾  |         |
|  top  |  是  |  节点在页面上的Y坐标，以px结尾 |         |
|  ico  |  是  |   节点显示的图标，标识   |         |
|  state  |  否  |   状态，状态不同右侧展示的图标不同   | success、error、warning、running |
|  viewOnly  |  否  |   是否仅用于浏览，true: 不可拖拽   | true 、false|




## lineList 参数说明
|    参数    |    必填    |      备注      |      可选值      |
| :--------: | :------------: | -------------- | -------------- |
|  from  |  是  |     连线的起始节点的ID      |           |
|  to  |  是  |   连线的终点节点ID      |         |
|  label  |  否  |   连线上的描述信息   |         |
| anchors | 否 | 连线的起始锚点位置，如：["Top","Right"] | ['Top', 'TopCenter', 'TopRight', 'TopLeft', 'Right', 'RightMiddle', 'Bottom', 'BottomCenter', 'BottomRight', 'BottomLeft', 'Left', 'LeftMiddle'], |
| connector | 否 | 连线类型 | StateMachine、Flowchart，Bezier、Straight |

## 如何集成

- 下载源码

- 在自己的vue工程中找到package.json，并引入如下依赖（不用额外引入jsplumb）

  ```js
    "element-ui": "2.9.1",
    "lodash": "4.17.15",
    "vue": "^2.5.2",
    "vue-codemirror": "^4.0.6",
    "vuedraggable": "2.23.0"
  ```

- 将easy-flow/src/components/ef 目录复制到自己工程的一个目录下（如/src/views）

- 修改main.js，引入elementUI和easy-flow样式

  ```js
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import '@/这个为复制后的目录，src就不要写了/ef/index.css'
  Vue.use(ElementUI, {size: 'small'})
  ```


## 启动

``` bash
# 下载工程
git clone  https://github.com/JamesGoslingCN/easy-flow-plus.git

# 安装依赖包
npm install

# 启动
npm run dev

# 访问地址
 http://localhost:8080
```

## 交流群

## 协议
符合项目package.json中使用的插件中规定的协议即可

## 学习资料
| 名称        | 地址                                             | 说明                         |
| ----------- | ------------------------------------------------ | ---------------------------- |
| 后端SDK     | https://gitee.com/xiaoka2017/easy-flow-sdk       | 一个后端数据存储、操作的案例 |
| 学习资料    | https://www.cnblogs.com/mq0036/p/7942139.html    |                              |
| jsplumb官网 | http://jsplumb.github.io/jsplumb/home.html#setup | jsplumb官网api说明           |

