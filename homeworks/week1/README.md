# 作業

## hw1：印出星星
給定 n（1<=n<=30），依照規律印出正確圖形

```
n = 1
*

n = 3
*
*
*

n = 6
*
*
*
*
*
*
```

## hw2：首字母大寫
給定一字串，把第一個字轉成大寫之後回傳，若第一個字不是英文字母則忽略。

```
input: nick
output: Nick

input: Nick
output: Nick

input: ,hello
output: ,hello
```

## hw3：反轉字串
給定一個字串，請輸出反轉之後的樣子（不能使用內建的 `reverse` 函式）

```
input: yoyoyo
output: oyoyoy

input: 1abc2
output: 2bca1

input 1,2,3,2,1
output: 1,2,3,2,1
```

## hw4：印出因數
先幫大家複習一下數學，給定一個數字 n，因數就是所有小於等於 n 又可以被 n 整除的數，所以最明顯的例子就是 1 跟 n，這兩個數一定是 n 的因數。現在請寫出一個函式來印出所有的因數

```
input: 10
output:
1
2
5
10

input: 7
output:
1
7
```

## hw5：自己的函式自己寫
其實仔細思考的話，你會發現那些陣列內建的函式你其實都寫得出來，因此這一題就是要讓你自己動手實作那些函式！

我們要實作的函式有兩個：join 以及 repeat。

join 會接收兩個參數：一個陣列跟一個字串，會在陣列的每個元素中間插入一個字串，最後合起來。

repeat 的話就是輸出重複 n 次之後的字串。

```
join([1, 2, 3], '') => 123
join(["a", "b", "c"], "!") => a!b!c
join(["a", 1, "b", 2, "c", 3], ',') => a,1,b,2,c,3

repeat('a', 5) => aaaaa
repeat('yoyo', 2) => yoyoyoyo
```

## hw6：簡答題
請將答案寫在[hw6.md](hw6.md)。

1. 請解釋後端與前端的差異。
2. 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
3. 請列舉出 5 個 command line 指令並且說明功用。
