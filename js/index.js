var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {        
        onLoadFunction();
    }
};

document.addEventListener("keydown", function (e){
    if (e.keyCode === 13) {
        login();
    }
})


app.initialize();