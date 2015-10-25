
# RAF

簡化 requestAnimationFrame 的使用

#### 使用說明 

    
    使用 RAF 時有三個參數可傳入, RAF(callback, [ms, [easing]]);
    1. 第一個參數 {callback}, 若需連續執行, 必需 return true 
    2. 第二個參數(非必填) 毫秒 {ms}, 若是需要運行 n 毫秒的動畫時, 可以傳入此參數讓操作更簡單 ,
        並且, 有設定 ms 後, 會執行 {callback} 直到 return false 或是 總執行時間 > ms
    3. 第三個參數(非必填) 動畫漸變類型{easing}, 目前有 linear, easeIn, easeOut, swing , 預設為 linear 
    
    在 RAF 執行 {callback} 時, 會傳入一個參數, 參數說明如下
    {
        start: 開始的時間
        last: 上次執行的時間
        total: 總執行時間
        stamp: 目前時間
        delta: 與上次執行的時間差
        progress: 動畫漸變的值(百分比 %), 必需要設定 ms, 才會有數值變化
    } 
      
    在 RAF() 有設定 ms 時, progress 才會有值的變數, 
        變化由 0 ~ 1 並依 {easing} 設定而有不同的變化速率 , 若未設定則為 0

#### Example (jsbin)
  [Raf Demo on jsbin.com](http://jsbin.com/moqili/embed?html,js,output)
