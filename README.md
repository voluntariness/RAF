# RAF

簡化 requestAnimationFrame 的使用


#### 使用方法

    <div id="box" />
    
    <script>
      var div = document.getElementById('box');
      var callback = function(time) {
        
      };
      RAF(callback, seconds, 'swing');
    </script>
