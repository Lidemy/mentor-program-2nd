# 程式導師實驗計畫第二期

## 這是什麼

[程式導師實驗計畫第二期](https://medium.com/hulis-blog/mentor-program-s2-f876c4e13d3b)是一個為期四個月的計畫，要求學生全程參與（每週至少付出四十小時），希望能在結業時培養出合格的（意思就是找得到工作）的工程師。

## 課程目標

### 綜合能力
1. 具有找資料的能力，能夠知道如何找到相關資訊
2. 具有分析問題的能力，能夠快速定位問題
3. 知道如何解決問題，包括但不限於拆解問題、簡化問題、轉化問題
4. 解決問題後能夠重新歸納並整理

### 工具能力

1. 後端：知道後端原理，知道什麼是資料庫、server，可以寫出簡單的網站並且自己部署
2. 前端：知道前端原理，HTML、CSS、JavaScript，知道 Ajax 以及如何與後端串接
3. 資安：基本資安概念，SQL Injection、XSS、CSRF

## 課程規則

1.根據課程規則，必須要報告每日進度，其實主要不是給我看的，是給你們自己看的，可以順便整理一下自己昨天學過哪些東西以及今天預計要學哪些東西，詳細規則請參考：[程式導師實驗計畫第二期每日任務](https://github.com/Lidemy/mentor-daily-report)。
 
2.有任何意見回饋或是課程相關問題，都可以直接私訊導師（@huli）討論，但比較建議的方法是去[ Lidemy 討論區](https://github.com/Lidemy/forum)開一個 Issue 來問。

3.請在 GitHub 開一個 repository，把 Issue 頁面當作 blog 紀錄心得，順便練習 Markdown 語法，可參考[簡單範例](https://github.com/Lidemy/blog-example)或是[第一期學生的心得記錄](https://github.com/Lidemy/mentor-program-xu3cl40122/issues)。


## 課程進行方式

每週一、四晚上九點進行直播教學，其餘時間可利用 slack 群組隨時發問。每次教學時間約為一小時至兩小時。

週一上半場會講解上週的作業以及幫上週做個總結，下半場會把這週的課程內容大概講過一遍，而學生利用週二以及週三自學並且嘗試練習題目。

週四會總結大家這兩天以來的問題一併回答，並且重新把課程內容再講過一遍（或是補完週一上不完的）。

## 課程大綱

從 2018/09/03 至 2019/01/14	，為期四個月的課程，一共約十九週。每週的開始為禮拜一，結束為禮拜日。

### 第一週（09/03 ~ 09/09）：程式基礎（上）

大致介紹整個計畫以及帶學生看過一次課程大綱，接著說明整體架構，介紹各種不同工程師職位所負責的工作內容並著重在網頁工程師的介紹。

Mindset 建立：

1. 不要害怕問問題，每個問題都值得被提出來，你的問題可能也是其他人的問題
2. 問問題前應該要自己查詢資料（有些很難查的直接問也可以）
3. 你有老師讓你盡量問，反正問就對了，有錯的話我會提醒你
4. 重點是「目的」，而不是「手段」，持續問為什麼為什麼為什麼為什麼

建置基礎環境，例如說 command line tool、Git 以及 Node.js。

複習程式基礎，像是變數、陣列、迴圈、判斷式以及函式（以 ES5 為例）。

學會如何交作業。

[HW1 作業連結](/homeworks/week1)

#### 目標：

- [ ] 知道程式如何執行
- [ ] 了解寫程式的本質只是一行行的指令
- [ ] 了解前端與後端的區別
- [ ] 能說出從發出一個 request 到接收 response 中間發生的事
- [ ] 了解不同載具的差異（Desktop、Mobile、Web）
- [ ] 了解基本的 command line 指令
- [ ] 知道 Git 在做什麼
- [ ] 知道 add、commit、push、pull 等基本 Git 指令

### 第二週（09/10 ~ 09/16）：程式基礎（下）

根據上一期的經驗，在一開始的程式基礎培養一週是不夠的，所以這一期特地多留了一週來加強程式基礎。在這一週裡面我們會延伸上一週的內容，並且多講一些有關於 ES6 的語法。

介紹常用內建函式如 replace、indexOf、split、map、filter、join、parseInt 以及 Math 等等。

也會教大家寫簡單的 unit test，並且自己寫 test case 檢驗自己的函式。

[HW2 作業連結](/homeworks/week2)

#### 目標：

- [ ] 了解常用內建函式
- [ ] 熟悉程式語法並解決基礎問題
- [ ] 知道什麼是 unit test
- [ ] 知道如何寫測試
- [ ] 知道如何測試 function

### 第三週（09/17 ~ 09/23）：前端基礎（上）

本週將會正式進入到前端課程的領域，開始用 HTML 與 CSS 打造出基本的網頁，並且利用 media query 實現簡單的 RWD（Responsive Web Design）。

HTML 的部分就簡單帶過幾個常見的 tag，帶到 head 的一些屬性跟設定，也會講到跟 SEO 有關的一些 tag（title, description, json ld...）。

主要會著重在 CSS 的部分，並且讓大家多多練習。

也可以先看一下這兩篇文章（很多地方你會看不懂，但沒關係）先培養一下對前端的感覺，等幾週過後當我們學得越來越多，再看一次會有完全不同的感受：[零基礎的小明要如何成為前端工程師？](https://medium.com/hulis-blog/frontend-engineer-guide-297821512f4e)、[跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://medium.com/@hulitw/introduction-mvc-spa-and-ssr-545c941669e9)

[HW3 作業連結](/homeworks/week3)

#### 目標：

- [ ] 知道 HTML 是什麼
- [ ] 知道 CSS 是什麼
- [ ] 知道 inline、block 跟 inline-block 的區別
- [ ] 知道什麼是 box model
- [ ] 知道 position 的所有屬性及其差別
- [ ] 知道 :hover, :before, :after
- [ ] 知道 :nth-child
- [ ] 熟悉 CSS selector

### 第四週（09/24 ~ 09/30）：前端基礎（中）

這一週將會進入到 JavaScript，讓網頁變得有互動性，並結合 `<form>` 做表單驗證，或是讓大家寫出簡單的網頁應用程式。

除此之外，也會在這週講 API 串接，讓大家對什麼是 API 有基本的概念，並且實作 Ajax。

相關學習資源：

1. [輕鬆理解 Ajax 與跨來源請求](https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/)
2. [DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)
3. [RESTful API Design by TritonHo](https://github.com/TritonHo/slides/blob/master/Taipei%202016-04%20talk/RESTful%20API%20Design-tw-2.1.pdf)


[HW4 作業連結](/homeworks/week4)

#### 目標：

- [ ] 知道 JavaScript 是什麼
- [ ] 知道 JavaScript 跟 Java 的關係
- [ ] 知道 DOM 是什麼
- [ ] 知道如何用 JavaScript 操控 DOM 物件
- [ ] 知道什麼是 API
- [ ] 知道什麼是 Ajax
- [ ] 知道如何存取跨網域的資源（CORS）
- [ ] 知道什麼是 JSON
- [ ] 知道什麼是 JSONP 及其原理

### 第五週（10/01 ~ 10/07）：後端基礎（上）

前端基礎打得差不多以後，就要進入後端的課程，這次課程會以 PHP 為主要的語言，Node.js 為輔助。

這週的課程會講解 PHP 基本觀念、語法，並且教大家安裝設定 MySQL，寫出簡單的 CRUD 應用。

相關學習資源：

1. [第一正規化(First Normal Form, 1NF)](https://matthung0807.blogspot.com/2017/11/first-normal-form-1nf.html)
2. 

[HW5 作業連結](/homeworks/week5)

#### 目標：

- [ ] 知道 PHP 是什麼
- [ ] 知道前端與後端的差別
- [ ] 知道什麼是資料庫
- [ ] 了解基本 SQL 語法
- [ ] 寫出基本 CRUD 應用

### 第六週（10/08 ~ 10/14）：後端基礎（中）

這週會延續之前的章節，打造出一個比較完整的產品，一步步把後端變得更複雜一點，並且加強會員系統、權限管理等等。

延伸閱讀：[讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)


[HW6 作業連結](/homeworks/week6)

#### 目標：

- [ ] 知道什麼是 Session
- [ ] 知道什麼是 Cookie
- [ ] 知道 Session 與 Cookie 的差別
- [ ] 知道雜湊演算法原理以及應用
- [ ] 知道什麼是 SQL Injection 以及如何防範
- [ ] 知道什麼是 XSS 以及如何防範
- [ ] 知道什麼是 CSRF 以及如何防範


### 第七週（10/15 ~ 10/21）：前端基礎（下）

首先帶大家串接之前自己寫出來的 API，把前端介面用 Ajax 改寫，使網頁互動性變得更高。讓大家熟悉 jQuery，把現有應用用 jQuery 改寫一次。

版面的部分則利用 Bootstrap 搭配 Bootswatch 讓介面變得美觀。利用網格系統實作 RWD。

也會講到 Promise 與 Fetch，帶大家認識比較新的 Web API。

[HW7 作業連結](/homeworks/week7)

#### 目標：

- [ ] 知道 jQuery 是做什麼的
- [ ] 知道 jQuery 與 vanilla js 的差別
- [ ] 知道如何與自己寫的 API 串接
- [ ] 知道什麼是 Bootstrap
- [ ] 知道 Bootstrap 原理及如何應用
- [ ] 知道什麼是網格系統以及如何應用在 RWD
- [ ] 知道什麼是 Promise
- [ ] 知道如何使用 Fetch

### 第八週（10/22 ~ 10/28）：後端基礎（下）

有了自己的前後端程式之後，就可以開始來部署了。這週的重點會放在帶大家直接去買主機（AWS、Digital Ocean、Linode），並且了解如何連上主機。

也會讓大家購買自己的網域，理解如何將網域以及主機串連起來，讓大家可以連線到你的網站。

在這個章節也會讓大家理解後端基本架構（NAT、Load balancer、DB replication 等等）

最後也會補齊跟資料庫的一些知識，像是 ACID、Transaction、View 以及 Stored procedure。

這邊有一份參考某間公司面試考題的[綜合能力測驗](http://mentor-program.co/huli/game/index.php)，還滿有趣的，主要是測驗前八週的基礎，如果你前八週都 ok 的話，相信你一定能夠破關！

這週也要特別感謝 [gandi](https://www.gandi.net/) 連續兩期全額贊助了學生購買網域的費用，在這邊特此感謝。

相關學習資源：

1. [MySQL 超新手入門（11）Views](http://www.codedata.com.tw/database/mysql-tutorial-11-views/)
2. [MySQL Views](http://www.mysqltutorial.org/mysql-views-tutorial.aspx)
3. [MySQL 超新手入門（13）Stored Routines 入門](http://www.codedata.com.tw/database/mysql-tutorial-13-stored-routines/)
4. [只要說「我要下午茶！」——什麼是資料庫預存程序？](http://www.newtype.com.tw/aw/Article_ShareDetail.aspx?UniqueID=3)
5. [MySQL Stored Procedure](http://www.mysqltutorial.org/mysql-stored-procedure-tutorial.aspx)
6. [MySQL 超新手入門（16）Triggers](http://www.codedata.com.tw/database/mysql-tutorial-16-triggers/)
7. [MySQL Triggers](http://www.mysqltutorial.org/mysql-triggers.aspx)
8. [跟 Trigger 與 View 相關的簡報 by TritonHo](https://github.com/TritonHo/slides/blob/master/internal-talk/internal_talk1.pdf)
9. [跟 ACID 有關的簡報 by TritonHo](https://github.com/TritonHo/slides/blob/master/Taipei%202018-06%20talk/lesson0.pdf)
10. [MySQL CREATE INDEX](http://www.mysqltutorial.org/mysql-index/mysql-create-index/)
11. Stored procedure 相關討論：[討論一](https://www.facebook.com/groups/616369245163622/permalink/1315254285275111/)、[討論二](https://www.facebook.com/groups/616369245163622/permalink/1316314398502433/)、[討論三](https://www.facebook.com/groups/616369245163622/permalink/1315406481926558/)、[討論四](https://www.facebook.com/yftzeng.tw/posts/10209307179835921)

[HW8 作業連結](/homeworks/week8)

#### 目標：

- [ ] 了解後端架構
- [ ] 知道虛擬空間、虛擬主機以及實體主機的差別
- [ ] 知道什麼是網域
- [ ] 知道如何設定網域以及原理
- [ ] 知道如何用 SSH 遠端連線到自己的主機
- [ ] 知道如何部署應用程式
- [ ] 知道什麼是 No SQL
- [ ] 知道什麼是 Transaction 與 lock
- [ ] 知道資料庫的 ACID
- [ ] 知道什麼是資料庫的 View
- [ ] 知道什麼是 Stored procedure
- [ ] 知道資料庫的 Trigger 以及使用時機

### 第九週（10/29 ~ 11/04）：前端中階（上）

在被 CSS 折磨這麼久之後，終於有機會用程式化的方法來撰寫 CSS，這週將介紹幾個不同的 CSS preprocessor（LESS, SASS, Stylus），讓學生自行選擇看順眼的並且練習，把之前的 CSS 都改寫。

也會介紹到 postcss，讓 CSS 變得更簡單。

除此之外，這週也會介紹到基本的資料結構 stack 與 queue，JavaScript 的 Event Loop 機制以及 Cache 相關的說明。

這週的第一個重點是 CSS 預處理器，第二個重點就是 JavaScript 的一些重要基礎：什麼是 this、execution context、prototype 等等。

[HW9 作業連結](/homeworks/week9)

延伸閱讀：[該來理解 JavaScript 的原型鍊了](https://blog.techbridge.cc/2017/04/22/javascript-prototype/)、[解读ECMAScript[1]——执行环境、作用域及闭包](http://www.cnblogs.com/leoo2sk/archive/2010/12/19/ecmascript-scope.html)、[JS 作用域](https://github.com/nightn/front-end-plan/blob/master/js/js-scope.md)

#### 目標：

- [ ] 了解 CSS 預處理器的目的以及原理
- [ ] 知道 postcss 是什麼
- [ ] 了解什麼是 Cache
- [ ] 知道 HTTP Cache 的原理以及相關 Header
- [ ] 知道什麼是 Stack
- [ ] 知道什麼是 Queue
- [ ] 知道 Event Loop 的運作方式
- [ ] 知道 CSS Selector 權重的計算方式
- [ ] 對 this、exectuion context、prototype 有最基礎的理解

### 第十週（11/05 ~ 11/11）：前端中階（下）

這週將學習把工作自動化，利用 gulp 管理工作流程，避免繁瑣的手動操作。

也會講到 Webpack 誕生的理由以及模組化的 JavaScript 開發，讓學生理解為何需要使用 Webpack。

除此之外也會講到一些與 CSS 相關的優化小技巧，例如說針對圖片做優化的 CSS Sprites 或是 Data URI，或是 JavaScript 與 CSS 的 uglify、minify 等等。

最後也會用跟以往不太一樣的模式，做出一個簡單的 todo list。

[HW10 作業連結](/homeworks/week10)

#### 目標：

- [ ] 了解 gulp 的目的以及原理
- [ ] 了解 webpack 的目的以及原理
- [ ] 熟悉如何使用 webpack 進行模組化開發
- [ ] 熟悉如何使用 gulp 建構自動化工作流程
- [ ] 能夠快速打造出基礎環境
- [ ] 知道 CSS 優化的一些小技巧

### 第十一週（11/12 ~ 11/18）：後端框架（上）

這一週正式進入後端框架的領域，會帶大家上最基礎的 Express，熟悉後端框架的各個元素。

[HW11 作業連結](/homeworks/week11)

#### 目標：

- [ ] 了解一般後端框架的各個元素
- [ ] 了解 Route 以及 MVC
- [ ] 了解什麼是 ORM

### 第十二週（11/19 ~ 11/25）：前端框架（上）

終於要進入到前端框架 React 了（雖然嚴格來說 React 並不是一個框架，但搭配其他各種 React 生態系成員，其實就算是一個框架了）。

這週會學習到 React 的基本應用以及原理，了解為什麼我們需要使用 React。

延伸閱讀：[React 性能優化大挑戰：一次理解 Immutable data 跟 shouldComponentUpdate](https://blog.techbridge.cc/2018/01/05/react-render-optimization/)

[HW12 作業連結](/homeworks/week12)

#### 目標：

- [ ] 了解 React 的目的以及原理
- [ ] 了解我們為什麼需要 React
- [ ] 了解 React 跟之前使用 jQuery 的區別
- [ ] 了解 state 跟 props 的不同
- [ ] 學習以元件的角度去看整個 App

### 第十三週（11/26 ~ 12/02）：前端框架（中）

在上一週結束之後，大家應該對 React 有了一些基本的感覺，這一週我們要繼續培養對 React 的感覺，讓大家對 React 越來越熟練。

除此之外也會教大家用 React Router 這一套 library，來實做前端的路由。

[HW13 作業連結](/homeworks/week13)

延伸閱讀：[前後端分離與 SPA](https://blog.techbridge.cc/2017/09/16/frontend-backend-mvc/)、[跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://medium.com/@hulitw/introduction-mvc-spa-and-ssr-545c941669e9)

#### 目標：

- [ ] 熟悉 React
- [ ] 知道如何使用 React Router 
- [ ] 了解 React Router 的目的
- [ ] 知道什麼是 Single Page Application
- [ ] 了解現在的前端與以往的差別


### 第十四週（12/03 ~ 12/09）：前端框架（下）

這是最後一週的前端課程，也是最後一週的 React 課程了。在之前的 React 課程中，我們已經慢慢熟悉 React 的思考模式，可是還有一些問題還沒解決，雖然你現在感受不太到，但是在 App 慢慢變大之後就會碰到了。

接續之前的課程，這一週會讓你的 Web App 變得更加完整，會導入一個新的東西：Redux，說明我們為什麼需要它，以及如何利用它與 redux-promise 來解決非同步的一些問題。

[HW14 作業連結](/homeworks/week14)

#### 目標：

- [ ] 了解 Redux 的目的以及原理
- [ ] 了解我們為什麼需要 Redux
- [ ] 知道 Redux 如何搭配 middleware 解決非同步操作的問題


### 第十五週（12/10 ~ 12/16）：後端框架（下）

之前我們學過了原生的 PHP，也學了 Express 這套輕巧的 Node.js 框架，而這一週呢，要來教 PHP 的一個輕量的框架 [CodeIgniter](https://codeigniter.org.tw/)。

在教完之後，會讓大家把之前的留言板從純 PHP 用 CodeIgnier 這套框架改寫，就可以比較一下兩者之間有哪裡不一樣。

[HW15 作業連結](/homeworks/week15)

#### 目標：

- [ ] 學過兩套不同語言的框架之後，要發現其中的異同
- [ ] 理解為什麼會需要框架
- [ ] 體驗純 PHP 跟有框架的差別在哪裡

### 第十六週（12/17 ~ 12/23）：Final Project
### 第十七週（12/24 ~ 12/30）：Final Project

### 第十八週（12/31 ~ 01/06）：Final Project

### 第十九週（01/07 ~ 01/13）：Final Project Demo


# Final Project

正式的課程就到這邊告一段落了，你學了前端後端與程式相關的基礎知識，接下來需要做一些作品累積經驗，因此接下來幾週都會讓同學做出屬於自己的 Final Project，建議可以與其他人合作，但也可以選擇一個人單打獨鬥。

根據第一期的經驗，其實找人合作會是比較好的選擇。

第一期學長姐的 Final Project：[Coffee Beans House Online
](http://thinkr.tw/coffee-beans/)、[Sukiya 仿作](http://tomlee0122.tw/static/sukiya_project/sukiya/index.html#/)

如果大家一點靈感都沒有的話，可以參考以下幾個提案（但有自己的想法當然是最好的）：

## 留言板

既然我們這次的課程做了這麼多個留言板，不如把留言板給做到極致吧！

你可以做一個「讓大家都能申請留言板」的系統，就像是無名小站那樣，每個人都可以申請帳號，有帳號之後可以開設自己的留言板，然後可以自己選擇要不要開放訪客來留言，不開放的話就預設是只有會員可以留言。

點下去會員的帳號之後還可以看到會員個人資料，或者是直接跳到會員自己的留言板去（如果有的話）。

除此之外，如果你想走前端的話，可以試著把前端改成 SPA 試試看！

## 論壇系統

建立一個論壇系統，能有不同的板塊（討論區），例如說：

1. 閒聊
2. 購物
3. 程式相關主題

在不同板塊底下都可以發表文章，除了發表文章以外，下面也能夠有回覆。

或者是你也可以把板塊當成是 Tag 而已，在同一個頁面就可以看到所有的文章，如果你想找範例的話，可以參考：http://react-china.org/

## 購物網站

做個簡單的購物網站，可以參考任何一家市面上的電商，例如說這個我隨便找的電商：https://www.yuyufarm.com/

重點是除了前端以外，你必須要有後台能夠讓管理者登入，並且管理商品（例如說調整價錢、上傳圖片、調整順序等等），可以先完成一個最簡單的版本，之後再慢慢加強。

## 社交網站

可以直接參考 Twitter：https://twitter.com/?lang=zh-tw

你可以 follow 人，然後就能夠看到他的動態，也可以自己 po 動態，會出現在自己的 follower 的牆上。

總之呢，關於 Final Project，沒有靈感的話可以先從自己常用的東西開始下手，先打造出一個最簡單的版本再慢慢加強。也可以盡量去找一些第三方的 API 來串，增加自己串 API 的經驗，例如說：

1. Firebase
2. Google Map API
3. Google Login, Facebook Login
4. 金流

## 繳交 Final Project

請準備好以下幾個東西並且於第十九週 po 到 Slack 裡面：

1. 作品網址（沒主機或是 deploy 碰到問題的可以來找我）
2. 5 分鐘以內介紹作品的短片，上傳到 YouTube（可以不用露臉，你不想出聲的話後製加文字也可以）
3. GitHub 網址（請確保你有把一些敏感的資訊例如說資料庫密碼之類的拿掉）
4. 做 final project 的心得（看你想寫在哪裡都可以）

## 自我練習

Codewar 是一個程式解題平台，靠這些題目，可以訓練自己對語法的熟悉度以及維持手感，更進階的題目則是能夠訓練思考邏輯以及解題方法。

我依照難度整理出了一些題目，平常做作業卡關或是沒事做的時候，都可以解一下這些題目。

[Codewar 題目列表](/codewar.md)

## Tech Stack

這邊列舉這堂課程用到的所有工具。

1. 課程直播：YouTube
2. 群組聊天：Slack
3. 交作業：GitHub + GitHub Classroom + Travis CI 自動批改
4. 練習題目：Codewar
5. 簽到系統：GitHub Webhook + Slack GitHub App + AWS Lambda + Google Sheet API

