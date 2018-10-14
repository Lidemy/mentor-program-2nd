# 作業

## hw1：CSS 預處理器

自從學會 CSS 預處理器之後，寫 CSS 的複雜度一下子降低了很多，一方面是巢狀 CSS 可以很簡單的實作出來，另一方面是多了變數這個好用的東西。

現在請你把以前寫的 CSS 都用你自己挑的 CSS preprocessor（LESS, SASS, Stylus）來改寫，並且串上 PostCSS 讓它自動幫你加上 prefix。

## hw2：實作出 Stack 與 Queue

請你實作出`Stack`跟`Queue`兩個 Function，讓以下程式碼可以順利執行：
（禁止使用內建函式`push`與`pop`）

``` js
var stack = new Stack()
stack.push(10)
stack.push(5)
console.log(stack.pop()) // 5
console.log(stack.pop()) // 10

var queue = new Queue()
queue.push(1)
queue.push(2)
console.log(queue.pop()) // 1
console.log(queue.pop()) // 2
```
## hw3：Event Loop

在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細的解釋原因。

``` js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```

## hw4：HTTP Cache

請閱讀這篇文章：[循序漸進理解 HTTP Cache 機制](https://blog.techbridge.cc/2017/06/17/cache-introduction/)來理解 HTTP Cache 機制。

## hw5：簡答題

1. CSS 預處理器是什麼？我們可以不用它嗎？
2. 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。
3. Stack 跟 Queue 的差別是什麼？
4. 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來，沒有很完整也行）
