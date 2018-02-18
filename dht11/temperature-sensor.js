var sensor = require('node-dht-sensor');

interval = setInterval(function () { //#C

    sensor.read(11, 21, function(err, temperature, humidity) {
        if (!err) {
            console.log('temp: ' + temperature.toFixed(1) + ' °C, ' +
                'humidity: ' + humidity.toFixed(1) + ' %');
            console.log('temp: ' + (temperature.toFixed(1) * 9 / 5 + 32 ) + 'F' );
            }
        else{
            console.log ("Error: " + err);
        }
    });

}, 5000);

console.log("Let's GO!");

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
  return cToFahr;
  //  console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
  //  console.log(message);
} 
