# adam-func

这个项目拥有使用频率非常高的几个函数
[github 地址](https://github.com/mSumbur/adam)

## 安装
```
$ npm install -D adam-func
```

## 使用
```
const adam = require('adam-func')
```

## 函数
### query(name, querystring)
获取指定的 querystring 中指定 name 的 value
```
adam.query('name', '?name=js') // return 'js'
```

### serialize(data)
序列化对象，把对象转成 url 字符串
```
adam.serialize({hello: 'js', hi: 'jsx'}) // return '?hello=js&hello=jsx'
```

### $(selector)
根据选择器查找 DOM
```
adam.$(selector) // return {DOM|Null}
```

### removeNode(node)
输出 DOM 节点
```
adam.removeNode(node) 
```

### insertAfter(node)
在 target 节点之后插入 node 节点
```
adam.insertAfter(node, target) 
```

### addClass(node, className)
添加指定类名
```
adam.addClass(node, className) 
```

### removeClass(node, className)
删除类名
```
adam.removeClass(node, className) 
```

### getAbsoluteUrl(url)
获取绝对路径
```
adam.getAbsoluteUrl('/adam-func') //return 'https://github.com/author-name/adam-func'
```

### debounce(callback, time)
防抖动, 指定时间后执行函数
```
adam.debounce(() => {
  console.log('work')
}, 1000)    

```

### removeItemByIndex(index, arr)
根据指定索引 (index) 移除 arr[index]
```
adam.removeItemByIndex(0, ['1', '2', '3']) // return ['2', '3']
```