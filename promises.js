var sleep = require('system-sleep');
new Promise((res) =>{
    sleep(1000);
    res('refreshed');
}).then(function(res){
    console.log('wake');
})