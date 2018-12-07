const base = require('../src');

describe('测试 query 函数', () => {
  test('输入 "hello" 和 "?hello=js" 输出 "js"', () => {
    expect(base.query('hello', '?hello=js')).toBe('js');
  });
  test('输入 "hello" 和 "?hello=js&hi=jsx" 输出 "js"', () => {
    expect(base.query('hello', '?hello=js&hi=jsx')).toBe('js');
  });
  test('输入 "hi" 和 "?hello=js&hi=jsx" 输出 "jsx', () => {
    expect(base.query('hi', '?hello=js&hi=jsx')).toBe('jsx');
  });
  test('输入 "hi" 和 "?hello=js&hi=jsx&name=sumbur" 输出 "jsx', () => {
    expect(base.query('hi', '?hello=js&hi=jsx&name=sumbur')).toBe('jsx');
  });
  test('输入 "hello" 和 "??hello=js&hi=jsx&name=sumbur" 输出 "js"', () => {
    expect(base.query('hello', '??hello=js&hi=jsx&name=sumbur')).toBe('js');
  });
})

describe('测试 serialize 函数', () => {
  test('输入正常对象', () => {
    const testObj = {
      name: 'sumbur',
      age: '20'
    }    
    const decodeURI = decodeURIComponent(base.serialize(testObj));
    expect(decodeURI).toBe('?name=sumbur&age=20');
  })
  test('输入字符串', () => {
    const str = '测试字符串';
    expect(str).toBe(str);
  })
})

describe('测试 $ 函数', () => {
  test('输入存在的 DOM', () => {
    document.body.innerHTML = '<div class="test-dom">test</div>';
    const testDom = base.$('.test-dom');
    // 测试 innerText === undefined
    expect(testDom.innerHTML).toBe('test');
  })
  test('输入不存在的 DOM', () => {
    expect(base.$('.test')).toBeNull();
  })
})

describe('测试 removeNode 函数', () => {
  test('删除存在节点', () => {
    document.body.innerHTML = '<div id="test-dom"></div>';
    const testDom = document.getElementById('test-dom'); 
    base.removeNode(testDom);
    expect(document.getElementById('test-dom')).toBeNull();
  })
})

describe('测试 insertAfter 函数', () => {
  test('测试插入节点', () => {
    const node = document.createElement('div');
    node.innerHTML = 'test';
    base.insertAfter(node, document.body);
    expect(document.querySelector('div').innerHTML).toBe('test');
  })
})

describe('测试 addClass 函数', () => {
  test('添加新类名', () => {
    document.body.innerHTML = '<div id="test">test</div>';
    const testDom = document.getElementById('test');
    base.addClass(testDom, 'test');
    expect(document.querySelector('.test').innerHTML).toBe('test');
  })
  test('添加已有类名', () => {
    document.body.innerHTML = '<div class="test">test</div>';
    const testDom = document.querySelector('.test');
    expect(base.addClass(testDom, 'test')).toBe('test');
  })
})

describe('测试 removeClass 函数', () => {
  test('删除已有类名', () => {
    document.body.innerHTML = '<div class="test">test</div>';
    const testDom = document.querySelector('.test');
    base.removeClass(testDom, 'test');
    expect(document.querySelector('.test')).toBeNull();
  })
  test('删除没有的类', () => {
    document.body.innerHTML = '<div class="test">test</div>';
    const testDom = document.querySelector('.test');
    expect(base.removeClass(testDom, 'testClass')).toBe('testClass');
  })
})

describe('测试 getAbsoluteUrl 函数', () => {
  test('获取绝对路径', () => {
    document.location.href = '/';
    const url = base.getAbsoluteUrl('sumbur');
    expect(url).toBe('http://localhost/sumbur');
  })
})

describe('测试 debounce 函数', () => {
  test('测试异步流程', (done) => {
    base.debounce((res) => {
      expect(res).toBe('test');
      done();
    }, 100);
  })
})

describe('测试 removeByInde 函数', () => {
  test('删除存在索引', () => {
    const arr = ['1','2','3'];
    expect(base.removeItemByIndex(0, arr)).toEqual(['1']);
  });
  test('删除不存在的索引', () => {
    const arr = ['1','2','3'];
    expect(base.removeItemByIndex(3, arr)).toEqual(['1','2','3']);
  })
})