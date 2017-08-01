---
layout: post
title:  "JavaScript addEventListener 第三个参数"
date:   2017-08-01 18:23:35 +0800
categories: javascript
---

先看一个完整的演示页面代码。

## Code

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>JavaScript addEventListener</title>
  <style>
  .header-container ul {
    padding: 40px;
    background-color: #eee;
  }
  .header-container li {
    padding: 20px;
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header class="header-container" id="header">
    <nav>
      <ul>
        <li><a href="#">nav ul li a</a></li>
      </ul>
    </nav>
  </header>
  <script>
  const header = document.getElementById('header'),
    ul = header.querySelector('ul'),
    li = header.querySelector('li'),
    useCapture = true;
  ul.addEventListener('click', function() {
    console.log(useCapture, 'ul');
  }, useCapture);
  li.addEventListener('click', function() {
    console.log(useCapture, 'li');
  }, useCapture);
  </script>
</body>
</html>
```

## 结果

### 1. useCapture: false（默认值也是false）

输出： 

```javascript
true "ul"
true "li"
```

### 2. useCapture: true

输出：

```javascript
true "li"
true "ul"
```

## 语法

### MDN（Mozilla Developer Network）

> useCapture  可选    
> Boolean，是指在DOM树中，注册了该listener的元素，是否会先于它下方的任何事件目标，接收到该事件。沿着DOM树向上冒泡的事件不会触发被指定为use capture（也就是设为true）的listener。当一个元素嵌套了另一个元素，两个元素都对同一个事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件传播方式。事件传播模式决定了元素以哪个顺序接收事件。进一步的解释可以查看 事件流 及 JavaScript Event order 文档。 如果没有指定， useCapture 默认为 false 。    

### Othree

> useCapture 這個參數就是在控制這時候兩個 click 事件的先後順序。如果是 false ，那就會使用 bubbling，他是從內而外的流程，如果是 true，那就是 capture，和 bubbling 相反是由外而內。capture 和 bubbling，兩個檔案只有差在此一參數不同，可以發現事件的發生順序不一樣了。

### 总(bai)结(hua)

> `useCapture` 参数默认为 `false`，事件执行顺序为 事件冒泡 `bubbling` （由内向外），即本示例中顺序是 `li → ul`；`useCapture` 值为 `true`，事件执行顺序为事件捕捉 `capturing` （由外向内），即本示例中顺序是 `ul → li`。     

事件捕捉与冒泡：[http://javascript.info/bubbling-and-capturing](http://javascript.info/bubbling-and-capturing)

## 来源/参考
[https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)  
[https://blog.othree.net/log/2007/02/06/third-argument-of-addeventlistener/](https://blog.othree.net/log/2007/02/06/third-argument-of-addeventlistener/)


> 转载请注明出处：[http://blog.givebest.cn/javascript/2017/08/01/JavaScript-addEventListener-Third-Parameter.html](http://blog.givebest.cn/javascript/2017/08/01/JavaScript-addEventListener-Third-Parameter.html)

