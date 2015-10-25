(function() {
    var _raf_lasttime = 0;
    window.requestAnimationFrame = window.requestAnimationFrame || 
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || 
        window.msRequestAnimationFrame || 
        function(callback) {
            var time = new Date().getTime();
            var step = Math.max(0, 16 - (time - _raf_lasttime));
            _raf_lasttime = time + step;
            return window.setTimeout(function() { 
                callback(time + step); 
            }, step);
        };

    window.cancelAnimationFrame = window.cancelAnimationFrame ||
        function (id) {
            clearTimeout(id);
        };



    /**
     * 參考 JQuery UI (http://robertpenner.com/easing/)
     */
    var _easings = {
        linear: function(p) { return p; },
        easeIn: function(p) { return Math.pow(p, 2); },
        easeOut: function(p) { return 1 - _easings.easeIn(1 - p); },
        swing: function(p) { 
            return p < 0.5 ? 
                _easings.easeIn( p * 2 ) / 2:
                1 - _easings.easeIn( p * -2 + 2 ) / 2;
        }

    }

    
    var _raf = function(callback, ms, easing) {
        
        var _start = null;
        var _last = null;
        var _total = null;
        var _progress = 0;

        ms = parseInt(ms, 10) || 0;
        easing = easing || 'linear';

        var _run = function(timestamp) {

            if (_start === null) {
                _start = _last = timestamp;
            }
            
            _total = timestamp - _start;
            
            if (ms) {
                _progress = _easings[easing](
                    (_total >= ms)? 1 : (_total / ms)
                );
            }

            var result = callback({
                start: _start,
                last: _last,
                total: _total,
                stamp: timestamp,
                delta: timestamp - _last,
                progress: _progress
            });
            if (result === true && _progress < 1) {
                _last = timestamp;
                window.requestAnimationFrame(_run);
            }
            
        };
        window.requestAnimationFrame(_run);

        
    };
    
    window.RAF = _raf;
    
    
})();



