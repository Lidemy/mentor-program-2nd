# 作業

## hw1：短網址系統設計

請你畫出一張短網址服務的後端系統架構圖，越詳細越好，可以考慮到如何增進效能、scaling 以及備份資料。

沒靈感的話可參考：[短网址(short URL)系统的原理及其实现](https://hufangyun.com/2017/short-url/)、[Design TinyURL](https://leetcode.com/problems/design-tinyurl/description/)

圖片可參考下圖（這是一張 Mobile 與 Web 前端如何跟後端溝通的圖，這示意圖只是大概講一下應該要怎麼畫，但你實際畫出來一定跟這個長得不一樣）：
![](http://ithelp.ithome.com.tw/upload/images/20161211/20091346nyV3Lex42r.jpg)

## hw2：部署

請把你之前寫的 PHP 程式部署到自己的機器上面，並且對應到自己購買的網域。 
 
除此之外呢，我們在第六週的時候有實作過「通行證」的機制，其實在 PHP 裡面有內建的可以用，而這個機制就叫做 session。可以參考 [PHP 5 Sessions](https://www.w3schools.com/php/php_sessions.asp) 或是 [PHP Session 使用介紹，啟用與清除 session](http://www.webtech.tw/info.php?tid=33)，把之前留言板的作業改成用 PHP 內建的 session 機制。

可參考其他同學的心得（特別感謝 @yuchun33 跟 @futianshen ）：
1. [部署 AWS EC2 遠端主機 + Ubuntu LAMP 環境 + phpmyadmin ](https://github.com/Lidemy/mentor-program-2nd-yuchun33/issues/15)
2. [一小時完成 VPS (Virtual Private Server) 部署 ](https://github.com/Lidemy/mentor-program-2nd-futianshen/issues/21)

## hw3：Transaction 練習

Transaction 就是一筆交易的意思，在後端應用上非常常見。

舉例來說，假設我現在做一個購物網站，然後購物車裡面有五個產品，接著我按下結帳購買按鈕。此時我會執行五個 SQL Query，分別把每一個產品的剩餘數量都扣一，接著新增一筆訂單紀錄。

可是，假如有一個產品剛好賣完了，那怎麼辦呢？我必須把剛剛扣的都自己再加回去，這樣並不是一個好方法。因此我們需要將上面的 SQL Query 都放入一個 Transaction 裡面，要嘛就是全部成功，要嘛就是全部失敗。

現在請你寫一個非常簡單的購物系統，來試試看 Transaction。

## hw4：簡答題

1. 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
2. 什麼是資料庫的 lock？為什麼我們需要 lock？
3. NoSQL 跟 SQL 的差別在哪裡？
4. 資料庫的 ACID 是什麼？

