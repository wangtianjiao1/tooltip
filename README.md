# tooltip
是一个基于vue的简单tooltip组件
## Build Setup

``` bash
# install dependencies
npm i mine-tooltip

# 注册
import tooltip from 'mine-tooltip'
Vue.use(tooltip)

#使用
tooltip 属性有 1、placement(top、left、right、bottom)显示位置
              2、content内容文本

#例子
<tooltip placement="right" content="提示内容">自定义内容</tooltip>

```