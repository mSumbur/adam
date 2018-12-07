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
防抖动
```
 test('test true', () => {
    const debounce = adam.debounce
    jest.useFakeTimers() // 声明语句，启用jest伪装计时器函数，因为使用了advanceTimersByTime()
    const callback = jest.fn() // 声明语句，使用jest伪装函数
    const createDebounce = debounce(callback, 300)
    expect(callback).not.toBeCalled() // callback还未被调用
    for (let i = 0; i < 11; i++) { // 循环执行createDebounce 11次，每次都在经过299ms时setTimeout被刷新
      createDebounce()
      jest.advanceTimersByTime(299) // 过了299ms
    }
    expect(callback).not.toBeCalled() // callback还未被调用
    jest.advanceTimersByTime(1) // 再过1ms
    expect(callback).toBeCalled() // callback被调用
    expect(callback).toHaveBeenCalledTimes(1) // callback只被调用1次
  })
```

### removeItemByIndex(index, arr)
根据指定索引 (index) 移除 arr[index]
```
adam.removeItemByIndex(0, ['1', '2', '3']) // return ['2', '3']
```