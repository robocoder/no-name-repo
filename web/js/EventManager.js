var EventManager = {
    subscribe: function(event, fn) {
        $(this).bind(event, fn);
    },

    publish: function(event) {
        $(this).trigger(event);
    }
};
