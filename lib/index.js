'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 获取指定的 querystring 中指定 name 的 value
 * @param {String} name
 * @param {String} querystring
 * @return {String|undefined}
 *
 * query('hello', '?hello=js') 结果是 js
 *
 */
var query = function query(name, querystring) {
  var reg = new RegExp('(?:\\?|&)' + name + '=(.*?)(?:&|$)');
  var ret = reg.exec(querystring) || [];
  return ret[1];
};

/**
 * 序列化对象，就是把对象转成 url 字符串
 * @param {Obj} data
 * @return {String}
 *
 * serialize({hello: 'js', hi: 'test'}) 结果是 ''
 */
var serialize = function serialize(data) {
  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
    return data;
  }
  var url = '?';
  for (var key in data) {
    url += key + '=' + data[key] + '&';
  }
  url = url.match(/\S*(?=&)/)[0];
  return encodeURIComponent(url);
};

/**
 * 根据选择器查找 DOM
 * 就是模拟 $() ，当然，这里返回元素的 DOM 对象即可
 * @param {String} selector
 * @return {DOM|Null}
 */
var $ = function $(selector) {
  var dom = document.querySelector(selector);
  if (dom) {
    return dom;
  } else {
    return null;
  }
};

/**
 * 删除 DOM 节点
 * @param {DOM} node
 * @return {DOM}
 */

var removeNode = function removeNode(node) {
  return node.parentNode.removeChild(node);
};

/**
 * 在 target 节点之后插入 node 节点
 * 类似 $().insertAfter()
 * @param {DOM} node
 * @param {DOM} target
 */
var insertAfter = function insertAfter(node, target) {
  target.parentNode.appendChild(node);
};

/**
 * 添加类名
 * @param {DOM} node
 * @param {String|Array} className
 */
var addClass = function addClass(node, className) {
  if (node.classList.contains(className)) {
    return className;
  } else {
    node.classList.add(className);
    return;
  }
};

/**
 * 移除类名
 * @param {DOM} node
 * @param {String|Array} className
 */
var removeClass = function removeClass(node, className) {
  if (node.classList.contains(className)) {
    node.classList.remove(className);
    return;
  } else {
    return className;
  }
};

/**
 * 获取绝对路径
 * @param {String} url
 * @return {String}
 *
 * getAbsoluteUrl('/jerojiang') => 'http://imweb.io/jerojiang'
 * 在当前页面获取绝对路径，这里要创建 A 元素，测试用例看你们的了
 */
var getAbsoluteUrl = function getAbsoluteUrl(url) {
  var domain = location.href.match(/[a-z:0-9.//]*[?=\/]/);
  return domain + url;
};

/**
 * 防抖动
 * 防抖动函数了啦，有做个这个习题，不清楚回去复习
 */
var debounce = function debounce(callback, time) {
  setTimeout(function () {
    callback('test');
  }, time);
};

/**
 *  根据所以移出数组的某一项
 * @param {Number} index
 * @param {Array} arr
 * @return {Array}
 *
 * removeItemByIndex(1, [1,2,3]) => [1, 3]
 */
var removeItemByIndex = function removeItemByIndex(index, arr) {
  if (arr[index]) {
    return arr.splice(index, 1);
  } else {
    return arr;
  }
};

module.exports = {
  query: query, serialize: serialize, $: $, removeNode: removeNode, insertAfter: insertAfter, addClass: addClass, removeClass: removeClass, getAbsoluteUrl: getAbsoluteUrl, debounce: debounce, removeItemByIndex: removeItemByIndex
};