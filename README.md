# vue-noscroll-layer
弹层禁止滚动,滚动穿透

## Install
```shell
npm install v-no-scroll  -S
```
## Quick Start
``` javascript

在main.js 注册插件 使其成为一个全局指令
import Vue from 'vue'
import noScroll from 'no-scroll-layer'
 Vue.use(noScroll)

// 全局指令 v-noScroll 之后在每个xx.vue 文件中 写法如下
export default {
  data() {
    return {
        // 控制显示弹层
      showLayer: false
    }
  }
}
1. 自身无滚动
<div class="mask"  v-no-scroll="{showLayer}" v-show="showLayer">
    // 写你的结构
</div>

2. 自身有滚动
<div class="mask"  v-no-scroll="{showLayer,parentEl:'scroll-el'}" v-show="showLayer">
    <div id="scroll-el">
        <ul>
          <li></li>
        </ul>
    </div>
</div>
    div.mask 是蒙层
  div.scroll-el 是固定高度的父窗体，ul>li 是滚动体
  要给固定高度的父窗体设置如下样式
  #scroll-el {
    height: 300px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

``` 