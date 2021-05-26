# one-tooltip
是一个基于vue的简单tooltip组件

``` bash
# install dependencies
npm i one-tooltip

# 全局引入
import oneTooltip from 'one-tooltip'
Vue.use(oneTooltip)

#使用
oneTooltip组件 属性有 1、placement(top、left、right、bottom)显示位置
                    2、content内容文本

#例子
<one-tooltip placement="right" content="提示内容"><div>内容文本</div></one-tooltip>

```