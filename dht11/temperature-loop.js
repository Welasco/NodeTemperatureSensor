var sensor = require('node-dht-sensor');

interval = setInterval(function () { //#C

    sensor.read(11, 17, function(err, temperature, humidity) {
        if (!err) {
            console.log('temp: ' + temperature.toFixed(1) + ' °C, ' +
                'humidity: ' + humidity.toFixed(1) + ' %'
            )}
        else{
            console.log ("Error: " + err);
        }
    });

}, 5000);

console.log("Let's GO!");

