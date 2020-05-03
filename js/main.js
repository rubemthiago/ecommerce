(function(win) {
    'use strict'

    function app() {
        return {
            hello: function(name) {
                return "Hi"+ name;
            }
        }
    }

    win.app = app();
})(window)
