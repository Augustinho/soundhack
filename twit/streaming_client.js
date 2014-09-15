var path = require("path");
var fs = require("fs");
var Twit = require('twit');  
var date = new Date();

var janelaFrequencia = 1;
var frequencia = 0;
var currentSec = 0;


var oauth = JSON.parse(fs.readFileSync("./config/twitter_credentials.js", "UTF8"));
var keywords = ['fuck'];

var client = new Twit(oauth);

var stream = client.stream('statuses/filter', { track: keywords })
var segundosAtuais = date.getSeconds();
stream.on('tweet', function(tweet) {
    //console.log(tweet.text);
    var date2 = new Date();
    segundosAtuais = date2.getSeconds();
		if (currentSec == 0 || (currentSec>49 && segundosAtuais <1)) {
			currentSec = segundosAtuais;//date.getSeconds();
			if(frequencia !=1) fs.appendFile("./freq/freq.txt", frequencia+"\r\n");
			frequencia = 1;
		} else if (segundosAtuais < currentSec + janelaFrequencia) { // && ((currentSec+janelaFrequencia)<60)) {
			frequencia+=1;
			

		} else {
			if(frequencia !=1) fs.appendFile("./freq/freq.txt", frequencia+"\r\n");
			frequencia=1;
			currentSec = segundosAtuais;
		}
	//console.log(currentSec);
		
	

});
