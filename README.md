## Project Name: PitchCast
一個可以紀錄投手在棒球比賽中的數據及即時監控比賽狀況的app

### How to open:
1. git clone
2. open folder,  npm install, then npm start

### How to use:
1. 點進 "Welcome" 後，會進到一個有三個選項的頁面
2. "Add Players" 用來新增投手，輸入投手姓名及背號即可新增(背號不得重複)。新增的球員會出現在 "Player List"中。
3. "Start Game" 可用來監控一場比賽及紀錄投手數據。一開始先選擇先發投手，接著藉由各個 button 來紀錄好壞球數、出局數、安打、得分等狀況，而壘間情況可藉由點擊各個壘包來標記壘上是否有人。途中可隨時更換其他投手。比賽結束點選 "close game" 結束比賽並選擇本場比賽的勝/敗投。比賽中球員的成績會被記在 "Player List" 中球員的個人頁面中。
4. "Player List" 用來查看隊上的投手名單及成績, 點選球員圖片可進到球員的個人頁面，裡面記錄球員的生涯成績及最近比賽的成績。 

### Modules used:
    使用了 https://html5up.net 的 "Twenty"作為前端的模板，大部分的物件都直接使用了其中的css。前端使用react，後端使用 Mongodb 作為 database，並使用 express 及 fetch 作爲前後端的溝通，另外使用webpack 及 babel 做資源整合。

### Contribution:
    除了前端美術排版的部分是使用上述的模板之外，前端的邏輯、後端的database以及前後端的溝通都是自己寫的。

### 心得：
    基本上會想寫這樣的東西是想要幫系棒弄個比賽記錄app，身為系棒的一員看到每次都要手寫比賽紀錄然後再輸到電腦裡實在是很痛苦。實際上系棒比賽所記錄的東西其實還蠻多蠻複雜的，這次的app大概只能算是個不包含打擊紀錄的簡易版，希望之後可以把它弄得更完整。

    這次後端的database結構其實蠻簡單的，不過大概是因為才剛學還需要時間熟悉，花在上頭的時間其實不比刻前端少。另外在使用了webpack及babel整合時也學了不少東西。
