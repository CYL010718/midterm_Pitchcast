## Project Name: PitchCast
一個可以紀錄投手在棒球比賽中的數據及即時監控比賽狀況的app

### How to open:
1. git clone
2. open folder,  npm install 
3. npm start in one terminal, npm run webpack-dev in another

### How to use:
1. 點進 "Welcome" 後，會進到一個有三個選項的頁面
2. "Add Players" 用來新增投手，新增的球員會出現在 "Player List"中
3. "Start Game" 用來紀錄並監控一場比賽，紀錄的數據會更新在球員的個人頁面裡。
4. "Player List" 用來查看隊上的投手名單及成績, "Add players"中，點選球員圖片可進到球員的個人頁面，裡面記錄球員的生涯成績及最近比賽的成績。 

### Modules used:
    使用了 https://html5up.net 的 "Twenty"作為前端的模板，大部分的物件都直接使用了其中的css

### Contribution:
    除了前端美術排版的部分是使用上述的模板之外，前端的邏輯、後端的database以及前後端的溝通都是自己寫的。

### 心得：
    基本上會想寫這樣的東西是想要幫系棒弄個比賽記錄app，身為系棒的一員看到每次都要手寫比賽紀錄然後再輸到電腦裡實在是很痛苦。實際上系棒比賽所記錄的東西其實還蠻多蠻複雜的，這次的app大概只能算個簡易版，希望之後可以把它弄得更完整。

    這次後端的database結構其實蠻簡單的，不過大概是因為才剛學還需要時間熟悉，花在上頭的時間其實不比刻前端少。另外這次也用了webpack及babel來整合一些東西，在其中也學了不少。
